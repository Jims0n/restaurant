import React, { useState } from 'react'
import {MdShoppingBasket, MdAdd, MdLogout} from "react-icons/md"
import { motion } from 'framer-motion'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config"
import Avatar from "../img/avatar.png"
import { Link } from 'react-router-dom'
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const Header = () => {

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{user}, dispatch] = useStateValue();

    const [isMenu, setisMenu] = useState(false)

    const login = async () => {
        if (!user) {
            const {user: { refreshToken, providerData }, } = await signInWithPopup(firebaseAuth, provider);
        dispatch({
            type: actionType.SET_USER,
            user: providerData[0]
        });
        localStorage.setItem("user", JSON.stringify(providerData[0]));
        } else {
            setisMenu(!isMenu)
        }
    };


  return (
    <header className='fixed z-50 w-screen bg-slate-300 p-3 px-4 md:p-4 md:px-16'>
    {/* desktop and tablet */}
        <div className='hidden md:flex w-full h-full items-center justify-between'>
            <Link to={"/"} className='flex items-center gap-2'>
                <img  className='w-10 object-cover' alt='logo' />
                <p className='text-headingColor text-xl font-bold'>City</p>
            </Link>

            <div className='flex items-center gap-8'>
            <motion.ul 
            initial={{opacity: 0, x: 200}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: 200}}
             className='flex items-center gap-8'>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Service</li>
            </motion.ul>

            <div className='relative flex items-center justify-center'>
                <MdShoppingBasket className='text-textColor text-2xl ml-8 cursor-pointer' />
                <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-600 flex items-center justify-center' >
                    <p className='text-sm text-white font-semibold'>2</p>
                </div>
            </div>

            <div className='relative'>
            <motion.img 
            whileTap={{scale: 0.6}} 
            src={user ? user.photoURL : Avatar} 
            className='w-10 m-w-[40px] h-10 m-h-[40px] drop-shadow-xl cursor-pointer rounded-full' 
            alt='userprofile'
            onClick={login}
            />
            {
                isMenu && (
                    <motion.div 
                    initial={{opacity : 0, scale : 0.6}}
                    animate={{opacity : 1, scale : 1}}
                    exit={{opacity : 0, scale : 0.6}}
                     className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute
            top-12 right-0'>
            {
                user && user.email === "opeyemiabdulateef41@gmail.com" && (
                    <Link to={"./CreateContainer.jsx"}>
                    <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200
                transition-all duration-100 ease-in-out text-textColor text-base'>
                New Item <MdAdd />
                </p>
                    </Link>
                )
            }
          <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200
                transition-all duration-100 ease-in-out text-textColor text-base'>
                Logout <MdLogout />
                </p>
            </motion.div>
                )
            }
            </div>
            
            </div>
        </div>



        {/* mobile */}
        <div className='flex md:hidden w-full h-full'>
        <Link to={"/"} className='flex items-center gap-2'>
                <img  className='w-10 object-cover' alt='logo' />
                <p className='text-headingColor text-xl font-bold'>City</p>
            </Link>

            <div className='flex items-center gap-8'>
            <motion.ul 
            initial={{opacity: 0, x: 200}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: 200}}
             className='flex items-center gap-8'>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Service</li>
            </motion.ul>

            <div className='relative flex items-center justify-center'>
                <MdShoppingBasket className='text-textColor text-2xl ml-8 cursor-pointer' />
                <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-600 flex items-center justify-center' >
                    <p className='text-sm text-white font-semibold'>2</p>
                </div>
            </div>

            <div className='relative'>
            <motion.img 
            whileTap={{scale: 0.6}} 
            src={user ? user.photoURL : Avatar} 
            className='w-10 m-w-[40px] h-10 m-h-[40px] drop-shadow-xl cursor-pointer rounded-full' 
            alt='userprofile'
            onClick={login}
            />
            {
                isMenu && (
                    <motion.div 
                    initial={{opacity : 0, scale : 0.6}}
                    animate={{opacity : 1, scale : 1}}
                    exit={{opacity : 0, scale : 0.6}}
                     className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute
            top-12 right-0'>
            {
                user && user.email === "opeyemiabdulateef41@gmail.com" && (
                    <Link to={"./CreateContainer.jsx"}>
                    <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200
                transition-all duration-100 ease-in-out text-textColor text-base'>
                New Item <MdAdd />
                </p>
                    </Link>
                )
            }
          <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200
                transition-all duration-100 ease-in-out text-textColor text-base'>
                Logout <MdLogout />
                </p>
            </motion.div>
                )
            }
            </div>
            
            </div>
        </div>
    </header>
  )
}

export default Header