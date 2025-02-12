import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useAuthContext } from '../context/authContext'

export const useUserRegister = () => {
  const [ loading, setLoading ]= useState(false)
  const {authuser, setAuthUser}= useAuthContext()

  

  const userRegister = async (username, password, confirmPassword) => {
    const isvalid = isValidInput(username, password, confirmPassword)
    if (!isvalid) return
    setLoading(true)
    try {
      const res = await fetch("http://localhost:5000/register", {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, confirmPassword })
      })
      const data = await res.json()
      if (data.error) {
        throw new Error(data.error)
      }
      
      toast.success("registeration success")
      
    } catch (error) {
        toast.error(error.message)
        console.log(error.message);
        
    }finally{
      
      setLoading(false)
    }

  }
  return { userRegister, loading }
}


function isValidInput(username, password, confirmPassword) {
  if (password != confirmPassword) {
    toast.error('make sure password is same')
    return false
  }
  if (password.length < 6) {
    toast.error('password must be greater than 6')
    return false
  }
  return true
}