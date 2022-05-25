import React from "react";
import {useAuth} from "../../context/auth-context";
import {Button, Menu} from "antd";
import {useNavigate} from "react-router-dom"

export const MenuNav = () => {
    const {logout} = useAuth()
    const navigate = useNavigate()

    const toMine = () => {
        navigate('/mine')
    }

    const toUsr = () => {
        navigate('/user')
    }

    const toCompute = () => {
        navigate('/compute')
    }

    return (
        <div>
            <Menu>
                <Button onClick={logout}>←登出</Button>
                <Button onClick={() => toMine()}>个人中心</Button>
                <Button onClick={() => toUsr()}>用户管理</Button>
                <Button onClick={() => toCompute()}>主机管理</Button>
            </Menu>
        </div>
    )
}
