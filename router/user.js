const express = require('express')

const userController = require('../controller/userController')
const userValidate = require('../validate/user')

const router = express.Router()


// 用户登录
router.post('/users/login', userValidate.login, userController.login)

// 用户注册
router.post('/users', userValidate.register, userController.register)

// 获取当前用户
router.get('/user', userController.getCurrentUser)

// 更新用户
router.put('/user', userController.updateUser)

module.exports = router