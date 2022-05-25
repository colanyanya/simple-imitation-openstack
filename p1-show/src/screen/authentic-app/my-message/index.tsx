import React from "react";
import {useAuth} from "../../../context/auth-context";
import {Button, Form, Input, Table} from "antd";
import {User} from "../../../context/inter";
import {setHttp} from "../../../untils/http";
import {getToken} from "../../../context/auth-provider";
import {useNavigate} from "react-router-dom";

export const MyMessage = () => {
    const {user} = useAuth()
    const navigate = useNavigate()

    const toMineUpdate = () => {
        navigate(`/mine/update` )
    }



    return (
        <div>
            <h2>个人信息</h2>
             {/*@ts-ignore*/}
            <Button onClick={()=>toMineUpdate()}>修改用户</Button>
            <Form initialValues={user||{}}>
                <Form.Item label={'用户名'} name={'name'}>
                    <Input disabled={true}/>
                </Form.Item>
                <Form.Item label={'id'} name={'id'}>
                    <Input disabled={true}/>
                </Form.Item>
                <Form.Item label={'年龄'} name={'age'}>
                    <Input disabled={true}/>
                </Form.Item>
                <Form.Item label={'邮箱'} name={'email'}>
                    <Input disabled={true}/>
                </Form.Item>
            </Form>
        </div>
    )
}
