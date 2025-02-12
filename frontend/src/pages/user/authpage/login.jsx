import React, { useState } from 'react'
import pic from "./../../../assets/images/Authimages/donationpic.png"
import { SignupImage } from '../../../components/svgContainer/SignupImage'
import { Link} from 'react-router-dom'
import { useUserLogin } from '../../../hooks/useUserLogin'

export const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  })
  const {loading, userLogin } = useUserLogin()
  const handleSubmit=async (e)=>{
    e.preventDefault()
    await userLogin(user.username, user.password)
    setUser("")
  }
  return (
    <div className='bg-sk'>
    <div className='w-full flex flex-col md:flex-row  h-screen items-center justify-center'>
      <div className='w-full  hidden md:flex md:justify-center bg-primary h-screen items-center md:block bg-gradient-to-r from-blue-400 to-blue-600 text-white '>
        <div className=' flex flex-col gap-5 w-full items-center'>
       <SignupImage/>
         <p className='text-black-400 font-medium text-gray-200 text-md w-1/2 text-center'>Join us today! Create an account to start donating and making a difference. </p>
        </div>
        
      </div>

      <form onSubmit={(e)=> handleSubmit(e)} className='md:w-1/2 w-full p-10 md:p-0 md:mr-24 mb-10 md:ml-20'>
        <div>
          <h4 className='text-center font-bold  font-mono text-3xl md:text-4xl mb-10 text-primary '>User Login</h4>
          <div className='flex flex-col gap-7'>

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path
                  d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Username" value={user.username} onChange={(e)=> setUser({...user, username:e.target.value})} required />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input type="password" className="grow" placeholder="password" value={user.password} onChange={(e)=> setUser({...user, password:e.target.value})} required/>
            </label>
            
          </div>
         
          <button className="btn rounded-full bg-gradient-to-r from-blue-400 to-blue-600  bg-primary mt-10 w-full font-medium  text-xl text-md hover:bg-blue-600 text-white transform hover:scale-105 transition-transform duration-300 ease-in-out">{loading ? <span className='loading loading-spinner'></span>: "Login"} </button>
          <Link to={"/signup"} className='mt-1 text-blue-500 underline text-sm cursor-pointer'>Don't have an account?</Link>
        </div>
      </form>
    </div>
  </div>
  )
}