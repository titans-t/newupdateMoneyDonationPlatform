import React, { useState } from 'react'
import { useAdminContext } from '../../context/AdminAuthContext'
import { useAdminZustand } from '../../zustand/useAdminZustand'

export const AdminUserLogout = () => {
    const [loading,setLoading] =useState()
    const {setAdminUser} =useAdminContext()
    const {setSelectedTab}= useAdminZustand()
    async function logoutuser() {
        try {
            const res = await fetch("http://localhost:5000/admin/logout", {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' }
            })
            const data = await res.json()
            if(data){
                localStorage.removeItem('adminauth')
                setAdminUser(null)
                setSelectedTab("dashboard")
                toast.success('logout succesfully')

            }
           
        } catch (error) {
            console.log(error.message);

        }
    }
    return {loading, logoutuser}
}
