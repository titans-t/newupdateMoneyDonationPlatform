import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAdminContext } from '../../context/AdminAuthContext'

export const AdminUseLogin = () => {
  const [loading, setLoading] = useState(false)
  const {setAdminUser} = useAdminContext()
  const adminLogin= async(userInputs)=>{
    setLoading(true)
    try {
        const re =await fetch("http://localhost:5000/adminLogin", {
          method:'POST',
          credentials:'include',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({username: userInputs.username, password:userInputs.password})
        })

        const data= await re.json()
        if(data.error){
          throw new Error(data.error)
        }
        setAdminUser(data)
        localStorage.setItem('adminauth', JSON.stringify(data))
        toast.success("login successfully")
    } catch (error) {
      toast.error(error.message)
      console.log(error.message);
      
    }
    finally{
      setLoading(false)
    }
    adminLogin
  }
  return {loading, adminLogin}
}
