import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar, FaChalkboardTeacher, FaRegClock } from "react-icons/fa";
import Button from '../Button/Button';

export default function OurTeachersCart({ img, name, role }) {
    return (
        <>
            <div className=" px-5 sm:px-2">
                <div className=" group rounded-2xl relative overflow-hidden">
                    <img className=' rounded-2xl' src={`./images/ourTeachers/${img}`} alt="teacher" />
                    <div className=" md:m-[0.4rem] absolute h-24 transition-custom overflow-hidden  group-hover:content-center  group-hover:h-[92%] rounded-lg bg-white text-center bottom-0">
                        <div className=" py-4 px-3 overflow-hidden">
                            <h5 className=' mb-2 text-xl font-InterM'><Link className=' hover:text-main transition-all'>{name}</Link></h5>

                            <ul className='flex gap-3 vsm:gap-1  md:gap-4 items-center justify-center text-mainGray child:flex-center child:gap-2 mb-6'>
                                <li>
                                    <FaStar color='#0aa6d7' />
                                    5
                                </li>
                                <li>
                                    <FaChalkboardTeacher fontSize={20} color='#0aa6d7' />
                                    {role}
                                </li>
                                <li>
                                    <FaRegClock color='#0aa6d7' />
                                    60+
                                </li>
                            </ul>

                            <p className=" pt-2 text-mainGray">Lorem ipsum dolor sit amet consectetur. Non convallis sed id aliquam
                                tempus. </p>
                            <Button styleBtn='my-6' text='View Details' href={'/teacher-detail'} />

                            <img className=' absolute h-0 -bottom-24 right-0 w-full transition-all duration-[0.4s] ease-in-out group-hover:bottom-0 group-hover:h-16 rounded-br-[10px]' src="/images/ourTeachers/feture-bg-shape.webp" alt="shape" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
