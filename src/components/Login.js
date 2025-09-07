import React, { useState } from 'react'
import Header from './Header'

const Login = () => {


  const [isSignInForm,setisSignInForm] = useState(true)
  const toggleSignInForm = ()=>{
    setisSignInForm(!isSignInForm)
  }

  return (
    <div>
      <Header/>
      <div className='absolute  '>
        <img alt='logo'
       className='' 
       src="https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/IN-en-20250901-TRIFECTA-perspective_48d84d4e-9558-46b8-a0f3-8b2dc8478431_large.jpg"/>
      </div>

      <form className='p-12 absolute bg-black w-3/12 my-36 mx-auto right-0 left-0 opacity-90 flex flex-col text-white bg-opacity-80 rounded-lg  '>
        <h1 className='text-3xl font-bold mb-4 py-4'>{isSignInForm? "Sign In":"Sign Up"}</h1>
      {!isSignInForm &&  <input type='text' placeholder='Full Name' className='p-4 my-2 w-full bg-gray-600 rounded-lg'/>}
        <input type='text' placeholder='Email Address' className='p-4 my-2 w-full bg-gray-700 rounded-lg'/>
        <input type='password' placeholder='Password' className='p-4 my-2 w-full bg-gray-600 rounded-lg'/>
        <button type="submit" className='p-4 my-4 bg-red-600 w-full rounded-lg'> {isSignInForm? "Sign In":"Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Nestflix? Sign Up Now":"Already Register, Sing In Now"}</p>
      </form>
    </div>
  )
}

export default Login