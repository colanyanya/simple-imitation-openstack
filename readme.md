# 这是一个简易版仿openstack



* `p1-server` 是 `仿openstack`
* `p1-show` 是 `可视化界面`

## p1-server

* expressjs作为接口层

* 原生js最为store层

* 数据存储在data下的json文件中

* 

### 运行方法

1、到`p1-server`目录下执行`yarn install`

2、到`p1-server/src`目录下`node index`



### 数据说明

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
> 大列表名 meList
>
> meList 的 id



### api说明

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



## p1-show

* 使用`react`+`antd`

### 运行方法

1、到`p1-show`目录下执行`yarn install`

2、到`p1-show`目录下`yarn start`
