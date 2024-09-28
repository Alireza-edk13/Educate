import React from 'react'
import { Link } from 'react-router-dom'
import FooterPart from '../FooterPart/FooterPart'
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { HiOutlinePhone } from "react-icons/hi2";

export default function FooterSection() {
    return (
        <>
            <footer>
                <div className=' bg-FooterBg bg-no-repeat bg-cover py-14 relative'>
                    <div className="container">
                        <div className="grid grid-cols-12 gap-y-8 sm:gap-8 xl:gap-0">
                            <div className=" col-span-12 sm:col-span-12 xl:col-span-3 mb-8">
                                <Link to={'/'} className=' mb-2'>
                                    <div className='flex items-center'>
                                        <img src="/images/logo.webp" className='w-12' alt="logo" />
                                        <h4 className=' font-InterSM text-3xl ml-0.5'>Educate</h4>
                                    </div>
                                </Link>
                                <p className=' max-w-full xl:max-w-[270px] mt-4 text-mainGray'>Lorem ipsum dolor sit amet consectetur. Non convallis sed id aliquam tempus.Volutpat tortor tincidunt egestas sit risus donec.</p>
                            </div>
                            <div className=" col-span-12 sm:col-span-6 xl:col-span-2">
                                <FooterPart />
                            </div>
                            <div className=" col-span-12 sm:col-span-6 xl:col-span-2">
                                <FooterPart />
                            </div>
                            <div className=" col-span-12 sm:col-span-6 xl:col-span-2">
                                <FooterPart />
                            </div>
                            <div className=" col-span-12 sm:col-span-6 xl:col-span-3">
                                <h5 className='text-xl mb-6'>Contact Us</h5>
                                <ul className=" font-InterR  space-y-3 child:flex child:items-start child:gap-2">
                                    <li>
                                        <span className=' pt-[0.1rem]'><IoLocationOutline color='#0aa6d7' fontSize={18} /></span>
                                        <Link className=' transition-all duration-75 hover:text-main'>631 Elgin ST. Celina, State 111111</Link>
                                    </li>
                                    <li>
                                        <span className=' pt-[0.1rem]'><IoMailOutline color='#0aa6d7' fontSize={18} /></span>
                                        <Link className=' transition-all duration-75 hover:text-main'>email@example.com</Link>
                                    </li>
                                    <li>
                                        <span className=' pt-[0.1rem]'><HiOutlinePhone color='#0aa6d7' fontSize={18} /></span>
                                        <Link className=' transition-all duration-75 hover:text-main'>+1 234 567 890</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className=" relative flex items-center justify-between gap-7 mt-8 xl:mt-4 z-10 flex-wrap">
                            <ul className="flex items-center gap-4 child:p-3 child:rounded-xl child:bg-main">
                                <li><img src="/images/footer/Twitter.webp" alt="social" /></li>
                                <li><img src="/images/footer/Facebook.webp" alt="social" /></li>
                                <li><img src="/images/footer/Linkedin.webp" alt="social" /></li>
                                <li><img src="/images/footer/Instagram.webp" alt="social" /></li>
                            </ul>
                            <div className="flex flex-wrap items-center gap-4">
                                <h5 className='text-xl'>Newsletter</h5>
                                <form className=' relative flex items-center w-full sm:w-80' action="">
                                    <input type="email" placeholder='Your Email' className=' rounded-md outline-none w-full bg-transparent border border-[#b7bdbb] py-2 px-3 placeholder:text-[#b7bdbb]' />
                                    <button type="button" className='btn -ml-24 py-2 px-4 text-md'>
                                        <span className='btn_curve'></span>Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <img src="/images/ourTeachers/dots-1.webp" alt="dots" className='dots opacity-[.4] left-0 hidden bottom-[5%]  lg:block' />
                    <img className=' absolute top-4 right-16 rotate-[210deg] hidden md:block size-16 sm:size-auto' src="/images/comments/vector-2.webp" alt="shape" />


                </div>
                <div className=' py-4 bg-main text-center text-mainWhite'><p>©2024 Educate All Rights Reserved.</p></div>

            </footer>
        </>
    )
}
