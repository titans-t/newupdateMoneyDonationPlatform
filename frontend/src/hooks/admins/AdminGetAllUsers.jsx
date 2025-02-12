import React, { useEffect, useState } from 'react'
import { useAdminZustand } from '../../zustand/useAdminZustand'

export const AdminGetAllUsers = () => {
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState()
    const {deleteUsers} = useAdminZustand()
    useEffect(()=>{
        const getAllUsers=async ()=>{
            setLoading(true)
            try {
                const res = await fetch("http://localhost:5000/allUsers", {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': "application/json"
                    }
                })
                const data =await res.json()
                if(data.error){
                    throw new Error(data.error)
                }
                setUsers(data)
            } catch (error) {
                console.log(error.message);
            }finally{
                setLoading(false)
            }
        }
        getAllUsers()
    }, [deleteUsers])
    return  {loading, users}
}
