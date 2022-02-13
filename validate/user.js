const validate = require("../middleware/validate")
const { body } = require("express-validator")

const {
  User
} = require("../model")
const md5 = require("../util/md5")

exports.register = validate([
  // 1. 配置验证规则
  body("user.username").notEmpty().withMessage("用户名不能为空"), // withMessage()定制错误提示消息
  body("user.email")
    .notEmpty()
    .withMessage("邮箱不能为空")
    .isEmail()
    .withMessage("邮箱格式不正确")
    .bail() // 前面验证失败则不会往后执行
    .custom(async email => {
      // 自定义验证
      const user = await User.findOne({
        email
      })
      if (user) {
        // 有相同邮箱的用户存在
        return Promise.reject("邮箱已存在")
      }
    }),
  body("user.password").notEmpty().withMessage("密码不能为空")
])

exports.login = [
  validate([body("user.email").notEmpty().withMessage("邮箱不能为空"), body("user.password").notEmpty().withMessage("密码不能为空")]),
  validate([
    // 只有上面的验证通过才会执行，利用的是中间件的机制
    body("user.email").custom(async (email, { req }) => {
      // 这里参数的req解构是官网文档用法
      const user = await User.findOne({
        email
      }).select(["password", 'username', 'email', 'bio', 'image'])    // 这里需要获取密码的话，因为用户密码的模式设计那里设置了select: false，即通过查找不能查到密码，此时需要通过select()实现能查出密码

      if (!user) {
        return Promise.reject("用户不存在")
      }

      // 将数据挂载到请求对象上，这样子后续的中间件也可以直接使用
      req.user = user
    })
  ]),
  validate([
    body("user.password").custom(async (password, { req }) => {

      if (md5(password) !== req.user.password) {
        return Promise.reject("密码错误")
      }

      console.log(req.user)
    })
  ])
]