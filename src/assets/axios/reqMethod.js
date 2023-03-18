import axios from "axios"

const BASE_URL = "http://localhost:8000/api"

const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.others.tokens.slice(-1)[0].token


export const publicReq = axios.create(
    {
        baseURL : BASE_URL,
    }
)

export const userReq = axios.create(
    {
        baseURL:BASE_URL,
        header:{
            token : TOKEN,
        }
    }
)