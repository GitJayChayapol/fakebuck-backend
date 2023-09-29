import { createContext , useState } from "react";
import axios from '../config/axios'
import { addAccessToken } from "../utils/local-storane";

export const Authcontext = createContext()

export default function AuthcontextProvider({children}) {
    const [ authUser, setAuthUser ] = useState({})

    const login = async credential => {
        try{
            const res = await axios.post ('/auth/login',credential)
            addAccessToken(res.data.accessToken)
            setAuthUser(res.data.user)
        } catch (err) {
            console.log(err)
        }
    }
    return <Authcontext.Provider value={{ login }}>{children}</Authcontext.Provider>
}


