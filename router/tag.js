const express = require('express')

const router = express.Router()

// 获取标签
router.get('/tags', async (req, res, next) => {
  try {
    res.send('获取标签')
  } catch (err) {
    next(err)
  }
})


module.exports = router