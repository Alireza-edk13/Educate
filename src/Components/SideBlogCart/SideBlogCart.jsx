import React from 'react'
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

export default function SideBlogCart() {
    return (
        <Link className='group flex items-center gap-4 bg-mainWhite mainBoxShadow p-4 rounded-lg'>
            <div className=" flex-shrink-0  rounded-md  relative overflow-hidden">
                <img src="/images/blog/sb-2.webp" alt="blog" className=' rounded-md transition-all duration-[0.6s] ease-linear delay-0 group-hover:scale-110' />
            </div>
            <div>
                <h6 className=' group-hover:text-main text-md transition-all duration-500'>The Art of Effective Note-Taking For
                    Students</h6>
                <span className=' flex mt-2 items-center gap-2 text-main'>Read More<IoIosArrowForward color='#0aa6d7' /></span>
            </div>
        </Link>
    )
}
