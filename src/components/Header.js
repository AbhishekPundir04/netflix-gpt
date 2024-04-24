import React, { useEffect } from 'react'
// import netFlixLogo from "../assets/images/Netflix_Logo_PMS.png"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../src/utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

import { Logo } from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptSlice';

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((store) => store)
  console.log("user", user.user?.photoURL)
  const handSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      console.log("/error")
    });
  }
  useEffect(() => {
    const unsbscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))

        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    return () => unsbscribe();
  }, [])

  const handleGptSearch = () => {
    console.log("clicked")
    dispatch(toggleGptSearchView())

  }
  return (
    <div className='absolute cursor-pointer flex justify-between items-center w-screen z-10 px-8 py-2 bg-gradient-to-b from-gray-900 to-black-2000'>
      <img className='w-44' src={Logo} alt='logo' />
      {user && (
        <div className='flex justify-end  w-12 h-12'>
          <button onClick={() => handleGptSearch()} className='bg-indigo-400 rounded-lg px-6'>GPT Search</button>
          <h3>{user?.user?.displayName}</h3>
          <img className='' alt='profile' src={user?.user?.photoURL} />
          <button onClick={handSignOut} className='text-white mr-10 font-bold w-screen border-spacing-2'>Sign Out</button>
        </div>
      )}
    </div>
  )
}

export default Header