import exp from "constants";
import {getToken} from "../context/auth-provider";

const apiUrl = "http://localhost:3001"

const defaultConfig = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    }
}

export const httpProvider = ({url, data, config = {}}: { url: string, data: unknown, config: RequestInit }) => {
    return fetch(`${apiUrl}${url}`, {
        ...defaultConfig,
        body: JSON.stringify(data),
        ...config
    }).then(async (res) => {
        return await res.json()
    })
}

export const setHttp = (url: string, data: unknown, config: RequestInit ={}) => {
    return httpProvider({url,data,config})
}
