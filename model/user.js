const mongoose = require('mongoose')

const baseModel = require('./base-model')
const md5 = require('../util/md5')

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
    required: true,
    set: value => md5(value),    // 对密码赋值时，会调用md5进行加密
    select: false    // 查询数据时，不显示出来

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