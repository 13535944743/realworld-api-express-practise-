const validate = require("../middleware/validate")
const { body, param } = require("express-validator")
const { Article } = require('../model')

exports.createArticle = validate([
  body('article.title').notEmpty().withMessage('文章标题不能为空'),
  body('article.description').notEmpty().withMessage('文章摘要不能为空'),
  body('article.body').notEmpty().withMessage('文章内容不能为空')
])


exports.getArticle = validate([
  validate.isValidObjectId(['params'], 'slug')    // 第一个参数是验证的数据的位置，第二个参数是验证数据字段

  // param('slug').custom(async value => {
  //   if (!mongoose.isValidObjectId(value)) {

  //     return Promise.reject('文章ID类型错误')
  //   }

  // })
])

exports.updateArticle = [
  validate([
    validate.isValidObjectId(['params'], 'slug')    // 第一个参数是验证的数据的位置，第二个参数是验证数据字段
  ]),
  async (req, res, next) => {
    // 校验文章是否存在
    const articleId = req.params.slug
    const article = await Article.findById(articleId)
    req.article = article     // 把article挂载到req上

    if (!article) {   // 要修改的文章不存在
      return res.status(404).end()
    }
    next()    // 文章存在，下一个中间件处理
  },
  async (req, res, next) => {
    // 判断文章作者是否是登录用户(禁止修改别人的文章)

    if (req.user._id.toString() !== req.article.author.toString()) {    // ObjectId是一个对象，不能直接比较
      return res.status(403).end()
    }
    next()
  }
]

exports.deleteArticle = exports.updateArticle