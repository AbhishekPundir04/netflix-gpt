import React, { useRef, useState } from 'react'
import backgroundImg from "../assets/images/backgroundImg.jpg"
import Header from './Header'
import checkValidateData from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { User_Avatar } from '../utils/constant'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [errorMessage, setErrorMessage] = useState()
  const email = useRef(null)
  const password = useRef(null)
  const fullName = useRef(null)

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }
  const handleButtonClicked = () => {
    console.log(email.current.value)
    console.log(password.current.value)
    const message = checkValidateData(email.current.value, password.current.value)
    setErrorMessage(message)

    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value,fullName.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value, photoURL: User_Avatar

          }).then(() => {
            const {uid, email, displayName,photoURL} = auth.currentUser;
              dispatch(addUser({uid:uid,email:email,displayName:displayName,}))
          }).catch((error) => {
            // An error occurred
            // ...
            console.log(error)
          });
          
          
          navigate("/browse")
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage)
        });

    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
        
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
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className=''>
      <Header />
      <div className='absolute'>
        <img src={backgroundImg} alt='logo' />
      </div>
      <form onSubmit={handleSubmit} className='w-3/12 absolute p-12 bg-black mx-auto my-36 left-0 right-0 bg-opacity-80 rounded-lg'>
        <h1 className='font-bold text-3xl py-4 text-white'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input ref={fullName} type='text' placeholder='Full Name' className='p-4 my-4 w-full  bg-gray-500  text-white rounded-lg'></input>}
        <input ref={email} onChange={(e) => (e.target.value)} type='text' placeholder='Email Address' className=' p-4 my-4 w-full bg-gray-500 text-white rounded-lg' />
        <input ref={password} onChange={(e) => (e.target.value)} type='text' placeholder='Password' className='p-4 my-4 w-full  bg-gray-500  text-white rounded-lg' />
        <p className='text-red-500 pt-2'>{errorMessage}</p>
        <button onClick={handleButtonClicked} className='p-4 my-4 text-white bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <h1 className='text-white text-center mt-5'>OR</h1>
        <p onClick={toggleSignInForm} className='text-white text-center mt-5 cursor-pointer'>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered"}</p>
      </form>
    </div>
  )
}

export default Login