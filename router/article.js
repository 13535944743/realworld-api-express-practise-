const express = require('express')

const articleController = require('../controller/article')

const router = express.Router()

// 获取所有文章(可增加条件筛选)
router.get('/', articleController.listArticles)

// 获取关注用户的所有文章(可增加条件筛选)
router.get('/feed', articleController.feedArticles)

// 获取单篇文章
router.get('/:slug', articleController.getArticle)   // slug类似id，用于确定特定文章

// 新增文章
router.post('/', articleController.createArticle)

// 更新文章
router.put('/:slug', articleController.updateArticle)

// 删除文章
router.delete('/:slug', articleController.deleteArticle)

// 增加一篇文章的评论
router.post('/:slug/comments', articleController.addComments)

// 获取一篇文章的所有评论
router.get('/:slug/comments', articleController.getComments)

// 删除文章的一条评论
router.delete('/:slug/comments/:id', articleController.deleteComment)

// 喜欢一篇文章
router.post('/:slug/favorite', articleController.likeArticle)

// 取消喜欢一篇文章
router.delete('/:slug/favorite', articleController.unlikeArticle)

module.exports = router