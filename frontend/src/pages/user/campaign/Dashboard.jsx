import React, { useEffect, useState } from 'react'
import { SignupImage } from '../../../components/svgContainer/SignupImage'
import { Homeimage } from '../../../components/svgContainer/Homeimage'

import { Campaign } from '../../../components/campaign/campaign';
import UserSideBar from '../../../components/sidebar/Usersidebar';
import { userGetApprovedCampaings } from '../../../hooks/userGetApprovedCampaings';
import { Usermobilesidebar } from '../../../components/sidebar/Usermobilesidebar';

export const Dashboard = ({ showDonateForm, theme,setTheme }) => {
  const { loading, campaigns } = userGetApprovedCampaings()
  const [ profile, setProfile ] = useState(false)
  const [profileData, setProfileData] = useState("")
  useEffect(()=>{
    setProfileData(JSON.parse(localStorage.getItem('userauth')))
    console.log(profileData);
    
  }, [])

  return (
    <div className="w-full flex flex-col md:flex-row min-h-screen relative">
      {/* Sidebar */}
      <UserSideBar theme={theme} />

      {/* Main Content */}
      <div className="w-full bg-slate-200 overflow-y-scroll relative">
        <div className="bg-white m-2 px-5 py-2 rounded flex justify-between items-center sticky top-0 z-10">
          <div>
            <p className="text-xs text-sky-900">Primary</p>
            <h3 className="text-lg text-sky-900 font-bold">User Dashboard</h3>
          </div>
          <div className='flex justify-center items-center gap-10'>


            <div className="dropdown md:block hidden">
              <div tabIndex={0} role="button" className="btn ">
                Theme
                <svg
                  width="12px"
                  height="12px"
                  className="inline-block h-2 w-2 fill-current opacity-60"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 2048 2048">
                  <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                </svg>
              </div>
              <ul tabIndex={0} className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl">
                <li>
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                    aria-label="Default"
                    value="default" 
                    onClick= {()=>{ localStorage.setItem('theme', JSON.stringify('light')); setTheme("light")}}/>
                  
                </li>
                <li>
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                    aria-label="Retro"
                    value="retro"
                    onClick= {()=>{localStorage.setItem('theme', JSON.stringify('retro')); setTheme("retro")}} />
                </li>
                <li>
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                    aria-label="Cyberpunk"
                    value="cyberpunk"
                    onClick= {()=>{localStorage.setItem('theme', JSON.stringify('cyberpunk')); setTheme("acid")}} />
                </li>
                <li>
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                    aria-label="Valentine"
                    value="valentine"
                    onClick= {()=>{localStorage.setItem('theme', JSON.stringify('valentine')); setTheme("valentine")}} 
                     />
                </li>
                <li>
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                    aria-label="Aqua"
                    value="aqua"
                    onClick= {()=>{localStorage.setItem('theme', JSON.stringify('autumn')); setTheme("autumn")}}  />
                </li>
              </ul>
            </div>


        {/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello {profileData?.username}!</h3>
    <p className="py-4">Start Donate Now And Make A Difference In The World</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close Profile</button>
      </form>
    </div>
  </div>
</dialog>



            <div className="avatar cursor-pointer"onClick={()=>{setProfile(!profile); document.getElementById('my_modal_5').showModal()}}>
              <div className="ring ring-offset-base-100 w-10  rounded-full ring-offset-2">
                <img src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png" />
              </div>
            </div>
          </div>
        </div>

        <div className="campaigns bg-white m-2  mt-5 px-5 py-2 rounded grid grid-cols-1 gap-5">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              {!campaigns?.length < 1 && <thead>
                <tr>

                  <th>Fullname</th>
                  <th>Purpose</th>
                  <th>Money need</th>
                  <th>Money raised</th>
                  <th></th>
                </tr>
              </thead>}
              {campaigns == undefined && <p className='text-sky-500 text-center'>no campaign found at this time</p>}
              <tbody className=''>

                {campaigns?.map((campaign) => (
                  <Campaign campaign={campaign} theme={theme} />
                ))}


              </tbody>

            </table>
          </div>

        </div>


      </div>
      <Usermobilesidebar />

    </div>


  )
}
