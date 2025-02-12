import React, { useState } from 'react'
import donationpic from '../../assets/images/Authimages/4090662.jpg'
import { Dashboard } from '../../pages/user/campaign/Dashboard'
import { DonatePerson } from '../../pages/user/donation/DonatePerson'
import { Link } from 'react-router-dom'
import { useUserZustands } from '../../zustand/useUserZustands'

export const Campaign = ({campaign, theme}) => {
const {selectedCampaign, setSelectedCampaign}= useUserZustands()
const {tab, setSelectedTab}= useUserZustands()

    const getSelectedcampaign = (campaignId)=>{
        
        setSelectedCampaign(campaign)
 
        
    }
    return (
        <tr>
     
        <td>
            <div className="flex items-center gap-3 mb-3">
                <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                        <img
                            src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
                            alt="NO PIC " />
                    </div>
                </div>
                <div>
                    <div className="font-bold">{campaign.fullName}</div>
                    <div className="text-sm opacity-50">India</div>
                </div>
            </div>
        </td>
        <td>
          {campaign.purpose}
            <br />
            <span className="badge badge-ghost badge-sm">Kindness</span>
        </td>
        <td>{campaign.goalAmount}</td>
        <td>{campaign.currentAmount}</td>
        <th>
            <Link onClick={()=>{
                setSelectedTab("")
                  localStorage.setItem('selectedItem', JSON.stringify(campaign))
                getSelectedcampaign(campaign._id)}} to={'/user/makeDonation'}  className={`btn bg-primary hover:bg-blue-500 text-sm text-sky-200 px-4 py-2 w-auto rounded-full transform hover:scale-105 transition-transform duration-300 ease-in-out ${ theme== "light"? "bg-gradient-to-r from-blue-400 to-blue-600": ""} text-white `}>Donate Now</Link>
        </th>
    </tr>
    )
}
