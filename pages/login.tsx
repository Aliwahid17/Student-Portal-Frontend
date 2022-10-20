import React, { useState } from 'react'
import { useAuth } from '../context/AuthState'


const Login = () => {
  
  const { user,logOut,googleSignIn } = useAuth()

  console.log(user)
  
  // const handleSignOut = async () => {
  //   try {
  //     await logOut()
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }


  return (
    <>

    {
      user ? (
       <button onClick={() => logOut()} >
          LogOut
       </button>
      ):(
        <button onClick={() => googleSignIn()} >Login </button>
        // <a href='/'>Sign in</a>
      )
    }


    </>
  )
}

export default Login