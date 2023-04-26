
const express = require("express");
const app = express();
/*

app.get('/', (req, res) => {
  // req.params 等等
  res.send("hello World!")
})



// express.static 对外提供静态资源js
// express.static(xxxx)文件名，之后就可以访问文件名里面的所有文件
// app.use(express.static(./public))
// app.use('/abc', express.static(./public)) 可以加前缀，相当于目录
// 托管多个静态资源目录

// express 的路由
// 客户端，跟服务器的处理函数之间的映射关系
// 分为三个部分。请求的类型，请求的url地址，处理函数
// app.METHOD(PATH, HANDLER)
// 请求类型和url同时匹配成功
// app.get('/', (req,res)=>{
// ...
// })

 * 最简单，就是把路由挂在app上
 * app.get()
 * app.post()
 * 
 * 模块化路由
 * 方便路由进行模块化的管理
 * 不建议直接挂在app
 * 抽离为单独的模块
 * 
 */

// nodemon 工具 监听项目的变动

const router = require("./api")

app.use(router);

app.listen(3000, () => {
  console.log("123123");
}) 