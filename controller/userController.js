class userController {

  // 用户登录
  async login(req, res, next) {
    try {
      res.send('用户登录')
    } catch (err) {
      next(err)
    }
  }

  // 用户注册
  async register(req, res, next) {
    try {
      res.send('用户注册')
    } catch (err) {
      next(err)
    }
  }

  // 获取当前用户
  async getCurrentUser(req, res, next) {
    try {
      res.send('获取当前用户')
    } catch (err) {
      next(err)
    }
  }

  // 更新用户
  async updateUser(req, res, next) {
    try {
      res.send('更新用户')
    } catch (err) {
      next(err)
    }
  }
}

module.exports = new userController()