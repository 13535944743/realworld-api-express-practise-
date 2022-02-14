const { Article, User } = require('../model/index')

class articleController {

  // 获取所有文章(可增加条件筛选)
  async listArticles(req, res, next) {
    try {
      const {
        offset = 0,// offset默认为0
        limit = 20,
        tag,
        author
      } = req.query

      const filter = {}   // 用于筛选

      if (tag) {
        filter.tagList = tag
      }

      if (author) {
        const user = await User.findOne({ username: author })
        filter.author = user ? user._id : null  // 如果有这个作者，则获取作者的id用于筛选。没有则为null
      }

      const articlesCount = await Article.countDocuments()

      const articles = await Article.find(filter)   // 筛选出有这个标签的文章
        .skip(Number.parseInt(offset))       // 跳过多少条
        .limit(Number.parseInt(limit))      // 取多少条
        .sort({       // 排序， -1代表倒叙，1代表正序
          createdAt: -1
        })

      res.status(200).json({
        articles,
        articlesCount
      })
    } catch (err) {
      next(err)
    }
  }

  // 获取关注用户的所有文章(可增加条件筛选)
  async feedArticles(req, res, next) {
    try {
      res.send('获取关注用户的所有文章')
    } catch (err) {
      next(err)
    }
  }

  // 获取单篇文章
  async getArticle(req, res, next) {
    try {
      const article = await Article.findById(req.params.slug).populate('author')

      if (!article) {
        return res.status(404).end()
      }

      res.status(200).json(
        article
      )
    } catch (err) {
      next(err)
    }
  }

  // 新增文章
  async createArticle(req, res, next) {
    try {
      const article = new Article(req.body.article)

      article.author = req.user._id     // 作者在数据库中只存一个用户id，通过id去获取用户
      article.populate('author')        // 简单来说，就是通过populate()以及文章模型中的ref: 'User'，可以通过id把用户信息放到author中

      await article.save()
      res.status(201).json({
        article
      })
    } catch (err) {
      next(err)
    }
  }

  // 更新文章
  async updateArticle(req, res, next) {
    try {
      const article = req.article
      const bodyArticle = req.body.article

      article.title = bodyArticle.title || article.title  // 有修改的则用修改的，否则用原来的
      article.description = bodyArticle.description || article.description
      article.body = bodyArticle.body || article.body

      await article.save()
      res.status(200).json({
        article
      })
    } catch (err) {
      next(err)
    }
  }

  // 删除文章
  async deleteArticle(req, res, next) {
    try {
      const article = req.article
      await article.remove()
      res.status(204).end()
    } catch (err) {
      next(err)
    }
  }

  // 增加一篇文章的评论
  async addComments(req, res, next) {
    try {
      res.send('增加一篇文章的评论')
    } catch (err) {
      next(err)
    }
  }

  // 获取一篇文章的所有评论
  async getComments(req, res, next) {
    try {
      res.send('获取一篇文章的评论')
    } catch (err) {
      next(err)
    }
  }

  // 删除文章的一条评论
  async deleteComment(req, res, next) {
    try {
      res.send('删除文章的一条评论')
    } catch (err) {
      next(err)
    }
  }

  // 喜欢一篇文章
  async likeArticle(req, res, next) {
    try {
      res.send('喜欢一篇文章')
    } catch (err) {
      next(err)
    }
  }

  // 取消喜欢一篇文章
  async unlikeArticle(req, res, next) {
    try {
      res.send('取消喜欢一篇文章')
    } catch (err) {
      next(err)
    }
  }

}


module.exports = new articleController()