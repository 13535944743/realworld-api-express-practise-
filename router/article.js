const express = require('express')

const router = express.Router()

// 获取所有文章(可增加条件筛选)
router.get('/', async (req, res, next) => {
  try {
    res.send('获取所有文章')
  } catch (err) {
    next(err)
  }
})

// 获取关注用户的所有文章(可增加条件筛选)
router.get('/feed', async (req, res, next) => {
  try {
    res.send('获取关注用户的所有文章')
  } catch (err) {
    next(err)
  }
})

// 获取单篇文章
router.get('/:slug', async (req, res, next) => {    // slug类似id，用于确定特定文章
  try {
    res.send('获取单篇文章')
  } catch (err) {
    next(err)
  }
})

// 新增文章
router.post('/', async (req, res, next) => {
  try {
    res.send('新增文章')
  } catch (err) {
    next(err)
  }
})

// 更新文章
router.put('/:slug', async (req, res, next) => {
  try {
    res.send('更新文章')
  } catch (err) {
    next(err)
  }
})

// 删除文章
router.delete('/:slug', async (req, res, next) => {
  try {
    res.send('删除文章')
  } catch (err) {
    next(err)
  }
})

// 增加一篇文章的评论
router.post('/:slug/comments', async (req, res, next) => {
  try {
    res.send('增加一篇文章的评论')
  } catch (err) {
    next(err)
  }
})

// 获取一篇文章的所有评论
router.get('/:slug/comments', async (req, res, next) => {
  try {
    res.send('获取一篇文章的评论')
  } catch (err) {
    next(err)
  }
})

// 删除文章的一条评论
router.delete('/:slug/comments/:id', async (req, res, next) => {
  try {
    res.send('删除文章的一条评论')
  } catch (err) {
    next(err)
  }
})

// 喜欢一篇文章
router.post('/:slug/favorite', async (req, res, next) => {
  try {
    res.send('喜欢一篇文章')
  } catch (err) {
    next(err)
  }
})

// 取消喜欢一篇文章
router.delete('/:slug/favorite', async (req, res, next) => {
  try {
    res.send('取消喜欢一篇文章')
  } catch (err) {
    next(err)
  }
})

module.exports = router