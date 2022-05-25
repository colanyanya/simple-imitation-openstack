import React from "react";
import {Button, Form, Input} from "antd";
import {User} from "../../../context/inter";
import {setHttp} from "../../../untils/http";
import {getToken} from "../../../context/auth-provider";
import {useNavigate} from "react-router-dom";


export const AddUser = () => {
  const navigate = useNavigate()

  const addUser = (newUser:User) => {
    setHttp('/userList/add',{token:getToken(),newUser})
    navigate('/user')
  }

  return(
      <div>
        <h2>新增用户</h2>
        <Form onFinish={addUser}>
          <Form.Item label={'用户名'} name={'name'}>
            <Input/>
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
          <Button htmlType={"submit"}>提交新用户信息</Button>
          <Form.Item/>
        </Form>
      </div>
  )
}
