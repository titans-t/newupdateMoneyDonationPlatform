import React, { createContext, useContext, useEffect, useState } from 'react'
import { useAuthContext } from '../authContext'
import { io } from 'socket.io-client'
import { useUserZustands } from '../../zustand/useUserZustands'
import {toast} from 'react-hot-toast'
const SocketContext= createContext()

export const SocketContextProvider = ({children})=>{
    const {authuser} = useAuthContext()
    const [socket, setSocket] = useState(null);
    const {approvedCampaign, setApprovedCampaigns}= useUserZustands()
    useEffect(()=>{
        if(authuser){
            const socket = io('http://localhost:5000', {
                query:{
                    userId: authuser._id
                }
            })
            socket.on("statusApproved", (camapign)=>{  toast.success('Another One Campaign has been Approved'); setApprovedCampaigns(camapign) })
            setSocket(socket)
            return ()=> socket.close()
            
        }else{
            if(socket){
                socket.close()
                setSocket(null)
            }
        }
        
    },[authuser])
   


    return (
        <SocketContext.Provider >
            {children}
        </SocketContext.Provider>
    )
}

export const UseSocketContext=()=>{
    return useContext(SocketContext)
}