const express = require('express')
const { body, validationResult } = require('express-validator');

const userController = require('../controller/userController')
const { User } = require('../model')

const router = express.Router()


// 用户登录
router.post('/users/login', userController.login)

// 用户注册
router.post('/users', [   // 1. 配置验证规则
  body('user.username').notEmpty().withMessage('用户名不能为空'),   // withMessage()定制错误提示消息
  body('user.email')
    .notEmpty().withMessage('邮箱不能为空')
    // .isEmail().withMessage('邮箱格式不正确')
    .bail()    // 前面验证失败则不会往后执行
    .custom(async email => {  // 自定义验证
      const user = await User.findOne({ email })
      if (user) {   // 有相同邮箱的用户存在
        return Promise.reject('邮箱已存在')
      }
    }),
  body('user.password').notEmpty().withMessage('密码不能为空'),
], (req, res, next) => {    // 2. 判断验证结果
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next()    // 这个一定要加，不然通过验证的情况就会卡住
}, userController.register)   // 3. 通过验证

// 获取当前用户
router.get('/user', userController.getCurrentUser)

// 更新用户
router.put('/user', userController.updateUser)

module.exports = router