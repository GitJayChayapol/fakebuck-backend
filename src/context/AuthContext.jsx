import { createContext , useEffect, useState } from "react";
import axios from '../config/axios'
import { addAccessToken, getAccessToken } from "../utils/local-storane";

export const Authcontext = createContext()

export default function AuthcontextProvider({children}) {
    const [ authUser, setAuthUser ] = useState(null)
    const [initialLoading,setInitialLoading] = useState(true)

    useEffect(()=>{
        if(getAccessToken()) {
            axios.get('/auth/me').then(res => {
                setAuthUser(res.data.user)
            })
            .finally(()=>{
                setInitialLoading(false)
            }); 
        } else {
            setInitialLoading(false)
        }
        }, [])

    const login = async credential => {
        try{
            const res = await axios.post ('/auth/login',credential)
            addAccessToken(res.data.accessToken)
            setAuthUser(res.data.user)
        } catch (err) {
            console.log(err)
        }
    }
    return <Authcontext.Provider value={{ login,authUser,initialLoading }}>{children}</Authcontext.Provider>
}


