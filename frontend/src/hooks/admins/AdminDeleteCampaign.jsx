import React, { useState } from 'react'
import { useAdminZustand } from '../../zustand/useAdminZustand'
import {toast } from 'react-hot-toast'

export const AdminDeleteCampaign = () => {
    const [loading, setLoading] = useState(false)
    const {deleteCampaigns, setDeletedCampaigns}= useAdminZustand()
    const [campaigns, setCampaigns] = useState()

    const updateDelete= async(campaignId)=>{
        setLoading(true)
        try {
            const res = await fetch(`http://localhost:5000/api/admin/campaigns/${campaignId}/delete`, {
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
            setDeletedCampaigns(data)
            setCampaigns(data)
            toast.success("campaign has been deleted ")
        } catch (error) {
            console.log(error.message);
        }finally{
            setLoading(false)
        }
    }
    return {loading, updateDelete }
}
