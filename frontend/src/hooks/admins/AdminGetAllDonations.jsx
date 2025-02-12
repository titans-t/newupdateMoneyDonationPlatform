import React, { useEffect, useState } from 'react'

export const AdminGetAllDonations = () => {
    const [loading, setLoading] = useState(false)
    const [allDonations, setAllDonations] = useState()


    useEffect(() => {
        const getAllDonations =async ()=>{
            setLoading(true)
            try {
                const res= await fetch(`http://localhost:5000/api/donations/get`, {method: 'GET', credentials:'include', headers: { 'Content-Type': 'application/json'}})
                const data= await res.json()
                if(data.error){
                    throw new Error(data.error)
                }
              
                
                setAllDonations(data)
            } catch (error) {
                console.log(error.message);
            }finally{
                setLoading(false)
            }
        }

        getAllDonations()
    }, [])
    return {loading, allDonations}
}
