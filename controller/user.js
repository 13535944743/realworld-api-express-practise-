// 用户登录
exports.login = async (req, res, next) => {
  try {
    res.send('用户登录')
  } catch (err) {
    next(err)
  }
}

// 用户注册
exports.register = async (req, res, next) => {
  try {
    res.send('用户注册')
  } catch (err) {
    next(err)
  }
}

// 获取当前用户
exports.getCurrentUser = async (req, res, next) => {
  try {
    res.send('获取当前用户')
  } catch (err) {
    next(err)
  }
}

// 更新用户
exports.updateUser = async (req, res, next) => {
  try {
    res.send('更新用户')
  } catch (err) {
    next(err)
  }
}