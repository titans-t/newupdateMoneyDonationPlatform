import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useUserZustands } from '../zustand/useUserZustands'

export const userMakeDonation = () => {
    const [loading, setLoading] = useState(false)
    const { userDonations, setUserDonations} = useUserZustands()
    const makeDonation = async (campaignId, donationDetail) => {
        const {fullName, email, phoneNumber, donationAmount, paymentMethod} = donationDetail
        const isvalid = isValidData(fullName, email, phoneNumber, donationAmount, paymentMethod)
        if(!isvalid) return 
        setLoading(true)
        try {
            const res = await fetch(`http://localhost:5000/api/donations/${campaignId}/create`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fullName, email, phoneNumber, donationAmount, paymentMethod })
            })
            const data = await res.json()
            if (data.error) {
                throw new Error(data.error)
            }
            setUserDonations(data)
            toast.success("Donated Successfully")
        } catch (error) {
            toast.error(error.message)
            console.log(error.message);
        } finally {
            setLoading(false)
        }
    }
    return { makeDonation, loading }
}

function isValidData(fullName, email, phoneNumber, donationAmount, paymentMethod){
    if(!fullName || !email || !phoneNumber || !donationAmount || !paymentMethod){
        toast.error("all field are required")
        
        return false
    }
    return true
}