import {useState} from "react";
import {Register} from "./register";
import {Login} from "./login";
import {Button, Card} from "antd";
import styled from "@emotion/styled";


export const UnAuthenticApp = () => {
    const [isRegister, setIsRegister] = useState(false)

    return (
        <CenterDiv>
            <Card>
                <h2>云计算平台</h2>
                {
                    isRegister ? <Register/> : <Login/>
                }
                <Button type={'dashed'} block
                        onClick={() => setIsRegister(!isRegister)}>切换到{isRegister ? '登录' : '注册'}</Button>
            </Card>
        </CenterDiv>

    )
}

const CenterDiv = styled.div`
    margin: 100px auto;
    width: 400px;
`

