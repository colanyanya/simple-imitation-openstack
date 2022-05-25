import React from "react";
import {AuthForm, User, UserResponse} from "./inter";

const apiUrl = "http://localhost:3001"
const localStorageKey = '__auth_token__'

// 存储和获取
export const getToken = () => window.localStorage.getItem(localStorageKey)

export const setUserToken = ({token, ...user}: UserResponse) => {
    window.localStorage.setItem(localStorageKey, token)
    return user
}

export const removeUserToken = () => {
    window.localStorage.removeItem(localStorageKey)
    return null
}

export const bootStrapUser = () => {
    const token = getToken()
    if (token) {
        return fetch('/me', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "token": token
            })
        }).then(async (res) => {
            const msg = await res.json()
            if (msg.stateCode === 200) {
                return msg.data
            } else {
                return removeUserToken()
            }
        })
    } else {
        return Promise.reject(null)
    }
}


export const login = (form: AuthForm) => {
    return fetch(`${apiUrl}/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "usr": form.username,
            "psw": form.password
        })
    }).then(async (res) => {
        const msg = await res.json()
        if (msg.stateCode === 200) {
            return setUserToken(msg.data)
        } else {
            return Promise.reject(msg.data)
        }
    })
}

export const register = (form: AuthForm) => {
    return fetch(`${apiUrl}/register`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "usr": form.username,
            "psw": form.password
        })
    }).then(async (res) => {
        const msg = await res.json()
        if (msg.stateCode === 200) {
            return setUserToken(msg.data)
        } else {
            return Promise.reject(msg.data)
        }
    })
}

export const logout = () => {
    return fetch(`${apiUrl}/logout`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({token: getToken()})
    }).then(() => {
        return removeUserToken()
    })
}


