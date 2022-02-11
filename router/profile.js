const express = require('express')

const profileController = require('../controller/profileController')

const router = express.Router()

// 获取用户资料
router.get('/:username', profileController.getProfile)

// 关注用户
router.post('/:username/follow', profileController.followUser)

// 取关用户
router.delete('/:username/follow', profileController.unfollowUser)

module.exports = router