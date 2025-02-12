import React, { useEffect, useState } from 'react'
import { useUserZustands } from '../zustand/useUserZustands'

export const userMyCampaigns = () => {
    const { createdCampaign, setCreatedCampaign, deletedCampaign,setDeletedCampaign } = useUserZustands()
    const [loading1, setLoading] = useState(false)
    const [ myAllCampaigns, setMyAllCampaigns ] = useState()
    
    useEffect(() => {
        const getMyCampaings = async () => {
            setLoading(true)
            try {
                const res = await fetch("http://localhost:5000/api/campaign/mycampaigns", { method: 'GET', credentials: 'include' })
                const data = await res.json()
                if (data.error) {
                    throw new Error(data.error)
                }
                setMyAllCampaigns(data)
            } catch (error) {
                console.log(error.message);
            }finally{
                setLoading(false)
            }
        }
        getMyCampaings()
    }, [deletedCampaign, createdCampaign]); 
    return {myAllCampaigns, loading1}
}
