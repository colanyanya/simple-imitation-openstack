import React, {useEffect, useState} from "react";
import {getToken} from "../../../context/auth-provider";
import {setHttp} from "../../../untils/http";
import {User} from "../../../context/inter";
import {Button, Table} from "antd";
import {useNavigate} from "react-router-dom";

export const UserList = () => {
    const [userList, setUserList] = useState<User[]>([])
    const [A,setA] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        setHttp('/userList', {token: getToken()}).then(async (req) => {
            if (req.stateCode === 200) {
                setUserList(req.data)
            } else {
                new Error("用户列表返回失败")
            }
        })
    }, [A])

    const toUserUpdate = (user: User) => {
        navigate(`/user/${user.id}`, {state:user})
    }

    const toAddUser = () => {
      navigate('/addUser')
    }

    const deleteUser = (id: string) => {
        setHttp(`/userList/${id}`, {token: getToken()}, {method: 'DELETE'}).then(req => {
            if (req.stateCode === 200) {
                setA(!A)
            } else {
                new Error('获取主机列表失败')
            }
        })
    }

    const userListColumns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: '用户名',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: '密码',
            dataIndex: 'password',
            key: 'password'
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age'
        },
        {
            title: '邮箱',
            dataIndex: 'email',
            key: 'email'
        },
        {
            title: '权限',
            // dataIndex: 'auth',
            key: 'auth',
            render:(user:User)=>{
                return user.auth==="1"?"管理员":"普通用户"
            }
        },
        {
            title: '操作',
            key: 'action',
            render: (user:User) => (
                <>
                    <Button onClick={()=>toUserUpdate(user)}>修改</Button>
                    <Button onClick={()=>deleteUser(user.id)}>删除</Button>
                </>
            )
        },
    ]


    return (
        <div>
            <h2>用户列表</h2>
            <Button onClick={()=>toAddUser()}>新增用户</Button>
            <Table columns={userListColumns} dataSource={userList}/>
        </div>
    )
}

