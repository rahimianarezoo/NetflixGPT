import React from 'react'
import Header from '../components/Header'

const Login = () => {
  return (
    <>
      <Header/>
      <div>
        <img 
          className='absolute'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/556d9815-a075-4234-bfaf-27f0eb38870e/DE-en-20240520-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          alt='backgroun-netflix-image' 
        />
      </div>
      <div>
        <form className='absolute rounded-lg w-3/12 my-36 mx-auto right-0 left-0 text-white p-12 bg-black bg-opacity-80'>
          <h1 className='font-bold text-3xl py-4'>Sign In</h1>
          <input 
            className='p-4 my-4 w-full bg-gray-800'
            type='text' 
            placeholder='Email Address'>
          </input>
          <input 
            className='p-4 my-4 w-full bg-gray-800'
            type='password' 
            placeholder='Password'>
          </input>
          <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>Sign In</button>
        </form>
      </div>

    </>
  )
}

export default Login
