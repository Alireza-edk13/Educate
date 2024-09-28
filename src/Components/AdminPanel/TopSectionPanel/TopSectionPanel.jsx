import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function TopSectionPanel({title,spanTitle}) {
    return (
        <div className="flex justify-between px-4 mt-4 sm:px-8">
            <h2 className="text-3xl">{title}</h2>
            <div className="flex items-center space-x-1 text-xs">
                <Link to={"/admin-panel"} className="router-link-active font-bold text-main">Home</Link>
                <IoIosArrowForward />
                <span>{spanTitle}</span>
            </div>

        </div>
    )
}
