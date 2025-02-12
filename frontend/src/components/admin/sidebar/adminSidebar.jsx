import React from 'react'
import { FaTachometerAlt, FaSignOutAlt, FaBullhorn, FaHandHoldingHeart } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom'
import { useAdminZustand } from '../../../zustand/useAdminZustand';
import { AdminUserLogout } from '../../../hooks/admins/AdminUserLogout';

export const AdminSidebar = () => {
  const {selectedTab, setSelectedTab}= useAdminZustand()
  const {logoutuser, loading} = AdminUserLogout()
  function clickedTab(clickedTbName){
    setSelectedTab(clickedTbName)
    
  }
  async function logout(){
    if(confirm('do you want to logout')){
      await logoutuser()
    }

  }

  return (
    <div className="w-1/4 bg-gradient-to-r from-green-200 to-green-400 md:block hidden sticky top-0 h-screen ml-3">
          <ul className="flex flex-col gap-4 px-5 w-full items-start text-start py-5 mt-10">
            <Link onClick={()=> clickedTab("dashboard")}
              to="/admin/dashboard"
              className={`hover:bg-green-400  py-3 text-sm w-full pl-2 rounded 
             ${selectedTab== "dashboard"? "bg-green-400":""}   `}
            >
              <li className="flex gap-2 items-center">
                <FaTachometerAlt /> <span>Dashboard </span>
              </li>
            </Link>
         
            <Link
              to="/admin/manageUsers"
              onClick={()=> clickedTab("manageUsers")}
              className={`${selectedTab == "manageUsers"? "bg-green-400":""} hover:bg-green-400  py-3 text-sm w-full pl-2 rounded `}
            >
              <li className="flex gap-2 items-center">
                <FaBullhorn /> <span>Manage Users</span>
              </li>
            </Link>
            <a
              onClick={()=>logout()}
              className="hover:bg-green-100 py-3 text-sm w-full pl-2 rounded text-green-800"
            >
              <button className="flex gap-2 items-center">
                <FaSignOutAlt /> <span>Exit</span>
              </button>
            </a>
          </ul>
        </div>
  )
}
