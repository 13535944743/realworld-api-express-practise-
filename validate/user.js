const validate = require("../middleware/validate")
const { body, validationResult } = require('express-validator');

const { User } = require('../model')

exports.register = validate([   // 1. 配置验证规则
  body('user.username').notEmpty().withMessage('用户名不能为空'),   // withMessage()定制错误提示消息
  body('user.email')
    .notEmpty().withMessage('邮箱不能为空')
    .isEmail().withMessage('邮箱格式不正确')
    .bail()    // 前面验证失败则不会往后执行
    .custom(async email => {  // 自定义验证
      const user = await User.findOne({ email })
      if (user) {   // 有相同邮箱的用户存在
        return Promise.reject('邮箱已存在')
      }
    }),
  body('user.password').notEmpty().withMessage('密码不能为空'),
])