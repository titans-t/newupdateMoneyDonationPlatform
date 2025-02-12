import React from 'react'
import { FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { logout } from '../../pages/user/authpage/logout';

export const Usermobilesidebar = () => {
    const {logoutuser }= logout()
    async function logoutUser(){
        if(confirm('do you want to logout')){
          await logoutuser()
        }
        
    }
    return (
        <ul className="menu flex flex-row w-full justify-around bg-base-200 rounded-box md:hidden block lg:hidden  fixed bottom-0">
            <li>
                <Link to={'/user/dashboard'} className="tooltip tooltip-right" data-tip="Dashboard">
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
                <Link to={'/user/createsCampaign'} className="tooltip tooltip-right" data-tip="Create Campaign">
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
                <Link to={'/user/MyDonations'} className="tooltip tooltip-right" data-tip="My Donations">
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
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </Link>
            </li>
            <li>
                <Link  onClick={logoutUser} className="tooltip tooltip-right" data-tip="Logout">
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
