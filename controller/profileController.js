class profileController {

  // 获取用户资料
  async getProfile(req, res, next) {
    try {
      res.send('获取用户资料')
    } catch (err) {
      next(err)
    }
  }

  // 关注用户
  async followUser(req, res, next) {
    try {
      res.send('关注用户')
    } catch (err) {
      next(err)
    }
  }

  // 取关用户
  async unfollowUser(req, res, next) {
    try {
      res.send('取关用户')
    } catch (err) {
      next(err)
    }
  }
}


module.exports = new profileController()