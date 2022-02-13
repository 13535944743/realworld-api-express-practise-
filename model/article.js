const mongoose = require('mongoose')

const baseModel = require('./base-model')

const Schema = mongoose.Schema

// 创建文章模型
const articleSchema = mongoose.Schema({
  ...baseModel,
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  tagList: {
    type: [String],
    default: null
  },
  favoritesCount: {
    type: Number,
    default: 0
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',   // 存用户id，之后映射到用户模型去
    required: true
  }
})

module.exports = articleSchema