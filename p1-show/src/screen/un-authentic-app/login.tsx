import React, {FormEvent} from "react";
import {useAuth} from "../../context/auth-context";
import {Button, Form, Input} from "antd";

export const Login = () => {
    const {login} = useAuth()
    const handleSubmit = (values: {username:string,password:string})=>{
        login(values)
    }

    return (
        <Form onFinish={handleSubmit}>
            <Form.Item name={'username'} rules={[{required: true,message:'请输入用户名'}]}>
                <Input type="text" placeholder={'用户名'}/>
            </Form.Item>
            <Form.Item name={'password'} rules={[{required: true,message:'请输入密码'}]}>
                <Input type="text" placeholder={'密码'}/>
            </Form.Item>
            <Form.Item>
                <Button type={'primary'} htmlType={'submit'} block>登录</Button>
            </Form.Item>
        </Form>
    )
}

