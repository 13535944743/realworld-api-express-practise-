// 获取所有文章(可增加条件筛选)
exports.listArticles = async (req, res, next) => {
  try {
    res.send('获取所有文章')
  } catch (err) {
    next(err)
  }
}

// 获取关注用户的所有文章(可增加条件筛选)
exports.feedArticles = async (req, res, next) => {
  try {
    res.send('获取关注用户的所有文章')
  } catch (err) {
    next(err)
  }
}

// 获取单篇文章
exports.getArticle = async (req, res, next) => {
  try {
    res.send('获取单篇文章')
  } catch (err) {
    next(err)
  }
}

// 新增文章
exports.createArticle = async (req, res, next) => {
  try {
    res.send('新增文章')
  } catch (err) {
    next(err)
  }
}

// 更新文章
exports.updateArticle = async (req, res, next) => {
  try {
    res.send('更新文章')
  } catch (err) {
    next(err)
  }
}

// 删除文章
exports.deleteArticle = async (req, res, next) => {
  try {
    res.send('删除文章')
  } catch (err) {
    next(err)
  }
}

// 增加一篇文章的评论
exports.addComments = async (req, res, next) => {
  try {
    res.send('增加一篇文章的评论')
  } catch (err) {
    next(err)
  }
}

// 获取一篇文章的所有评论
exports.getComments = async (req, res, next) => {
  try {
    res.send('获取一篇文章的评论')
  } catch (err) {
    next(err)
  }
}

// 删除文章的一条评论
exports.deleteComment = async (req, res, next) => {
  try {
    res.send('删除文章的一条评论')
  } catch (err) {
    next(err)
  }
}

// 喜欢一篇文章
exports.likeArticle = async (req, res, next) => {
  try {
    res.send('喜欢一篇文章')
  } catch (err) {
    next(err)
  }
}

// 取消喜欢一篇文章
exports.unlikeArticle = async (req, res, next) => {
  try {
    res.send('取消喜欢一篇文章')
  } catch (err) {
    next(err)
  }
}