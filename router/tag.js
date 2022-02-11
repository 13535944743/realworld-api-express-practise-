const express = require('express')

const tagController = require('../controller/tag')

const router = express.Router()

// 获取标签
router.get('/tags', tagController.getTags)


module.exports = router