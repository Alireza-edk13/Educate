import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
// import { Link } from 'react-router-dom';

export default function Pagination() {
    return (
        <ul className="flex-center mt-12 gap-2 child:cursor-pointer">
            <li><div className=' hover:bg-main hover:text-mainWhite transition-all duration-400 ease-in-out flex-center size-11 rounded-md border border-lightGray bg-transparent'><IoIosArrowForward className=' rotate-180 h-full w-[70%]' /></div></li>
            <li>
                <div className=' hover:bg-main hover:text-mainWhite transition-all duration-400 ease-in-out font-semibold flex-center size-11 rounded-md border border-lightGray bg-main text-mainWhite'>1</div>
            </li>
            <li>
                <div className=' hover:bg-main hover:text-mainWhite transition-all duration-400 ease-in-out font-semiboldld flex-center size-11 rounded-md border border-lightGray bg-transparent'>2</div>
            </li>
            <li>
                <div className=' hover:bg-main hover:text-mainWhite transition-all duration-400 ease-in-out font-semiboldld flex-center size-11 rounded-md border border-lightGray bg-transparent'>3</div>
            </li>
            <li><div className=' hover:bg-main hover:text-mainWhite transition-all duration-400 ease-in-out flex-center size-11 rounded-md border border-lightGray bg-transparent'><IoIosArrowForward className=' h-full w-[70%]' /></div></li>
        </ul>
    )
}
