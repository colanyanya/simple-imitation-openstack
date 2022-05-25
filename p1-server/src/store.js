const fs = require('fs')
const {nanoid} = require('nanoid')
const {cleanObject} = require("./utils");

const data = JSON.parse(fs.readFileSync('./data/data.json', 'utf-8'))
const data2 = JSON.parse(fs.readFileSync('./data/me.json', 'utf-8'))
let userList = data['userList']
let computeList = data['computeList']
let meList = data2['meList']

const saveData = () => {
  const newData = {
    userList,
    computeList
  }
  fs.writeFileSync('./data/data.json', JSON.stringify(newData), 'utf-8')
}

const saveData2 = () => {
  const newData = {
    meList
  }
  fs.writeFileSync('./data/me.json', JSON.stringify(newData), 'utf-8')
}

const hasToken = (token) => {
  if (meList.find(me => me.token === token)) return true
}

const getUserList = () => {
  return userList
}

const deleteUser = (id) => {
  userList = userList.filter(user => user.id !== id)
  saveData()
  return '删除成功'
}

const updateUser = (id, newUser) => {
  if (newUser.name && userList.find(user => user.name === newUser.name).id !== id) {
    return "rename"
  }
  userList.forEach((user, index, arr) => {
    if (user.id === id) {
      arr[index] = {...user, ...cleanObject(newUser)}
    }
  })
  saveData()
}

const addUser = (newUser) => {
  if (newUser.name && userList.find(user => user.name === newUser.name)) {
    return "rename"
  }
  userList.push({...newUser, id: nanoid()})
  saveData()
}


const getComputeList = () => {
  return computeList
}

const deleteCompute = (id) => {
  computeList = computeList.filter(compute => compute.id !== id)
  saveData()
  return '删除成功'
}

const updateCompute = (id, newCompute) => {
  computeList.forEach((compute, index, arr) => {
    if (compute.id === id) {
      arr[index] = {...compute, ...newCompute}
    }
  })
  saveData()
  return '更新成功'
}

const addCompute = (newCompute) => {
  computeList.push({...newCompute, id: nanoid(),state:'关机',created:Date.now()})
  saveData()
  return '添加成功'
}

const login = (usr, psw) => {
  const user = userList.find(user => user.name === usr && user.password === psw)
  const me = meList.find(me => me.name === usr)
  if (!user) return
  if (me) removeMe(usr)
  const tokenMsg = {...user, token: nanoid(),password:''}
  meList.push(tokenMsg)
  saveData2()
  return tokenMsg
}

const register = (usr, psw) => {
  if (addUser({name: usr, password: psw}) === 'rename') return 'rename'
  const user = userList.find(user => user.name === usr)
  const tokenMsg = {...user, token: nanoid(),password: ''}
  meList.push(tokenMsg)
  saveData()
  saveData2()
  return tokenMsg
}

const logout = (token) => {
  meList = meList.filter(me => me.token !== token)
  saveData2()
  return '登出成功'
}

const removeMe = (usr)=>{
  meList = meList.filter(me => me.name !== usr)
  saveData2()
  return '登出成功'
}

const getTokenMe = (token)=>{
  const me = meList.find(me=>me.token === token)
  return me
}

module.exports = {
  hasToken,
  getTokenMe,
  login,
  logout,
  register,
  getUserList,
  updateUser,
  addUser,
  deleteUser,
  getComputeList,
  updateCompute,
  addCompute,
  deleteCompute
}
