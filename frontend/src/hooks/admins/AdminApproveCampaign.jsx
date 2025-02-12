import React, { useState } from 'react'
import { useAdminZustand } from '../../zustand/useAdminZustand'
import {toast } from 'react-hot-toast'

export const AdminApproveCampaign = () => {
    const [loading, setLoading] = useState(false)
    const {approvedCampaigns, setApprovedCampaigns}= useAdminZustand()
    const [campaigns, setCampaigns] = useState()

    const updateApprove= async(campaignId)=>{
        setLoading(true)
        try {
            const res = await fetch(`http://localhost:5000/api/admin/campaigns/${campaignId}/approve`, {
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
            setApprovedCampaigns(data)
            setCampaigns(data)
            toast.success("campaign has been approved")
        } catch (error) {
            console.log(error.message);
        }finally{
            setLoading(false)
        }
    }
    return {loading, updateApprove}
}
