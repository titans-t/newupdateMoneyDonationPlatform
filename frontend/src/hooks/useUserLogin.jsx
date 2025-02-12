import React, { useState } from 'react'
import { useAuthContext } from '../context/authContext'
import { toast} from 'react-hot-toast'
export const useUserLogin = () => {
    const [loading, setLoading ]= useState(false)
    const {authuser, setAuthUser }= useAuthContext()

    const userLogin = async (username, password)=>{
        const isvalid = await isValidInput(username, password)
        if(!isvalid) return
        setLoading(true)
        try {
            const res =await fetch("http://localhost:5000/login", {
                method: 'POST',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username,password})
            })
            const data = await res.json()
            if(data.error){
                throw new Error(data.error)
            }
            setAuthUser(data)
            localStorage.setItem('userauth', JSON.stringify(data))
            toast.success("login successfully")
        } catch (error) {
            console.log(error.message);
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }
    return {loading, userLogin}
}


function isValidInput(username, password) {
    
    return true
  }