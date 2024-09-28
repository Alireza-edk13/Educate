import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


export default function SortSection() {

    const [isSortByListOpen, setIsSortByListOpen] = useState(false)
    const [isCategoryByListOpen, setIsCategoryByListOpen] = useState(false)
    return (
        <>
            <div className="flex justify-between items-center flex-wrap mb-8">
                <div className="">
                    <div className=" flex items-center gap-2">
                        <span className=' text-mainGray'>Sort By:</span>
                        <div className=" relative transition-all duration-200 ease-in-out">
                            <div onClick={() => setIsSortByListOpen(prevState => !prevState)} className=' flex items-center gap-2 cursor-pointer'>Newest <span className={` ${isSortByListOpen ? '-rotate-90' : 'rotate-90'}`}><IoIosArrowForward color='#0aa6d7' fontSize={24} /></span></div>
                            <ul className={` ${isSortByListOpen ? ' opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-[-21]'}   bg-mainWhite rounded-md mainBoxShadow mt-1 overflow-hidden p-0 absolute top-full left-0 z-30 transition-all duration-200 ease-in-out child:pl-[18px] child:cursor-pointer child:pr-[29px] leading-[40px] child:transition-all child-hover:bg-[#f6f6f6]`}>
                                <li>Newest</li>
                                <li>Oldest</li>
                                <li>Popular</li>
                                <li>A-Z</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex items-center -order-1 mb-8 xl:order-none xl:mb-0 gap-2 flex-wrap">
                    <h6 className=' text-mainGray'>Showing 1-9 of 50 results</h6>
                    <form className=' relative'>
                        <button className=' absolute left-3 top-2 border-none' type="button">
                            <IoIosSearch fontSize={'1.6rem'} className=' text-main' />
                        </button>
                        <input type="text" placeholder='Search Here...' className=' outline-none bg-transparent border border-lightGray py-2 px-3 text-mainGray placeholder:text-mainGray rounded-md pl-10' />
                    </form>
                </div>
            </div>
        </>
    )
}
