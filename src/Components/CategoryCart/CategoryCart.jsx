import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar, FaChalkboardTeacher, FaRegClock } from "react-icons/fa";
import Button from '../Button/Button';

export default function CategoryCart({title,star,img,teachers,time}) {
    return (
        <div>
            <div className=' group relative overflow-hidden rounded-2xl mainBoxShadow'>
                <img className=' rounded-2xl' src={`/images/category/${img}`} alt="c2" />
                <div className=" absolute p-6 bottom-[-78px] group-hover:bottom-0 duration-[0.5s] transition-all text-mainWhite">
                    <Link className=' relative text-[27px] after:mt-1 after:block after:bg-white  after:w-28 after:h-[2px] after:left-0 after:bottom-[-6px]'>{title}</Link>
                    <p className=" mb-4 vsm:mb-16 mt-4">Lorem ipsum dolor sit amet consectetur. Non convallis sed id aliquam
                        tempus.</p>
                    <ul className='flex gap-2 vsm:gap-8 items-center child:flex-center child:gap-2 mb-6'>
                        <li>
                            <FaStar />
                            {star}
                        </li>
                        <li className=' relative before:absolute before:bg-white before:h-[4px] before:w-[4px] before:rounded-full before:-left-4 before:top-3'>
                            <FaChalkboardTeacher fontSize={20} />
                            {teachers} Teachers
                        </li>
                        <li className=' relative before:absolute before:bg-white before:h-[4px] before:w-[4px] before:rounded-full before:-left-4 before:top-3'>
                            <FaRegClock />
                            {time}+
                        </li>
                    </ul>
                    
                    <Button styleBtn='bg-white text-black' text='Explore Now' href={'/course-list'} />

                </div>
            </div>

        </div>
    )
}
