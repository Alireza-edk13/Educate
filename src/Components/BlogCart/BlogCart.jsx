

import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

export default function BlogCart({img}) {
    return (
        <div className="mainBoxShadow group flex-col md:flex-row  flex rounded-2xl overflow-hidden bg-mainWhite">
            <div className=' relative'>
                <img src={`/images/blog/${img}`} alt="blog-img" className=" h-full object-cover transition-all duration-[0.6s] ease-linear delay-0 group-hover:scale-110" />
                </div>

            <div className=" relative z-10 bg-mainWhite md:bg-transparent md:bg-BlogCartBg bg-no-repeat bg-cover bg-left  flex flex-col rounded-2xl md:rounded-tr-2xl md:rounded-br-2xl p-6 -mt-12 md:mt-0 ml-0 md:-ml-20 md:py-6 md:pr-6 md:pl-16 justify-between gap-12">
                <div>
                    <p className='text-mainWhite px-2  text-sm sm:text-base bg-main  rounded w-fit'>9 May 2024</p>
                    <div className='text-sm sm:text-base my-4 flex flex-wrap gap-2'>
                        <span>#education</span>
                        <span>#onlineclass</span>
                        <span>#learning</span>
                        <span>#education</span>
                    </div>
                    <h4 className=' mb-4 text-xl sm:text-2xl'>
                        <Link to={'/blog-detail'} className=' transition-all duration-[0.3s] hover:text-main'>Remote Learning Tips: Thrive in Online Classes</Link>
                    </h4>
                    <p className=' text-sm sm:text-base text-mainGray'>Lorem ipsum dolor sit amet consectetur. Non convallis sed id aliquam tempus...</p>
                </div>
                <div className=" flex justify-between items-center  text-sm sm:text-base ">
                    <div className='flex-center gap-2'>
                        <img src="/images/blog/u-1.webp" alt="user" className=' rounded-full' />
                        <h6 className=' text-mainGray transition-all duration-[0.3s] hover:text-main cursor-pointer'>Michal Clark</h6>
                    </div>
                    <Link to={'/blog-detail'} className=' flex items-center gap-2 text-main'>Read More<IoIosArrowForward color='#0aa6d7' /></Link>
                </div>
            </div>
        </div>
    )
}


