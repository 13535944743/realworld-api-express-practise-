const { verify } = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')
const { User } = require('../model/index')

module.exports = async (req, res, next) => {
  // 1. 从请求头获取token
  let token = req.headers['authorization']

  token = token ? token.split('Bearer ')[1] : null

  if (!token) {
    return res.status(401).end('请求头无token或token格式不对')
  }

  try {
    // 2. 验证token是否有效
    //    无效 ==> 响应401状态码
    //    有效 ==> 把用户信息读取出来，并挂载到req请求对象中，继续往后执行
    const decodedToken = await verify(token, jwtSecret)
    req.user = await User.findById(decodedToken.userId)

    next()
  } catch (err) {
    return res.status(401).end('token无效')
  }

}