import React from 'react'
import { AdminSidebar } from '../../../components/admin/sidebar/adminSidebar';
import { AdminMobileSidebar } from '../../../components/admin/sidebar/adminMobileSidebar';
import { FaAddressCard } from "react-icons/fa";
import { ManageUsers } from '../../../components/admin/users/ManageUsers';
import { AdminGetAllUsers } from '../../../hooks/admins/AdminGetAllUsers';

export const AdminManageUser = () => {
  const {loading, users} = AdminGetAllUsers()


  return (
    <div className='flex w-full h-full'>
      <AdminSidebar />
      {/* Main Content */}
      <div className="w-full p-2 bg-slate-200 overflow-y-scroll relative mb-20 md:mb-0">
        <div className="bg-white my-1 px-5 py-2 rounded flex justify-between items-center sticky top-0 z-10">
          <div>
            <p className="text-xs text-green-900">Admin</p>
            <h3 className="text-lg text-green-500 font-bold">Manage Users</h3>
          </div>

          <div className="avatar">
            <div className="ring ring-offset-base-100 w-10 rounded-full ring-offset-2">
              <img src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png" />
            </div>
          </div>
        </div>
        <div className='flex flex-col my-2'>
          <div className='flex flex-row w-1/2 rounded-md justify-between my-2 gap-5 text-sm'>
            {/* first component */}
            <div className='bg-white px-4 py-5 rounded-md flex w-full justify-between cursor-pointer'>

              <div className='text-sky-900 '>
                <h4>1588</h4>
                <p>Appointments</p>
              </div>
              <div>
                {/* ucuib */}
                <FaAddressCard />
              </div>

            </div>
            {/* first component */}
            <div className='bg-white px-4 py-5 rounded-md flex w-full justify-between cursor-pointer'>

              <div className='text-sky-900 '>
                <h4>1588</h4>
                <p>Appointments</p>
              </div>
              <div>
                {/* ucuib */}
                <FaAddressCard />
              </div>

            </div>



          </div>
          <div className='flex w-full bg-white  rounded-md my-1 mt-2'>
            <div className="overflow-x-auto w-full mt-1">
            <h4 className='text-center pl-3 text-green-400 font-bold text-xl mt-2 pb-2  mb-1'>Manage Users</h4>
              <table className="table w-full p-5">
                {/* head */}
                <thead>
                  <tr>
                  
                    <th>FullName</th>
                    <th>Role</th>
                    <th>Register Date Issued</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody >
                  {/* row 1 */}
                  {users?.map((user)=>(
                    <ManageUsers user={user}/>
                  ))}
              
           
            
                </tbody>
                {/* foot */}
                <tfoot>
                
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
      <AdminMobileSidebar />
    </div>
  )
}
