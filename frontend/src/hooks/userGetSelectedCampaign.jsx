import React, { useEffect, useState } from 'react'
import { useUserZustands } from '../zustand/useUserZustands'

export const userGetSelectedCampaign = () => {
    const [loading, setLoading] = useState(false)
    const [campaigns, setCampaigns] = useState()
    const {selectedCampaign, setSelectedCampaign}= useUserZustands()

    async function getSelectedCampaigns(selectedcampaignId) {
        setLoading(true)
        try {
            const res = await fetch(`http://localhost:5000/api/campaign/${selectedcampaignId}/selectedCampaign`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json()
            if (data.message) {
                throw new Error(data.message)
            }
            setCampaigns(data)
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false)
        }
    }

    return { loading, getSelectedCampaigns }
}
