const express = require('express')
const morgan = require('morgan')
const cors = require('cors');

const router = require('./router')  // 引入路由级别中间件
const errorHandler = require('./middleware/error-handler')

require('./model')

const app = express()

// 日志输出
app.use(morgan('dev'))

// 解析请求体的中间件
app.use(express.json())
app.use(express.urlencoded())

// 提供跨域资源请求
app.use(cors())

const PORT = process.env.PORT || 3000  // process.env.PORT读取当前目录下环境变量port的值，若没有则默认端口为3000

app.use('/api', router)   // 挂载路由级别中间件

// 挂载统一处理服务端错误中间件(最后)
app.use(errorHandler())

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})