import axios from "axios"



const BASE_URL = "http://localhost:8000/api"

// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.others.tokens.slice(-1)[0].token
const root = JSON.parse(localStorage.getItem("persist:root"))
const user = root ? JSON.parse(root.user) : null 
const currentUser = user ? user.currentUser : null
const others = currentUser ? currentUser.others : null
const tokens = others ? others.tokens:[];
const lastToken = tokens.length>0?tokens.slice(-1)[0].token : ""
const TOKEN = lastToken || ""

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