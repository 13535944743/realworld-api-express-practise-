const crypto = require('crypto')

module.exports = str => {   // str是明文，即要加密的数据
  return crypto.createHash('md5')  // 必须是crypto支持的散列算法
    .update(str)       // 可以凭借字符串，达到混淆效果，如hunxiao + str
    .digest('hex')
}