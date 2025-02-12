import React, { useState } from 'react'
import { useUserZustands } from '../zustand/useUserZustands'
import toast from 'react-hot-toast'

export const userCreateCampaign = () => {
    const [loading, setLoading] = useState(false)
    const {createdCampaign, setCreatedCampaign } = useUserZustands()
    const total = 0
   
    const createCampaign =async (campaignCreated) => {
        const isvalid =isValidInput(campaignCreated)
        if(!isvalid) return
        setLoading(true)
        try{
            const res = await fetch("http://localhost:5000/api/campaign/create", {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({fullName: campaignCreated.fullName, purpose: campaignCreated.purpose, goalAmount: campaignCreated.goalAmount, place: campaignCreated.place, reason: campaignCreated.reason, address: campaignCreated.address || "north street", pic: campaignCreated.pic})            })
            const data = await res.json()
            if(data.error){
                throw new Error(data.error)
            }
            setCreatedCampaign(data)
    
            
            toast.success('Campaign has been created successfully')
        }catch(err){
            console.log(err.message);
        }finally{
            setLoading(false)
        }
    }
    return { loading, createCampaign }
}

function isValidInput(campaignCreated){
    if(!campaignCreated.fullName || !campaignCreated.purpose || !campaignCreated.goalAmount || !campaignCreated.place  || !campaignCreated.reason){
        toast.error('fill out all the fields')
        return false
    }
    return true
}