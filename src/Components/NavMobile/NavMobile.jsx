import React from 'react'
import { IoMailOutline } from "react-icons/io5";
import { HiOutlinePhone } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import NavMobileMenuItem from '../NavMobileMenuItem/NavMobileMenuItem';
import { IoLocationOutline } from "react-icons/io5";
import NavMobileSubMenuItem from '../NavMobileSubMenuItem/NavMobileSubMenuItem';


export default function NavMobile({ isNavMobileOpen, setIsNavMobileOpen }) {
    return (
        <>
            <div className={`${isNavMobileOpen ? 'mobile-nav--active' : ''} fixed top-0 left-0 w-screen h-screen z-50 translate-x-[-100%] mobile-nav-transition xl:hidden  invisible`}>
                {/* Black bg */}
                <div onClick={() => setIsNavMobileOpen(prevState => !prevState)} className=' absolute inset-0 bg-mainBlack opacity-[0.3]'></div>
                <div className="mobile-nav--active relative h-full w-[270px] vsm:w-[300px] text-mainBlack  bg-mainBgColor z-10 overflow-y-auto py-8 px-4 translate-x-[-100%] invisible opacity-0">
                    {/* Exit Btn */}
                    <span onClick={() => setIsNavMobileOpen(prevState => !prevState)} className=' absolute right-3 text-mainBlack top-4 font-InterSB text-2xl cursor-pointer'>X</span>
                    {/* Logo */}
                    <div className=" mb-8">
                        <div className='flex items-center'>
                            <img src="/images/logo.webp" className='w-12' alt="logo" />
                            <h4 className=' font-InterSM text-3xl ml-0.5'>Educate</h4>
                        </div>
                    </div>
                    {/* Menu */}
                    <ul>
                        <li className=" border-b border-mainGray">
                            <Link to={'/'} className=' flex justify-between leading-8 transition-all duration-500 hover:text-main items-center text-mainBlack capitalize font-InterSB tracking-[0.48px] h-12'>
                                Home
                            </Link>
                        </li>
                        <NavMobileMenuItem title="course">
                            <NavMobileSubMenuItem title="course list" href="course-list" />
                            <NavMobileSubMenuItem title="course detail" href="course-detail/ai-course" />
                        </NavMobileMenuItem>
                        <NavMobileMenuItem title="blog">
                            <NavMobileSubMenuItem title="blog list" href="blog-list" />
                            <NavMobileSubMenuItem title="blog detail" href="blog-detail" />
                        </NavMobileMenuItem>
                        <NavMobileMenuItem title="pages">
                            <NavMobileSubMenuItem title="teacher list" href="teacher-list" />
                            <NavMobileSubMenuItem title="teacher detail" href="teacher-detail" />
                            <NavMobileSubMenuItem title="login" href="login" />
                            <NavMobileSubMenuItem title="register" href="register" />
                        </NavMobileMenuItem>
                        <li className=" border-none">
                            <Link to={'/contact'} className=' flex justify-between leading-8 transition-all duration-500 hover:text-main items-center text-mainBlack capitalize font-InterSB tracking-[0.48px] h-12'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    {/* Contact */}
                    <ul className=" font-InterR mt-6 space-y-3 child:flex child:items-center child:gap-2">
                        <li>
                            <span className=' bg-main text-mainWhite rounded-full p-2'><IoLocationOutline fontSize={18} /></span>
                            <Link className=' transition-all text-sm duration-75 hover:text-main'>631 Elgin ST. Celina, State 111111</Link>
                        </li>
                        <li>
                            <span className='bg-main text-mainWhite rounded-full p-2'><IoMailOutline fontSize={18} /></span>
                            <Link className=' transition-all text-sm duration-75 hover:text-main'>email@example.com</Link>
                        </li>
                        <li>
                            <span className=' bg-main text-mainWhite rounded-full p-2'><HiOutlinePhone fontSize={18} /></span>
                            <Link className=' transition-all text-sm duration-75 hover:text-main'>+1 234 567 890</Link>
                        </li>
                    </ul>

                </div>
            </div>

        </>
    )
}
