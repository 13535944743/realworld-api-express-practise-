const { User } = require('../model/index')

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
      // 1. 获取请求体数据
      console.log(req.body)

      // 2. 数据验证
      // 2.1 基本数据认证：如邮箱、密码为必需，昵称为非必需等
      // 2.2 业务数据认证：如不能和已有帐号的邮箱重复等


      // 3. 验证通过，将数据保存到数据库
      const user = new User(req.body.user)
      await user.save()

      // 4. 发送成功响应
      res.status(201).json({
        user
      })
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