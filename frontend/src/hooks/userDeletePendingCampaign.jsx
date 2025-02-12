import React, { useState } from 'react'
import { useUserZustands } from '../zustand/useUserZustands'
import {toast} from 'react-hot-toast'

export const userDeletePendingCampaign = () => {
    const [loading, setLoading] = useState(false)
    const {deletedCampaign, setDeletedCampaign}= useUserZustands()

    const deletingPendingCampaign= async(deleteCampaignId)=>{
        setLoading(true)
        try {
            const res = await fetch(`http://localhost:5000/api/campaign/campaign/${deleteCampaignId}/delete`,{ method: 'GET', credentials: 'include', headers: {'Content-Type':'application/json'}})
            const deletedCampaign= await res.json()
            if(deleteCampaignId.error){
                throw new Error(deleteCampaignId.error)
            }
            setDeletedCampaign(deleteCampaignId)
            toast.success("pending campaign has been deleted")
        } catch (error) {
            console.log(error.message);
        }finally{
            setLoading(false)
        }
    }
    
    return {loading, deletingPendingCampaign}
}
