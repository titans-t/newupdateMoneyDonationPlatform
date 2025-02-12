import React from 'react'
import { FormatDate } from '../../utils/FormateDate'
import { userDeletePendingCampaign } from '../../hooks/userDeletePendingCampaign'

export const MyCampaings = ({mycampaign}) => {
    const {formateDate} = FormatDate()
    const formattedDate =formateDate(mycampaign?.createdAt)
    const {deletingPendingCampaign, loading}= userDeletePendingCampaign()

    async function deletePendingCampaign(){
        if(confirm("do you want to delete")){
            await deletingPendingCampaign(mycampaign._id)
        }
        
    }

    return (
        <div className='flex bg-gray-100 rounded-xl m-3 mt-2 p-2 items-center hover:bg-white'>
            <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                    <img
                        src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
                        alt="Avatar Tailwind CSS Component" />
                </div>
            </div>
            <div className=' pl-4 flex w-full flex-col ml-3'>
                <h4 className='text-sky-800 font-bold'>{mycampaign?.fullName}</h4>
                <div className='flex gap-5 mt-1 text-sm text-sky-900 '>
                    <p className='md:block hidden'>${mycampaign?.goalAmount}</p>
                    <p className='md:block hidden'>{formattedDate}</p>
                    <p className='md:block hidden'>{mycampaign?.purpose}</p>

                </div>
            </div>
            <div className='flex gap-2'>
                <p className={`text-center font-bold  ${mycampaign.status== "approved " ?"bg-sky-200": mycampaign.status=="Pending"? "": mycampaign.status == "Approved"? "bg-green-400": "bg-red-500 text-white"} rounded-lg p-2`}>{mycampaign?.status}</p>
                { mycampaign.status=="Pending"?
                <button onClick={()=> deletePendingCampaign()}  className='  bg-red-600 md:block hidden font-medium font-sans hover:bg-red-800 px-3 py-2 rounded-lg text-white text-sm '>Delete</button>:""}
            </div>
        </div>

    )
}
