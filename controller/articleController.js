class articleController {

  // 获取所有文章(可增加条件筛选)
  async listArticles(req, res, next) {
    try {
      res.send('获取所有文章')
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
      res.send('获取单篇文章')
    } catch (err) {
      next(err)
    }
  }

  // 新增文章
  async createArticle(req, res, next) {
    try {
      res.send('新增文章')
    } catch (err) {
      next(err)
    }
  }

  // 更新文章
  async updateArticle(req, res, next) {
    try {
      res.send('更新文章')
    } catch (err) {
      next(err)
    }
  }

  // 删除文章
  async deleteArticle(req, res, next) {
    try {
      res.send('删除文章')
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