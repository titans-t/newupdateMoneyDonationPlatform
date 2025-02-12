import React, { useState } from 'react'
import { useAdminZustand } from '../../zustand/useAdminZustand'
import {toast } from 'react-hot-toast'

export const AdminRejectCampaign = () => {
    const [loading, setLoading] = useState(false)
    const {rejectedCampaigns, setRejectedCampaigns}= useAdminZustand()
    const [campaigns, setCampaigns] = useState()

    const updateReject= async(campaignId)=>{
        setLoading(true)
        try {
            const res = await fetch(`http://localhost:5000/api/admin/campaigns/${campaignId}/reject`, {
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
            setRejectedCampaigns(data)
            setCampaigns(data)
            toast.success("campaign has been rejected ")
        } catch (error) {
            console.log(error.message);
        }finally{
            setLoading(false)
        }
    }
    return {loading, updateReject }
}
