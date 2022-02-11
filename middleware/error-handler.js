module.exports = () => {
  return (err, req, res, next) => {   // 错误处理中间件必须要四个参数
    res.status(500).json({
      error: err.message
    })
  }
}