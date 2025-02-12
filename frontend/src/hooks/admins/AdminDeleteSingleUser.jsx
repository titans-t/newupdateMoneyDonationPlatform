import React, { useState } from 'react'
import { useAdminZustand } from '../../zustand/useAdminZustand'
import {toast} from 'react-hot-toast'
export const AdminDeleteSingleUser = () => {
    const [loading, setLoading ] = useState()
    const {setDeletedUsers, deleteUsers} = useAdminZustand()

    const deleteUser=async (userId)=>{
        try {
            const res = await fetch(`http://localhost:5000/${userId}/deleteUser`,{
                method: 'POST',
                credentials: 'include',
                headers: {'Content-Type': 'application/json'}
            })
            const data = await res.json()
            if(data.error){
                throw new Error(data.error)
            }
            setDeletedUsers(data)
            toast.success("user has been deleted successfully")
        } catch (error) {
            console.log(error.message);
        }
    }
    return {loading, deleteUser}
}
