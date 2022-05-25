import React, {useState} from "react";
import {Button, Card, Dropdown, Form, Table} from "antd";
import Input from "antd/es/input/Input";
import {setHttp} from "../../untils/http";
import qs from 'qs'

interface User {
    username: string,
    password: string,
    age: string,
    phone: string
}

export const UserList = () => {
    const [userList, setUserList] = useState<User[]>([])
    const formRef = React.createRef<any>()

    const getUser = (user: User) => {
        setHttp(`/user?${qs.stringify(user)}`, undefined, {method: 'GET'}).then(setUserList)

    }
    const addUser = (user: User) => {
        setHttp(`/user`, user)
    }

    const updateUser = (user: User) => {
       setHttp('/user',user,{method:'PUT'})
    }

    const deleteUser = (user: User) => {
        setHttp('/user',user,{method:'DELETE'})
    }


    const userListColumns = [
        {
            title: '用户名',
            dataIndex: 'username',
            key: 'username'
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
            title: '电话',
            dataIndex: 'phone',
            key: 'phone'
        }
    ]

    return (
        <>
            <div style={{display: "flex", justifyContent: 'center', textAlign: 'center'}}>
                <Card style={{width: 500}}>
                    <h2>用户管理</h2>
                    <Form ref={formRef}>
                        <Form.Item label={"用户名"} name={'username'}>
                            <Input/>
                        </Form.Item>
                        <Form.Item label={"密码"} name={'password'}>
                            <Input/>
                        </Form.Item>
                        <Form.Item label={"年龄"} name={'age'}>
                            <Input/>
                        </Form.Item>
                        <Form.Item label={"电话号"} name={'phone'}>
                            <Input/>
                        </Form.Item>
                        <div>
                            <Button onClick={() => getUser(formRef.current.getFieldsValue())}>查找</Button>
                            <Button onClick={() => addUser(formRef.current.getFieldsValue())}>添加</Button>
                            <Button onClick={() => updateUser(formRef.current.getFieldsValue())}>修改</Button>
                            <Button onClick={() => deleteUser(formRef.current.getFieldsValue())}>删除</Button>
                            <Button onClick={() => formRef.current.resetFields()}>清空</Button>
                        </div>
                    </Form>
                </Card>
            </div>
            <div>
                <Card>
                    <Table columns={userListColumns} dataSource={userList}/>
                </Card>
            </div>
        </>
    )
}
