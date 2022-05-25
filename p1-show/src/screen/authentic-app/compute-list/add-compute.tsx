import React from "react";
import {Button, Form, Input} from "antd";
import {Compute} from "../../../context/inter";
import {setHttp} from "../../../untils/http";
import {getToken} from "../../../context/auth-provider";
import {useNavigate} from "react-router-dom";

export const AddCompute = () => {
    const navigate = useNavigate()
    const addCompute = (newCompute: Compute) => {
        setHttp('/computeList/add', {token: getToken(), newCompute})
        navigate('/compute')
    }

    return (
        <div>
            <h2>云主机添加</h2>
            <Form onFinish={addCompute}>
                <Form.Item label={'主机名'} name={'name'}>
                    <Input/>
                </Form.Item>
                <Form.Item label={'镜像名'} name={'mirror'}>
                    <Input/>
                </Form.Item>
                <Form.Item label={'ip地址'} name={'ip'}>
                    <Input/>
                </Form.Item>
                <Form.Item label={'类型'} name={'type'}>
                    <Input/>
                </Form.Item>
                <Form.Item>
                    <Button htmlType={"submit"}>提交新增主机信息</Button>
                </Form.Item>
            </Form>
        </div>
    )
}
