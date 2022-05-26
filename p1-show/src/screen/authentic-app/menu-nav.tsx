import React from "react";
import { useAuth } from "../../context/auth-context";
import { Button, Menu, MenuProps } from "antd";
import { useNavigate } from "react-router-dom"
import styled from "@emotion/styled";

export const MenuNav = () => {
    const { logout } = useAuth()
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

    type MenuItem = Required<MenuProps>['items'][number];
    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
        type?: 'group',
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
            type,
        } as MenuItem;
    }

    const MenuItem = [
        getItem(<a onClick={logout}>←登出</a>, 'logout'),
        getItem(<a onClick={() => toMine()}>个人中心</a>, 'mine'),
        getItem(<a onClick={() => toUsr()}>用户管理</a>, 'user'),
        getItem(<a onClick={() => toCompute()}>主机管理</a>, 'compute')

    ]

    return (
        <Menu mode={"inline"} items={MenuItem} style={{height:'100%'}}/>
    )
}
