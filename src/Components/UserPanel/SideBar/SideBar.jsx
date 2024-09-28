import React, { useState } from 'react'
import { IoHomeSharp } from "react-icons/io5";
import { FaChalkboardTeacher } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { MdEdit } from "react-icons/md";
import { IoTicket } from 'react-icons/io5';
import { ImExit } from "react-icons/im";
import { FaCartShopping } from "react-icons/fa6";
import DeleteModal from '../../AdminPanel/DeleteModal/DeleteModal';
import { RiAdminFill } from "react-icons/ri";
import { useGetUserInfo } from '../../../hooks/useUser';

export default function SideBar({ isNavCmsMobileOpen, setIsNavCmsMobileOpen }) {

    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
    const navigate = useNavigate()

    const { data: userInfo } = useGetUserInfo()


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
                            <Link to={'courses'} className='flex items-center text-md gap-2 p-2 rounded-lg hover:bg-gray-100 transition-all'>
                                <FaChalkboardTeacher className=' text-2xl text-main' />
                                Courses
                            </Link>
                        </li>
                        <li onClick={() => setIsNavCmsMobileOpen(prevState => !prevState)}>
                            <Link to={'orders'} className='flex items-center text-md gap-2 p-2 rounded-lg hover:bg-gray-100 transition-all'>
                                <FaCartShopping className=' text-2xl text-main' />
                                Orders
                            </Link>
                        </li>
                        <li onClick={() => setIsNavCmsMobileOpen(prevState => !prevState)}>
                            <Link to={'edit-account'} className='flex items-center text-md gap-2 p-2 rounded-lg hover:bg-gray-100 transition-all'>
                                <MdEdit className=' text-2xl text-main' />
                                Edit Account
                            </Link>
                        </li>
                        <li onClick={() => setIsNavCmsMobileOpen(prevState => !prevState)}>
                            <Link to={'ticket'} className='flex items-center text-md gap-2 p-2 rounded-lg hover:bg-gray-100 transition-all'>
                                <IoTicket className=' text-2xl text-main' />
                                Ticket
                            </Link>
                        </li>
                        {
                            userInfo?.role === "ADMIN" &&
                            <li onClick={() => setIsNavCmsMobileOpen(prevState => !prevState)}>
                                <Link to={'/admin-panel'} className='flex items-center text-md gap-2 p-2 rounded-lg hover:bg-gray-100 transition-all'>
                                    <RiAdminFill className=' text-2xl text-main' />
                                    Admin Panel
                                </Link>
                            </li>
                        }

                        <li onClick={() => setIsNavCmsMobileOpen(prevState => !prevState)}>
                            <div onClick={() => setIsShowDeleteModal(true)} className='flex items-center text-md gap-2 p-2 rounded-lg hover:bg-gray-100 transition-all'>
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
