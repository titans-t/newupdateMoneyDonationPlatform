import React from 'react'
import { FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AdminUserLogout } from '../../../hooks/admins/AdminUserLogout';
export const AdminMobileSidebar = () => {
    const {loading, logoutuser} = AdminUserLogout()
    async function logout(){
        if(confirm('do you want to logout')){
            await logoutuser()
          }
          }
    return (
        <ul className="menu flex flex-row w-full justify-around bg-base-200 rounded-box md:hidden block lg:hidden  fixed bottom-0 ">
            <li>
                <Link to={'/admin/dashboard'} className="tooltip tooltip-right" data-tip="Dashboard">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                </Link>
            </li>
            <li>
                <Link to={'/admin/manageUsers'} className="tooltip tooltip-right" data-tip="Manage Users">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                </Link>
            </li>
        
            <li>
                <Link onClick={()=>logout() } className="tooltip tooltip-right" data-tip="Logout">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <FaSignOutAlt />
                    </svg>
                </Link>
            </li>
        </ul>
    )
}
