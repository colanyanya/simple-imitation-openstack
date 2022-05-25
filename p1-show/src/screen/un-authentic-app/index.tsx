import {useState} from "react";
import {Register} from "./register";
import {Login} from "./login";
import {Button, Card} from "antd";

export const UnAuthenticApp = () => {
    const [isRegister, setIsRegister] = useState(false)

    return (
        <div style={{display:'flex',justifyContent:'center',textAlign:"center"}}>
            <Card >
                <h2>云计算平台</h2>
                {
                    isRegister ? <Register/> : <Login/>
                }
                <Button type={'dashed'} block
                        onClick={() => setIsRegister(!isRegister)}>切换到{isRegister ? '登录' : '注册'}</Button>
            </Card>
        </div>

    )
}
