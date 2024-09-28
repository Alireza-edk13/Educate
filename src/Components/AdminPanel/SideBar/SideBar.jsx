import React, { useState } from 'react'
import { IoHomeSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { FaBloggerB } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { TbCategory2 } from "react-icons/tb";
import { FaComment } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { IoTicket } from 'react-icons/io5';
import { LuMessagesSquare } from "react-icons/lu";
import { ImExit } from "react-icons/im";
import DeleteModal from '../DeleteModal/DeleteModal';


export default function SideBar({ isNavCmsMobileOpen, setIsNavCmsMobileOpen }) {

  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('user')
    navigate("/");
  }

  return (
    <>
      <div onClick={() => setIsNavCmsMobileOpen(prevState => !prevState)} className={`${isNavCmsMobileOpen ? '' : ' hidden'} fixed inset-0 bg-mainBlack z-30 h-screen opacity-[0.2] lg:hidden`}></div>
      <aside className={`${isNavCmsMobileOpen ? 'mobile-nav--active' : ''} fixed  z-30 w-48  xl:w-60 top-0 left-0 h-screen pt-[4.5rem]  bg-mainWhite border-r translate-x-[-100%] lg:translate-x-0 lg:visible lg:opacity-100 mobile-nav-transition invisible`}>
        <div className='overflow-y-auto py-5 px-3 h-full   bg-mainWhite'>
          <ul className=' space-y-4 child:cursor-pointer'>
            <li onClick={() => setIsNavCmsMobileOpen(prevState => !prevState)}>
              <Link to={''} className='flex items-center text-md gap-2 p-2 rounded-lg hover:bg-gray-100 transition-all'>
                <IoHomeSharp className=' text-2xl text-main' />
                Home
              </Link>
            </li>

            <li onClick={() => setIsNavCmsMobileOpen(prevState => !prevState)}>
              <Link to={'course-list'} className='flex items-center text-md gap-2 p-2 rounded-lg hover:bg-gray-100 transition-all'>
                <FaChalkboardTeacher className=' text-2xl text-main' />
                Courses
              </Link>
            </li>
            <li onClick={() => setIsNavCmsMobileOpen(prevState => !prevState)}>
              <Link to={'session-list'} className='flex items-center text-md gap-2 p-2 rounded-lg hover:bg-gray-100 transition-all'>
                <FaBook className=' text-2xl text-main' />
                Sessions
              </Link>
            </li>

            <li onClick={() => setIsNavCmsMobileOpen(prevState => !prevState)}>
              <Link to={'user-list'} className='flex items-center text-md gap-2 p-2 rounded-lg hover:bg-gray-100 transition-all'>
                <FaUser className=' text-2xl text-main' />
                Users
              </Link>
            </li>

            <li onClick={() => setIsNavCmsMobileOpen(prevState => !prevState)}>
              <Link to={'message'} className='flex items-center text-md gap-2 p-2 rounded-lg hover:bg-gray-100 transition-all'>
                <LuMessagesSquare className=' text-2xl text-main' />
                Message
              </Link>
            </li>

            <li onClick={() => setIsNavCmsMobileOpen(prevState => !prevState)}>
              <Link to={'comments'} className='flex items-center text-md gap-2 p-2 rounded-lg hover:bg-gray-100 transition-all'>
                <FaComment className=' text-2xl text-main' />
                Comments
              </Link>
            </li>
            <li onClick={() => setIsNavCmsMobileOpen(prevState => !prevState)}>
              <Link to={'category'} className='flex items-center text-md gap-2 p-2 rounded-lg hover:bg-gray-100 transition-all'>
                <TbCategory2 className=' text-2xl text-main' />
                Category
              </Link>
            </li>




            <li onClick={() => setIsNavCmsMobileOpen(prevState => !prevState)}>
              <Link to={'blog'} className='flex items-center text-md gap-2 p-2 rounded-lg hover:bg-gray-100 transition-all'>
                <FaBloggerB className=' text-2xl text-main' />
                Blog
              </Link>
            </li>
            <li onClick={() => setIsNavCmsMobileOpen(prevState => !prevState)}>
              <Link to={'ticket'} className='flex items-center text-md gap-2 p-2 rounded-lg hover:bg-gray-100 transition-all'>
                <IoTicket className=' text-2xl text-main' />
                Ticket
              </Link>
            </li>
            {/* 
            <li>
              <Link to={'discount-code'} className='flex items-center text-md gap-2 p-2 rounded-lg hover:bg-gray-100 transition-all'>
                <RiDiscountPercentFill className=' text-2xl text-main' />
                Discount Code
              </Link>
            </li> */}

            <li onClick={() => setIsNavCmsMobileOpen(prevState => !prevState)}>
              <div onClick={() => setIsShowDeleteModal(true)} className='flex cursor-pointer items-center text-md gap-2 p-2 rounded-lg hover:bg-gray-100 transition-all'>
                <ImExit className=' text-2xl rotate-180 text-main' />
                Exit
              </div>
            </li>


          </ul>
        </div>
      </aside>


      {isShowDeleteModal &&
        <DeleteModal onClose={() => setIsShowDeleteModal(false)} onSubmit={logout} title='Exit?' />
      }
    </>
  )
}
