import React, {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom'
import {Compute} from "../../../context/inter";
import {setHttp} from "../../../untils/http";
import {getToken} from "../../../context/auth-provider";
import {Button, Dropdown, Menu, Table} from "antd";

export const ComputeList = () => {
    const [computeList, setComputeList] = useState<Compute[]>([])
    const [A,setA] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        setHttp('/computeList', {token: getToken()}).then(req => {
            if (req.stateCode === 200) {
                setComputeList(req.data)
            } else {
                new Error('获取主机列表失败')
            }
        })
    }, [A])

    const toAddCompute = () => {
      navigate('/addCompute')
    }


    const deleteCompute = (id: string) => {
        setHttp(`/computeList/${id}`, {token: getToken()}, {method: 'DELETE'}).then(req => {
            if (req.stateCode === 200) {
               setA(!A)
            } else {
                new Error('获取主机列表失败')
            }
        })
    }

    const changeComputeState = (id: string, state: string) => {
        return setHttp(`/computeList/${id}`, {token: getToken(), newCompute: {state}}, {method: 'PUT'})
    }

    const onCompute = (id:string) => {
        changeComputeState(id,'运行中')
        setA(!A)
    }

    const offCompute = (id:string) => {
        changeComputeState(id,'关机')
        setA(!A)
    }

    const pauseCompute = (id:string) => {
        changeComputeState(id,'挂起')
        setA(!A)
    }

    const resumeCompute = (id:string) => {
        changeComputeState(id,'运行中')
        setA(!A)
    }

    const computeActionList = (id: string) => (
        <Menu items={[
            {
                label: <a onClick={()=>onCompute(id)}>开启虚拟机</a>,
                key: '1'
            },
            {
                label: <a onClick={()=>pauseCompute(id)}>挂起虚拟机</a>,
                key: '2'
            },
            {
                label: <a  onClick={()=>resumeCompute(id)}>恢复虚拟机</a>,
                key: '3'
            },
            {
                label: <a onClick={()=>offCompute(id)}>关闭虚拟机</a>,
                key: '4'
            },
            {
                type: 'divider',
            },
            {
                label: <a onClick={() => deleteCompute(id)}>删除虚拟机</a>,
                key: '0',
            }
        ]}/>
    )


    const computeListColumns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: '主机名',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: '镜像名',
            dataIndex: 'mirror',
            key: 'mirror'
        },
        {
            title: 'ip地址',
            dataIndex: 'ip',
            key: 'ip'
        },
        {
            title: '类型',
            dataIndex: 'type',
            key: 'type'
        },
        {
            title: '状态',
            dataIndex: 'state',
            key: 'state'
        },
        {
            title: '创建日期',
            dataIndex: 'created',
            key: 'created'
        },
        {
            title: '操作',
            key: 'action',
            render: (compute: Compute) => (
                <>
                    <Dropdown overlay={computeActionList(compute.id)}>
                        <a onClick={e => e.preventDefault()}>
                            操作
                        </a>
                    </Dropdown>
                </>
            )
        }
    ]


    return (
        <div>
            <h2>主机列表</h2>
            <Button onClick={()=>toAddCompute()}>新增虚拟机</Button>
            <Table columns={computeListColumns} dataSource={computeList} rowKey={'id'}/>
        </div>
    )
}
