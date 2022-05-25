const express = require('express')
const {
  getUserList, addUser, login, register, logout, hasToken, updateUser, deleteUser, getComputeList, addCompute,
  updateCompute, deleteCompute, getTokenMe
} = require("./store");
const {responseSuccessMsg, responseFailMsg, responseUnAuthMsg} = require("./res");

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
// 配置路由
app.get('/', function (req, res) {
  res.send('Hello')
})

app.post('/login', function (req, res) {
  const data = login(req.body.usr, req.body.psw)
  if (data) {
    res.json(responseSuccessMsg(data))
  } else {
    res.send(responseFailMsg('用户名或密码错误'))
  }
})

app.post('/register', function (req, res) {
  const data = register(req.body.usr, req.body.psw)
  if (data) {
    res.send(responseSuccessMsg(data))
  } else {
    res.send(responseFailMsg('用户名或密码错误'))
  }
})

app.post('/logout', function (req, res) {
  const data = logout(req.body.token)
  res.send(responseSuccessMsg(data))
})

app.post('/userList', function (req, res) {
  if (!req.body.token || !hasToken(req.body.token)) {
    res.send(responseUnAuthMsg('未认证或认证失败'))
  } else {
    res.send(responseSuccessMsg(getUserList()))
  }
})

app.post('/userList/add', function (req, res) {
  if (!req.body.token || !hasToken(req.body.token)) {
    res.send(responseUnAuthMsg('未认证或认证失败'))
  } else {
    res.send(responseSuccessMsg(addUser(req.body['newUser'])))
  }
})

app.put('/userList/:id', function (req, res) {
  if (!req.body.token || !hasToken(req.body.token)) {
    res.send(responseUnAuthMsg('未认证或认证失败'))
  } else {
    console.log(req.params['id'])
    res.send(responseSuccessMsg(updateUser(req.params['id'], req.body['newUser'])))
  }
})

app.delete('/userList/:id', function (req, res) {
  if (!req.body.token || !hasToken(req.body.token)) {
    res.send(responseUnAuthMsg('未认证或认证失败'))
  } else {
    res.send(responseSuccessMsg(deleteUser(req.params['id'])))
  }
})

app.post('/computeList', function (req, res) {
  if (!req.body.token || !hasToken(req.body.token)) {
    res.send(responseUnAuthMsg('未认证或认证失败'))
  } else {
    res.send(responseSuccessMsg(getComputeList()))
  }
})

app.post('/computeList/add', function (req, res) {
  if (!req.body.token || !hasToken(req.body.token)) {
    res.send(responseUnAuthMsg('未认证或认证失败'))
  } else {
    res.send(responseSuccessMsg(addCompute(req.body['newCompute'])))
  }
})

app.put('/computeList/:id', function (req, res) {
  if (!req.body.token || !hasToken(req.body.token)) {
    res.send(responseUnAuthMsg('未认证或认证失败'))
  } else {
    res.send(responseSuccessMsg(updateCompute(req.params['id'], req.body['newCompute'])))
  }
})

app.delete('/computeList/:id', function (req, res) {
  if (!req.body.token || !hasToken(req.body.token)) {
    res.send(responseUnAuthMsg('未认证或认证失败'))
  } else {
    res.send(responseSuccessMsg(deleteCompute(req.params['id'])))
  }
})


app.post('/me',function (req, res) {
  if (!req.body.token || !hasToken(req.body.token)) {
    res.send(responseUnAuthMsg('未认证或认证失败'))
  } else {
    res.send(responseSuccessMsg(getTokenMe(req.body.token)))
  }
})

app.listen(8100, () => {
  console.log('服务已启动 8100 端口')
})
