// 导入express
const express = require('express')
// 导入path
const path = require('path')

// 创建 express 的实例
const app = express()

// 处理静态资源
app.use('/static', express.static('static'))

// 如果是静态资源（css/图片文件/字体/js 。。。）由上面的 static 处理
// 如果不是静态资源，就做一个统一处理，全都指向：index.html
// 比如：
//  http://localhost:3000/home/newslist
//  http://localhost:3000/home
//  http://localhost:3000/home/newsinfo/13
app.use((req, res) => {
  // sendFile 读取文件，并且响应
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
