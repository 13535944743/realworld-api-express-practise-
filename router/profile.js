const express = require('express')

const router = express.Router()

// 获取用户资料
router.get('/:username', async (req, res, next) => {
  try {
    res.send('获取用户资料')
  } catch (err) {
    next(err)
  }
})

// 关注用户
router.post('/:username/follow', async (req, res, next) => {
  try {
    res.send('关注用户')
  } catch (err) {
    next(err)
  }
})

// 取关用户
router.delete('/:username/follow', async (req, res, next) => {
  try {
    res.send('取关用户')
  } catch (err) {
    next(err)
  }
})

module.exports = router