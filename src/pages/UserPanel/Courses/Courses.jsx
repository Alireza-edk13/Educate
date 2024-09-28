import React, { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa";
import { GoVideo } from "react-icons/go";
import { Link } from 'react-router-dom'
import Button from "../../../Components/Button/Button";
import SadError from "../../../Components/SadError/SadError";
import { useGetUserCourses } from "../../../hooks/useCourse";

export default function Courses() {


    const { data: courses, isSuccess, isError, error, isLoading } = useGetUserCourses()


    if (isLoading) {
        return <h3 className=" text-xl sm:text-2xl h-screen">Loading......</h3>
    }

    return (
        <>
            {courses?.length ? (
                <div className="grid grid-cols-1 gap-2">
                    {courses?.map(course => (
                        <div key={course._id} className=' group relative pt-8'>
                            {/* icon */}
                            <div className=' -left-1 -top-2 z-10 absolute w-[50px] md:w-full md:left-0 md:top-0 '>
                                <img className=' size-16 md:size-24 transition-all  duration-[0.5s]'
                                    src={`https://educate-api.vercel.app/courses/covers/${course.course.cover}`}
                                    alt="cover" />
                            </div>
                            {/* content */}
                            <div className=" relative pr-6 md:pr-0 ml-0 bg-mainWhite  flex flex-col md:flex-row justify-between  md:ml-[52px] mainBoxShadow rounded-[10px]">
                                {/* left side */}
                                <div className=" relative w-full pt-5 pr-0 pb-0  z-20 md:pb-5 pl-10 md:pl-20">
                                    <Link to={`/course-detail/${course.course.shortName}`} className=' mt-2 text-2xl md:text-[27px] font-InterM transition-all   duration-[0.5s] hover:text-main'>{course.course.name}</Link>
                                    <p className=" text-mainGray font-InterSB mb-6 mt-2">{course.course.categoryID.title}</p>
                                    <ul className='flex gap-8 items-center child:flex-center child:gap-2 '>
                                        <li className=' text-[#7a8582]'>
                                            <GoVideo color='#0aa6d7' />
                                            12 Videos
                                        </li>
                                        <li className=' bottom-0 right-0 rounded-[10px] text-[#7a8582] relative before:absolute  before:bg-mainGray before:h-[4px] before:w-[4px] before:rounded-full before:-left-4 before:top-3'>
                                            <FaRegClock color='#0aa6d7' />
                                            05+ Hours
                                        </li>
                                    </ul>
                                </div>
                                {/* right side */}
                                <div className=" w-full lg:w-48 lg:pr-10 flex justify-end my-6 md:my-0 md:flex-center">
                                    <Button styleBtn='py-2 z-20 px-4  text-md flex-center' text="Watch Now" href={`/course-detail/${course.course.shortName}`} />
                                </div>

                                <img className=' absolute bottom-0 right-0 rounded-br-[10px]' src="/images/courses/shape/vector-1.webp" alt="shape" />
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <SadError text='You dont have any Course!' />
            )}
        </>
    );
}
