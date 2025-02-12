import React, { useEffect, useState } from 'react'

export const UserGetMyDonations = () => {
    const [loading, setLoading] = useState(false)
    const [myDonations, setMyDonations] = useState()


    useEffect(() => {
        const getMyDonations =async ()=>{
            setLoading(true)
            try {
                const res= await fetch(`http://localhost:5000/api/campaign/myCompaign`, {method: 'GET', credentials:'include', headers: { 'Content-Type': 'application/json'}})
                const data= await res.json()
                if(data.error){
                    throw new Error(data.error)
                }
              
                
                setMyDonations(data)
            } catch (error) {
                console.log(error.message);
            }finally{
                setLoading(false)
            }
        }

        getMyDonations()
    }, [])
    return {loading, myDonations}
}
