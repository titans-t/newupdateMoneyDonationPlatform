import React from 'react'
import { FormatDate } from '../../../utils/FormateDate'
import { AdminDeleteSingleUser } from '../../../hooks/admins/AdminDeleteSingleUser'

export const ManageUsers = ({user}) => {
  const {formateDate}= FormatDate()
  const formattedDate = formateDate(user.createdAt)
  const { loading, deleteUser} = AdminDeleteSingleUser()
  return (
    <tr>
                   
    <td >
      <div className="flex items-center gap-3">
        <div className="avatar">
          <div className="mask mask-squircle h-12 w-12">
            <img
              src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
              alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
        <div>
          <div className="font-bold">{user?.username}</div>
          <div className="text-sm opacity-50">India</div>
        </div>
      </div>
    </td>
    <td>
      <span className='font-bold'>{user.role}</span> 
      <br />
      <span className="badge badge-ghost badge-sm"> Donate and Create Campaign</span>
    </td>
    <td>{formattedDate}</td>
    <th>
      <button className="bg-red-500 hover:bg-red-900 px-5 py-3 rounded-lg text-white "onClick={()=>{ confirm("do you want to delete")? deleteUser(user?._id): "" }}>delete</button>
    </th>
  </tr>
  )
}
