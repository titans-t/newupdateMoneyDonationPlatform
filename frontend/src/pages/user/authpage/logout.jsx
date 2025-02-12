import React from 'react'
import { useAuthContext } from '../../../context/authContext'
import { useUserZustands } from '../../../zustand/useUserZustands'

export const logout = () => {
    const { authuser, setAuthUser } = useAuthContext()
    const {setSelectedTab}= useUserZustands()
    async function logoutuser() {
        try {
            const res = await fetch("http://localhost:5000/logout", {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' }
            })
            const data = await res.json()
            if(data){
                localStorage.removeItem('userauth')
                setAuthUser(null)
                setSelectedTab("dashboard")
                toast.success('logout succesfully')

            }
           
        } catch (error) {
            console.log(error.message);

        }
    }
    return { logoutuser }
}
