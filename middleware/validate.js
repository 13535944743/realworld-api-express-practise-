const { validationResult, buildCheckFunction } = require("express-validator")
const { isValidObjectId } = require('mongoose')

exports = module.exports = validations => {
  return async (req, res, next) => {
    await Promise.all(validations.map(validation => validation.run(req)))

    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }

    res.status(400).json({ errors: errors.array() })
  }
}

exports.isValidObjectId = (location, fields) => {   // 第一个参数是验证的数据的位置，第二个参数是验证数据字段
  return buildCheckFunction(location)(fields).custom(async value => {
    if (!isValidObjectId(value)) {
      return Promise.reject('ID不是有效的ObjectID')
    }
  })
}
