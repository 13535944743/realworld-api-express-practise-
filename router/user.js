const express = require('express')

const router = express.Router()

// 用户登录
router.post('/users/login', async (req, res, next) => {
  try {
    res.send('用户登录')
  } catch (err) {
    next(err)
  }
})

// 用户注册
router.post('/users', async (req, res, next) => {
  try {
    res.send('用户注册')
  } catch (err) {
    next(err)
  }
})

// 获取当前用户
router.get('/user', async (req, res, next) => {
  try {
    res.send('获取当前用户')
  } catch (err) {
    next(err)
  }
})

// 更新用户
router.put('/user', async (req, res, next) => {
  try {
    res.send('更新用户')
  } catch (err) {
    next(err)
  }
})

module.exports = router