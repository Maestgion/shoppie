import { publicReq } from "../assets/axios/reqMethod"
import { loginFailure, loginStart, loginSuccess } from "./userSlice"

export const login = async (dispatch, user)=>{
    dispatch(loginStart())
    try{   
     console.log(user)

        const res = await publicReq.post("/users/login", user)
        
        dispatch(loginSuccess(res.data))
       
     

    }catch(e)
    {
        dispatch(loginFailure())
    }
}