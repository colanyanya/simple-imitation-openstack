import React from "react";
import {useLocation, useNavigate} from "react-router-dom"
import {Button, Form, Input} from "antd";
import {User, UserResponse} from "../../../context/inter";
import {setHttp} from "../../../untils/http";
import {getToken, setUserToken} from "../../../context/auth-provider";
import {useAuth} from "../../../context/auth-context";

export const UpdateUser = () => {
    const location = useLocation()
    const user = location.state as User
    const navigate = useNavigate()

    const updateUser = ({id,...newUser}:User)=>{
        setHttp(`/userList/${id}`,{token:getToken(),newUser},{method:'PUT'})
        navigate('/user')
    }

    return (
        <div>
            <h2>更新用户信息</h2>
            <Form initialValues={user} onFinish={updateUser}>
                <Form.Item label={'id'} name={'id'}>
                    <Input disabled={true}/>
                </Form.Item>
                <Form.Item label={'用户名'} name={'name'}>
                    <Input disabled={true}/>
                </Form.Item>
                <Form.Item label={'密码'} name={'password'}>
                    <Input />
                </Form.Item>
                <Form.Item label={'年龄'} name={'age'}>
                    <Input />
                </Form.Item>
                <Form.Item label={'邮箱'} name={'email'}>
                    <Input />
                </Form.Item>
                <Button htmlType={"submit"}>提交更改信息</Button>
                <Form.Item/>
            </Form>
        </div>
    )
}
