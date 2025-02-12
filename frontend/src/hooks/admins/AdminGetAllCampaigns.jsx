import React, { useEffect, useState } from 'react'
import { useAdminZustand } from '../../zustand/useAdminZustand'

export const AdminGetAllCampaigns = () => {
    const [loading, setLoading] = useState(false)
    const {setAllCampaigns, allCampaigns, approvedCampaigns, rejectedCampaigns, closedCampaigns, deleteCampaigns} = useAdminZustand()
    const [ campaigns, setCampaings ]= useState()
    useEffect(()=>{
        const getAllCampaigns= async()=>{
            setLoading(true)
                try {
                    const res= await fetch("http://localhost:5000/api/admin/campaignsAdmin",{
                        method: "GET",
                        credentials: 'include',
                        headers: {
                            'Content-Type': "application/json"
                        }
                    })
                    const data= await res.json()
                    if(data.error){
                        throw new Error(data.error)
                    }
                    setCampaings(data)
                    setAllCampaigns(data)
                } catch (error) {
                    console.log(error.message);
                }finally{
                    setLoading(false)
                }
        }   
        getAllCampaigns()
    }, [allCampaigns?._id || approvedCampaigns || rejectedCampaigns || closedCampaigns || deleteCampaigns, closedCampaigns, deleteCampaigns])
    return {loading, campaigns}
}
