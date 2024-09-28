import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
export default function FooterLink() {
    return (
        <li>
            <span className=' pt-[0.1rem]'><IoIosArrowForward color='#0aa6d7' fontSize={18} /></span>
            <Link to={'/course-list'} className=' transition-all duration-75 hover:text-main'>Courses</Link>
        </li>
    )
}
