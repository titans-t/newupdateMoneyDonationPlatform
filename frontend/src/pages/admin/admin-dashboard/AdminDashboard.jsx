import React from 'react'
import { AdminSidebar } from '../../../components/admin/sidebar/adminSidebar';
import { ManageCampaigns } from '../../../components/admin/campaigns/ManageCampaigns';
import { ManageDonations } from '../../../components/admin/donations/ManageDonations';
import { AdminMobileSidebar } from '../../../components/admin/sidebar/adminMobileSidebar';
import { AdminGetAllCampaigns } from '../../../hooks/admins/AdminGetAllCampaigns';
import { AdminGetAllDonations } from '../../../hooks/admins/AdminGetAllDonations';

export const AdminDashboard = () => {
  const { loading, campaigns } = AdminGetAllCampaigns()
  const {allDonations} = AdminGetAllDonations()

  
  return (
    <>
      <div className='flex w-full h-full'>
        <AdminSidebar />

        {/* Main Content */}
        <div className="w-full pt-2 bg-slate-200 overflow-y-scroll relative">
          <div className="bg-white m-2 px-5 py-2 rounded flex justify-between items-center sticky top-0 z-10">
            <div>
              <p className="text-xs text-green-900">primary</p>
              <h3 className="text-lg text-green-500 font-bold">Admin Dashboard</h3>
            </div>

            <div className="avatar">
              <div className="ring ring-offset-base-100 w-10 rounded-full ring-offset-2">
                <img src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png" />
              </div>
            </div>
          </div>
          <div className="  mt-5 px-5 py-2 gap-5 rounded flex flex-col md:flex-row w-full ">
            {/* Manage Campaigns  */}
            <div className='bg h-full w-full bg-white rounded-lg'>
              <div className=''>
                <h4 className='text-center pl-3 text-green-400 font-bold text-xl mt-2 pb-2  '>Manage Camapaigns</h4>
                <div>
                  <div className="overflow-x-auto">
                    <table className="table">
                      {/* head */}
                      <thead className={` ${campaigns == "" ? "text-center": ''}`}>
                       {campaigns?.length > 0? <tr>

                          <th>FullName</th>
                          <th>Purpose</th>
                          <th>Goal Amount</th>
                          <th>Status</th>
                          <th className='text-center'>Action</th>
                        </tr>: <span className=' text-center  text-sm text-red-400'>no campaign has been created</span>}
                      </thead>
                      <tbody>

                        {campaigns?.map((campaign) => (
                          <ManageCampaigns campaign={campaign} />
                        ))}


                      </tbody>
                      {/* foot */}

                    </table>
                  </div>
                </div>
              </div>

            </div>


            {/* Manage donations */}
            <div className='md:w-1/2  bg-white rounded-md md:mb-0 mb-20'>

              <div className="overflow-x-auto">
                <h1 className='text-center pl-3 text-green-400 font-bold text-xl mt-2 pb-2'>Manage Donations</h1>
                <table className="table table-zebra">
                  {/* head */}
                  <thead>
                    <tr>

                      <th>FullName</th>
                      <th>Donation issued</th>
                      <th>Amount paid</th>
                    </tr>
                  </thead>
                  <tbody>
{allDonations?.map((donation)=>(
  <ManageDonations donation={donation} />
))}
                    
                  
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>

        <AdminMobileSidebar />
      </div>
    </>
  )
}
