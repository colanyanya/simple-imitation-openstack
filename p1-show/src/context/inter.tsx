import React from "react";

export interface AuthForm {
    username: string
    password: string
}

export interface AuthContextProps{
    user: User | null,
    setUser:  React.Dispatch<React.SetStateAction<User | null>>,
    login: (form:AuthForm)=>Promise<void>,
    register: (form:AuthForm)=>Promise<void>,
    logout: ()=>Promise<void>
}

export interface User{
    id:string,
    name:string,
    password:string,
    age:string,
    email:string,
    auth:string
}

export interface Compute{
    id:string,
    name:string,
    mirror:string,
    ip:string,
    type:string,
    state:string,
    created:string
}

export interface UserResponse{
    id:string,
    name:string,
    password:string,
    age:string,
    email:string,
    auth:string,
    token: string
}

