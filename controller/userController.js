const { User } = require('../model/index')

const jwt = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')

class userController {

  // 用户登录
  async login(req, res, next) {
    try {
      // 1. 数据验证
      // 2. 生成token
      const user = req.user.toJSON()

      const token = await jwt.sign({
        userId: user._id    // 生成token不需要全部user信息，只要_id即可
      }, jwtSecret)

      // 3. 发送成功响应(包含token的用户信息)
      delete user.password
      res.status(200).json({
        ...user,
        token
      })
    } catch (err) {
      next(err)
    }
  }

  // 用户注册
  async register(req, res, next) {
    try {
      let user = new User(req.body.user)
      await user.save()

      user = user.toJSON()    // 因为user是mongodb的对象，不能直接delete，所以先把它转成JSON
      delete user.password

      // 发送成功响应
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