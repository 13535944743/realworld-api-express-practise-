class tagController {

  // 获取标签
  async getTags(req, res, next) {
    try {
      res.send('获取标签')
    } catch (err) {
      next(err)
    }
  }
}

module.exports = new tagController()