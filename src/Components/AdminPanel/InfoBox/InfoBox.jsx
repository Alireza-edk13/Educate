import React from 'react'
import { FaUser } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { IoTicket } from 'react-icons/io5';
import { RiMoneyPoundCircleFill } from "react-icons/ri";

export default function InfoBox({ title, count }) {
    return (
        <div className="flex items-center bg-mainWhite border rounded-md overflow-hidden shadow">
            <div className="p-4 bg-main text-5xl h-full text-mainWhite">
                {title === "ثبت نامی‌ها" && <FaUser />
                    || title === "دوره‌ها" && <FaChalkboardTeacher />
                    || title === "جلسات" && <FaBook />
                    || title === "Site Viwe" && <IoEyeSharp />
                    || title === "Courses" && <FaChalkboardTeacher />
                    || title === "Total Buy" && <RiMoneyPoundCircleFill />
                    || title === "Tickets" && <IoTicket />
                }
            </div>
            <div className="px-4">
                <h3 className="text-md mb-1 text-gray-500 tracking-wider">
                    {
                        title === "ثبت نامی‌ها" && "Users"
                        || title === "دوره‌ها" && "Courses"
                        || title === "جلسات" && "Sessions"
                        || title === "Site Viwe" && "Site Viwe"
                        || title
                    }
                </h3><p className="text-xl">{count}</p></div>
        </div>
    )
}
