import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes,useNavigate } from "react-router-dom"
import { MyMessage } from "./my-message";
import { MenuNav } from "./menu-nav";
import { UserList } from "./user-list";
import { ComputeList } from "./compute-list";
import { UpdateUser } from "./user-list/update-user";
import { AddUser } from "./user-list/add-user";
import { AddCompute } from "./compute-list/add-compute";
import { UpdateMine } from "./my-message/updateMine";
import styled from "@emotion/styled";
import { Hello } from "./welcome";

export const AuthenticAPP = () => {
    // const navigate = useNavigate()
    // useEffect(()=>{
    //     navigate('/')
    // },[])

    return (
        <div>
            <Router>
                <LeftDiv>
                    <MenuNav />
                </LeftDiv>
                <RightDiv>
                    <Routes>
                        <Route path={'/'} element={<Hello/>} />
                        <Route path={'/mine'} element={<MyMessage />} />
                        <Route path={'/mine/update'} element={<UpdateMine />} />
                        <Route path={'/user'} element={<UserList />} />
                        <Route path={'/compute'} element={<ComputeList />} />
                        <Route path={'/user/:id'} element={<UpdateUser />} />
                        <Route path={'/addUser'} element={<AddUser />} />
                        <Route path={'/addCompute'} element={<AddCompute />} />
                    </Routes>
                </RightDiv>


            </Router>


        </div>
    )
}


const LeftDiv = styled.div`
    float: left;
    height: 100vh;
    width: 15%;
    /* background-color: pink; */
`
const RightDiv = styled.div`
    float: left;
    height:calc(100vh -100px);
    width: 60%;
    margin: 100px;
    /* background-color: skyblue; */
`