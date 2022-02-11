// 获取用户资料
exports.getProfile = async (req, res, next) => {
  try {
    res.send('获取用户资料')
  } catch (err) {
    next(err)
  }
}

// 关注用户
exports.followUser = async (req, res, next) => {
  try {
    res.send('关注用户')
  } catch (err) {
    next(err)
  }
}

// 取关用户
exports.unfollowUser = async (req, res, next) => {
  try {
    res.send('取关用户')
  } catch (err) {
    next(err)
  }
}