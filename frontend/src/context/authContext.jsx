
import React, { createContext, useContext, useState } from 'react'

export const AuthContextProvider = createContext()

export const useAuthContext= ()=>{
    return useContext(AuthContextProvider)
}

export const AuthenticationContextProvider =  ({children}) => {
    const [authuser, setAuthUser ] = useState( JSON.parse(localStorage.getItem("userauth")) ||null )
  return (
    <AuthContextProvider.Provider value={{authuser, setAuthUser}}>
    {children}
    </AuthContextProvider.Provider>
  )
}

