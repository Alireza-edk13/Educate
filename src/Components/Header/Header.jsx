import React, { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai";
import NavMobile from '../NavMobile/NavMobile';
import Button from '../Button/Button';
import { useGetUserInfo } from '../../hooks/useUser';

export default function Header() {

  const [isFix, setIsFix] = useState(false);
  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false)
  const [isNavMobileOpen, setIsNavMobileOpen] = useState(false)

  const { data: userInfo } = useGetUserInfo()

  function fixNav() {
    if (document.documentElement.scrollTop > 500) {
      setIsFix(true);
    } else if (document.documentElement.scrollTop < 100) {
      setIsFix(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', fixNav);
    return () => {
      window.removeEventListener('scroll', fixNav);
    };
  },);

  return (
    <>
      <header>
        <nav className={`${isFix ? 'fix-nav-active mainBoxShadow' : ''} z-40 pt-6 pb-4 bg-transparent absolute top-0 left-0 w-full`}>
          <div className=' container'>
            <div className='flex relative justify-between items-center'>
              <div>
                <Link to={'/'}>
                  <div className='flex-center'>
                    <img src="/images/logo.webp" className=' w-10 sm:w-12' alt="logo" />
                    <h4 className=' font-InterSM text-lg vvsm:text-[1.5rem]  vsm:text-2xl sm:text-3xl ml-0.5'>Educate</h4>
                  </div>
                </Link>
              </div>
              <div className='hidden xl:flex-center  gap-16'>
                <ul className='flex-center child:cursor-pointer gap-10'>
                  <li>
                    <Link to={'/'} className='relative text-main before:bg-main before:absolute before:w-[0.9rem] before:h-[0.1rem] before:left-[-19px] before:top-2'>Home</Link>
                  </li>
                  <li className='relative group'>
                    <div>Course</div>
                    <div className={`invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-[-24px] top-[50%] pt-7 transition-all ease duration-300  z-20 ${isFix ? ' top-full' : ''}`}>
                      <div className='flex flex-col text-left  child:rounded-md capitalize child:transition-all child-hover:text-white  child-hover:bg-main bg-main-black child:w-[13rem] py-4 px-2 child:py-2 child:px-4 rounded-xl bg-white'>
                        <Link to={'/course-list'} className='dropdown'>Courses List</Link>
                        <Link to={'/course-detail/ai-course'} className='dropdown'>Course Details</Link>
                      </div>

                    </div>
                  </li>
                  <li className='relative group'>
                    <div>BLog</div>
                    <div className={`invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-[-24px] top-[50%] pt-7 transition-all ease duration-300  z-20 ${isFix ? ' top-full' : ''}`}>
                      <div className='flex flex-col text-left  child:rounded-md capitalize child:transition-all child-hover:text-white  child-hover:bg-main bg-main-black child:w-[13rem] py-4 px-2 child:py-2 child:px-4 rounded-xl bg-white'>
                        <Link to={'/blog-list'} className='dropdown'>Blog List</Link>
                        <Link to={'/blog-detail'} className='dropdown'>Blog Details</Link>
                      </div>

                    </div>
                  </li>
                  <li className='relative group'>
                    <div>Pages</div>
                    <div className={`invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-[-24px] top-[50%] pt-7 transition-all ease duration-300  z-20 ${isFix ? ' top-full' : ''}`}>
                      <div className='flex flex-col text-left  child:rounded-md capitalize child:transition-all child-hover:text-white  child-hover:bg-main bg-main-black child:w-[13rem] py-4 px-2 child:py-2 child:px-4 rounded-xl bg-white'>
                        <Link to={'/teacher-list'} className='dropdown'>Teachers List</Link>
                        <Link to={'/teacher-detail'} className='dropdown'>Teacher Details</Link>
                        <Link to={'/login'} className='dropdown'>Login</Link>
                        <Link to={'/register'} className='dropdown'>Register</Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link to={'/contact'}>Contact</Link>
                  </li>
                </ul>
              </div>
              <div className='flex-center gap-4 sm:gap-5 md:gap-8'>
                <div className=' ml-6 sm:ml-0 cursor-pointer' onClick={() => setIsSearchBoxOpen(prevState => !prevState)}>
                  <IoIosSearch className={`${isSearchBoxOpen ? 'rotate-180' : ''} text-2xl vsm:text-3xl transition-all duration-[.5s]`} />
                </div>
                <div className='hidden xl:block -order-1 lg:order-none'>
                  {
                    userInfo ?
                      <Button styleBtn='py-2 px-4 text-md' text={userInfo?.name} href='/my-account' />
                      :
                      <Button styleBtn='py-2 px-4 text-md' text='Login / Register' href='/login' />
                  }
                </div>
                <div className='block xl:hidden'>
                  {
                    userInfo ?
                      <Link to={'/my-account'}>
                        < FaUser className=' text-xl vsm:text-2xl' />
                      </Link>
                      :
                      <Link to={'/login'}>
                        < FaUser className=' text-xl vsm:text-2xl' />
                      </Link>
                  }

                </div>
                <div className='block xl:hidden cursor-pointer' onClick={() => setIsNavMobileOpen(prevState => !prevState)}>
                  < AiOutlineMenu className=' text-2xl vsm:text-3xl' />
                </div>

              </div>
              {/* search Box */}
              <div onClick={() => setIsSearchBoxOpen(prevState => !prevState)} className={`${isSearchBoxOpen ? "fixed inset-0 bg-mainBlack opacity-[0] w-screen h-screen" : "absolute"}`}></div>
              <form className={` ${isSearchBoxOpen ? ' visible opacity-100 scale-y-100' : ' invisible opacity-0 scale-y-0'}  max-w-md mainBoxShadow transition-all duration-[0.5s] ease-in-out mx-auto absolute w-full -bottom-20 md:right-0`}>
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <IoIosSearch fontSize={'1.4rem'} className=' text-main' />
                  </div>
                  <input type="search" className="block w-full p-4 ps-10 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 outline-none" placeholder="Search..." required />
                  <button type="button" className='btn absolute end-2.5 bottom-2 top-2 -ml-24 py-2 px-4 text-md'><span className='btn_curve'></span>Search</button>
                </div>
              </form>

            </div>
          </div>

        </nav>
        <NavMobile isNavMobileOpen={isNavMobileOpen} setIsNavMobileOpen={setIsNavMobileOpen} />
      </header>
    </>
  )
}
