import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { HiOutlinePhone } from "react-icons/hi2";
export default function ContactCart({ icon , title }) {
    return (
        <div className=' relative group left-10  w-[90%] p-3 pl-8 transition-all duration-[0.5s] bg-mainWhite text-left rounded-2xl'>
            <div className=' absolute flex-center size-16 text-2xl rounded-full border-[3.2px] border-mainRgba left-[-40px] bg-mainWhite top-[-8px] text-main'>
                {icon === 'IoLocationOutline' && <IoLocationOutline />}
                {icon === 'IoMailOutline' && <IoMailOutline />}
                {icon === 'HiOutlinePhone' && <HiOutlinePhone />}
            </div>
            <p className='text-mainGray group-hover:text-main text-base cursor-pointer'>{title}</p>
        </div>
    )
}
