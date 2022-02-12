const mongoose = require('mongoose')

const baseModel = require('./base-model')

// 创建用户模型
const userSchema = mongoose.Schema({
  ...baseModel,
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  bio: {    // 简介
    type: String,
    default: null
  },
  image: {    // 头像
    type: String,
    default: null
  }
})

module.exports = userSchema