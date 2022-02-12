const jwt = require('jsonwebtoken')
const { promisify } = require('util')   // 将回调函数转换成Promise形式


exports.sign = promisify(jwt.sign)

exports.verify = promisify(jwt.verify)

exports.decode = promisify(jwt.decode)  // 不验证，直接解析
