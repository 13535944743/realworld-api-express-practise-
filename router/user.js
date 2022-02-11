const express = require('express')
const res = require('express/lib/response')

const userController = require('../controller/userController')

const router = express.Router()

// function wrap(handler) {
//   return async (req, res, next) => {
//     try {
//       let a = a + 1;
//       await handler(req, res, next)
//     } catch (err) {
//       next(err)
//     }
//   }
// }

// 用户登录
router.post('/users/login', userController.login)

// 用户注册
router.post('/users', userController.register)

// 获取当前用户
router.get('/user', userController.getCurrentUser)

// 更新用户
router.put('/user', userController.updateUser)

module.exports = router