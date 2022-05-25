import React, {ReactNode, useEffect, useState} from "react";
import * as auth from './auth-provider'
import {AuthContextProps, AuthForm, User} from "./inter";

const AuthContext = React.createContext<AuthContextProps|undefined>(undefined)
AuthContext.displayName = 'AuthContext'



export const AuthProvider = ({children}: { children: ReactNode })=>{
    const [user,setUser] = useState<User|null>(null)

    const login = (form:AuthForm)=> auth.login(form).then(setUser)
    const register = (form: AuthForm) => auth.register(form).then(setUser)
    const logout  = ()=> auth.logout().then(setUser)

    useEffect(()=>{
        auth.bootStrapUser().then(setUser)
    },[])

    return <AuthContext.Provider children={children} value={{user,setUser, login, register, logout}}/>
}

export const useAuth = ()=>{
    const context = React.useContext(AuthContext)
    if (!context){
        throw Error('useAuth必须在AuthProvider中使用')
    }
    return context
}


