import React, { useState , useRef } from 'react';
import Header from '../components/Header';
import {checkValidData} from '../utils/validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const [isSignInForm,setIsSignInForm] = useState(true);
  const[errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value)
    setErrorMessage(message)
    if(message) return;
    if(!isSignInForm) {
        createUserWithEmailAndPassword(
          auth, 
          email.current.value, 
          password.current.value
        )
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, 
            photoURL: "https://avatars.githubusercontent.com/u/32914697?s=400&u=7d0967997407d4fe53d49b6af2c709a66c8883e8&v=4"
          }).then(() => {
            // Profile updated!
            const {uid, email, displayName, photoURL} = auth.currentUser;
              dispatch(
                addUser({ 
                  uid: uid, 
                  email: email, 
                  displayName: displayName, 
                  photoURL: photoURL 
                })
              );
            navigate("/browse");
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message)
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage)
          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate("/browse")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage)
      });
    }
    }
  
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  };

  return (
    <>
      <Header/>
      <div>
        <img 
          className='absolute'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/556d9815-a075-4234-bfaf-27f0eb38870e/DE-en-20240520-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          alt='background-netflix' 
        />
      </div>
        <div>
        <form 
          onSubmit={(e) => e.preventDefault}
          className='absolute rounded-lg w-4/12 my-36 mx-auto right-0 left-0 text-white p-12 bg-black bg-opacity-80'>
          <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && <input 
            ref={name}
            className='p-4 my-4 w-full bg-gray-800'
            type='text' 
            placeholder='Full Name'>
          </input>} 
          <input 
            ref={email}
            className='p-4 my-4 w-full bg-gray-800'
            type='text' 
            placeholder='Email Address'>
          </input>
          <input 
            ref={password}
            className='p-4 my-4 w-full bg-gray-800'
            type='password' 
            placeholder='Password'>
          </input>
          {errorMessage && <p className='text-red-500 text-lg'>{ "* " + errorMessage}</p> }
          <button 
          type='button'
            className='p-4 my-6 bg-red-700 w-full rounded-lg'
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <div className='flex'>
          <p className='p-4'>
            {isSignInForm 
              ? "New to Netflix?" 
              : "Already Registered."
              }
            </p>
            <button
              type='button'
              onClick={toggleSignInForm} 
              className='font-bold'>
                {isSignInForm ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
