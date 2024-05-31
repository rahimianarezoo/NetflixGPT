import React, { useState } from 'react';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { useSelector } from 'react-redux';

const Header = () => {
  // const [isSignOut, setIsSignOut] = useState(false)
  const user =useSelector((store) => store.user)
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
      // An error happened.
      navigate('/error');
    });
  }
  return (
    <div className='px-8 py-2 w-screen bg-gradient-to-b from-black bg-opacity-90 absolute flex justify-between z-10'>
        <img className='w-44' 
        src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
        alt='Netflix-logo' />
    {user && (
              <div className='mt-5 flex'>
              <img 
                className='w-6 h-6 mr-3'
                alt='user-icon' 
                src={user?.photoURL}
              />
              <div>
                <button 
                  className='bg-red-600 px-1 rounded-md text-white py-1'
                  onClick={handleSignOut}>
                    Sign out
                </button>
              </div>
            </div>
    )}
    </div>
  )
}

export default Header
