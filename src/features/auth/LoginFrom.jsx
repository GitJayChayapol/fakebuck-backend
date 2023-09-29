import { useState } from "react";
import LoginButton from "./LoginButton";
import LoginInput from "./LoginInput";
import { useAuth } from "../../hooks/use-auth";

export default function LoginFrom () {
  const [input,setInput] = useState({
    emailOrMobile: '',
    password: ''
  });

const { login } = useAuth()

  const handleSubmitFrom = e => {
    e.preventDefault()
    login(input)
  }

    return (
      <form className="grid gap-4" onSubmit={handleSubmitFrom}>
            <LoginInput 
              placeholder="Email address or phone number" 
              value={input.emailOrMobile}
              onChange={e=>setInput({...input,emailOrMobile: e.target.value})}
              />
            <LoginInput 
            type="password" 
            placeholder="password" 
            value= {input.password}
            onChange={e=> setInput({...input, password: e.target.value})}
            />
            <LoginButton/>
      </form>
    )
}