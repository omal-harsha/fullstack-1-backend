import { useState } from 'react'
import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  let history = useNavigate()

  const login = () => {
    const data = {username: username, password: password}

    axios.post("http://localhost:3001/auth/login", data).then((response)=> {
      console.log((response.data))
      if(response.data.error) {
        alert(response.data.error)
      }else{
      sessionStorage.setItem("accessToken", response.data)
      history('/')
      }
    })
  }
  return (
    
    <div className="flex justify-center mt-52">
    <div >
        
            <div className='flex flex-col border-4 p-5 border-blue-400 rounded-md'>
            <div className='flex flex-col  items-start space-y-2'>
                

                <label>Username</label>
                
                <input className="w-96 h-10 px-3 border-2 border-gray-400 rounded-lg"
                    onChange={(event) => {
                      setUsername(event.target.value)
                    }}
                    placeholder="(Ex. John123...)"
                />

                <label>Password</label>
                
                <input className="w-96 h-10 px-3 border-2 border-gray-400 rounded-lg"
                    onChange={(event) => {
                      setPassword(event.target.value)
                    }}
                    placeholder="(Your password)"
                    type="password"
                />
                 <button onClick={login} className='bg-blue-400 w-96 text-white h-10 rounded-lg'> Login</button>
                </div>
            </div>
            
        </div>
        </div>
  )
}
