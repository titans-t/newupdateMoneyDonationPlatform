import React from 'react'
import { useAdminContext } from '../../../context/AdminAuthContext'
import { AdminApproveCampaign } from '../../../hooks/admins/AdminApproveCampaign'
import { AdminRejectCampaign } from '../../../hooks/admins/AdminRejectCampaign'
import { AdminCloseCampaign } from '../../../hooks/admins/AdminCloseCampaign'
import { AdminDeleteCampaign } from '../../../hooks/admins/AdminDeleteCampaign'

export const ManageCampaigns = ({campaign}) => {
  const { updateApprove} = AdminApproveCampaign()
  const { updateReject } = AdminRejectCampaign()
  const { updateClose } = AdminCloseCampaign()
  const { updateDelete }= AdminDeleteCampaign()
    return (
        <tr>

        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-10 w-10">
                <img
                  src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold text-md">{campaign.fullName}</div>

            </div>
          </div>
        </td>
        <td className='text-xs space-x-1 text-mono text-green-900'>
          {campaign.purpose}
          <br />

        </td>
        <td className=' text-md  text-green-400 font-bold'>$ {campaign.goalAmount}</td>
        <td className='text-xs text-green-900 font-bold'>{campaign.status}</td>
        <th className='flex gap-3 items-center justify-center font-bold'>
          {campaign.status == "Pending" ?<><button className="bg-green-500 text-xm rounded-lg text-white  hover:bg-green-400 w-30 p-3  " onClick={()=> updateApprove(campaign._id)}>Approve</button>
            <button className="text-xm bg-red-500 rounded-lg  text-white  hover:bg-red-400 p-3 w-15" onClick={()=> updateReject(campaign._id)}>Reject</button></>:campaign.status == "Approved"?     <button className="text-xm bg-red-500 rounded-lg  text-white  hover:bg-red-400 p-3 w-24" onClick={()=> updateClose(campaign._id)}>Close</button>: <span onClick={()=> updateDelete(campaign._id)} className={`bg-red-500 text-white font-thin rounded-sm cursor-pointer
                 px-3 py-2 `}>Delete</span>  }
          


        </th>
      </tr>
    )
}
