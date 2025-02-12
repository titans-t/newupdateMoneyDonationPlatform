import React, { useState } from 'react'
import {toast} from 'react-hot-toast'
export const AdminUseRegister = () => {
 const [loading, setLoading] = useState(false)
 const adminRegister=async (adminInputs)=>{
    const isValid = isValidInput(adminInputs)
    if(!isValid) return 
    setLoading(true)
    try {
        const res = await fetch("http://localhost:5000/adminRegister", {
            method:'POST',
            credentials:'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: adminInputs.username, password: adminInputs.password, confirmPassword: adminInputs.confirmPassword})
        })
        const data= await res.json()
        if(data.error){
            throw new Error(data.error)
        }
        toast.success("registration success")
    } catch (error) {
        console.log(error.message);
        
    }finally{
        setLoading(false)
    }
    
 }
 return {loading, adminRegister}
}

const isValidInput = (adminInputs)=>{
    if(!adminInputs.username || !adminInputs.password || !adminInputs.confirmPassword){
        toast.error("please fill out all the fields")
        return false
    }
    if(adminInputs.password  != adminInputs.confirmPassword){
        toast.error('make sure confirm password is same')
        return false
    }
    if(adminInputs.password.length < 6){
        toast.error('password must be atleast six characters')
        return false
    }
    return true
}
