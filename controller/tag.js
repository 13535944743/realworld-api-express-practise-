// 获取标签
exports.getTags = async (req, res, next) => {
  try {
    res.send('获取标签')
  } catch (err) {
    next(err)
  }
}