import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import {MyMessage} from "./my-message";
import {MenuNav} from "./menu-nav";
import {UserList} from "./user-list";
import {ComputeList} from "./compute-list";
import {UpdateUser} from "./user-list/update-user";
import {AddUser} from "./user-list/add-user";
import {AddCompute} from "./compute-list/add-compute";
import {UpdateMine} from "./my-message/updateMine";

export const AuthenticAPP = () => {

    return (
        <div>
            <Router>
                <MenuNav/>
                <Routes>
                    <Route path={'/'} element={<h2>欢迎来到云计算中心</h2>}/>
                    <Route path={'/mine'} element={<MyMessage/>}/>
                    <Route path={'/mine/update'} element={<UpdateMine/>}/>
                    <Route path={'/user'} element={<UserList/>}/>
                    <Route path={'/compute'} element={<ComputeList/>}/>
                    <Route path={'/user/:id'} element={<UpdateUser/>}/>
                    <Route path={'/addUser'} element={<AddUser/>}/>
                    <Route path={'/addCompute'} element={<AddCompute/>}/>
                </Routes>
            </Router>
        </div>
    )
}




