import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai";

import { Link } from 'react-router-dom';

export default function NavBar({ onActive }) {
    return (
        <>
            <nav className="bg-mainWhite border-b p-2 fixed left-0 right-0 top-0 z-40">
                <div className=' flex justify-between items-center'>
                    <div className=' flex-center gap-6'>
                        <Link to={'/'}>
                            <div className='flex items-center'>
                                <img src="/images/logo.webp" className=' w-10 sm:w-12' alt="logo" />
                                <h4 className=' font-InterSM text-[1.5rem]  vsm:text-2xl sm:text-3xl ml-0.5'>Educate</h4>
                            </div>
                        </Link>
                        <form className=' relative md:block hidden' action="">
                            <button className=' absolute left-3 top-2 border-none'>
                                <IoIosSearch fontSize={'1.6rem'} className=' text-main' />
                            </button>
                            <input type="text" placeholder='Search Here...' className=' text-sm outline-none bg-transparent border w-80 py-2 text-gray-500 placeholder:text-gray-500 rounded-md px-10' />
                        </form>
                    </div>
                    <div className=' flex-center gap-4 ml-4 sm:ml-0 sm:gap-6 text-main child:cursor-pointer'>
                        <FaUser className=' text-2xl' />
                        <Link to={'message'}>
                            <IoIosNotifications className=' text-3xl' />

                        </Link>
                        < AiOutlineMenu className=' text-2xl lg:hidden block' onClick={onActive} />
                    </div>
                </div>
            </nav>
        </>
    )
}
