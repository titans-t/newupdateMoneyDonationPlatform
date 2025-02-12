import React, { useState } from 'react'
import { useAdminZustand } from '../../zustand/useAdminZustand'
import {toast } from 'react-hot-toast'

export const AdminCloseCampaign = () => {
    const [loading, setLoading] = useState(false)
    const {closedCampaigns, setClosedCampaigns}= useAdminZustand()
    const [campaigns, setCampaigns] = useState()

    const updateClose= async(campaignId)=>{
        setLoading(true)
        try {
            const res = await fetch(`http://localhost:5000/api/admin/campaigns/${campaignId}/close`, {
                method: "POST",
                credentials : 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data =await res.json()
            if(data.error){
                throw new Error(data.error)
            }
            setClosedCampaigns(data)
            setCampaigns(data)
            toast.success("campaign has been closed ")
        } catch (error) {
            console.log(error.message);
        }finally{
            setLoading(false)
        }
    }
    return {loading, updateClose }
}
