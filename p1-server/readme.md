readme

-使用说明

-数据mock说明

-API文档说明

# 使用说明

1、安装node 尽量版本在10.0以上（我用的是此时最新的16.x）

2、yarn add express // 安装 express 框架

3、yarn add nanoid // 用 nanoid 做uuid唯一性标识

4、到index.js目录下，启动node服务

cd ...../src

node index

# 数据mock说明
data.json 保存用户数据和主机数据

me.json 保存登录用户的token

> 注意：数据可以随意更改除了以下：
>
> data.json :
>
> 两个大列表名 userList computeList
>
> userList的id,name,password
>
> computeList的id
>
> me.json ：
>
>大列表名 meList
>
> meList 的 id
# API

POST /me {token} => {me}

POST /login {usr,psw} =>{id,token}

POST /register {usr,psw} => {id,token}

POST /logout {user} =>

POST /userList {token} => {userList}

POST /userList/add {token,newUser} =>

PUT /userList/:id {token,newUser} =>

DELETE /userList/:id {token} =>

POST /computeList {token} => {computeList}

POST /computeList/add {token,newCompute} =>

PUT /computeList/:id {token,newCompute} =>

DELETE /computeList/:id {token} =>

