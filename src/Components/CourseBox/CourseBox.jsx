import React, { useState } from 'react'
import { FaRegClock } from "react-icons/fa";
import { GoVideo } from "react-icons/go";
import { Link } from 'react-router-dom'
import Button from '../Button/Button';

export default function CourseBox(props) {
    return (
        <div className=' group relative pt-8'>
            {/* icon */}
            <div className='-left-4 top-2 z-10 absolute w-[50px] md:w-28 md:left-0 md:top-0 '>
                <img className='group-hover:rotate-[10deg] transition-all  duration-[0.5s]'
                    src={`https://educate-api.vercel.app/courses/covers/${props.cover}`}
                    alt="cover" />
            </div>
            {/* content */}
            <div className=" relative pr-6 md:pr-0 ml-0 bg-mainWhite  flex flex-col md:flex-row justify-between  md:ml-[52px] mainBoxShadow rounded-[10px]">
                {/* left side */}
                <div className=" relative w-full pt-5 pr-0 pb-0 md:pb-5 pl-10 md:pl-20">
                    <img className=' absolute right-0 top-8 invisible sm:visible'
                        src="/images/courses/level/tag-1.webp" alt="leve" />
                    <Link className=' mt-2 text-[27px] font-InterM'>{props.name}</Link>
                    <p className=" text-mainGray font-InterSB mb-6 mt-2">{props.categoryID.title}</p>
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
                    {/* teacher box */}
                    <div className=' mainBoxShadow relative my-7 left-10 max-w-48 sm:max-w-56 py-1 sm:py-3 sm:pl-8 sm:pr-6 bg-mainWhite text-center sm:text-left rounded-2xl'>
                        <h6 className="ml-1 mb-1 font-InterSB">{props.creator}</h6>
                        <p className='ml-1  text-mainGray'>{props.description}</p>
                        <img className=' absolute max-w-[55px] sm:max-w-full rounded-full border-[3px] border-main left-[-50px] top-0 sm:top-[-5px]'
                            src={`
                                
                                ${props.creator === "Emma Mitchell" && '/images/courses/teachers/a-1.webp'
                                ||
                                props.creator === "Ava Johnson" && '/images/courses/teachers/a-3.webp'
                                ||
                                props.creator === "Benny Martin" && '/images/courses/teachers/a-4.webp'
                                ||
                                props.creator === "Miller Noah" && '/images/courses/teachers/a-6.webp'
                                ||
                                props.creator === "Miller Noah" && '/images/courses/teachers/a-6.webp'
                                || '/images/user.webp'
                                }
                                
                                `}

                            alt="info" />
                    </div>
                </div>
                {/* right side */}
                <div className=" text-center ml-2 flex md:flex-col lg:flex-row justify-between md:justify-center items-center lg:block">
                    <div className=' relative size-40 mb-2 before:invisible md:before:visible before:absolute before:w-[1px] before:h-[175px] before:left-0 before:top-[30%] before:bg-[#b7bdbb]'>
                        <div>
                            <img src="images/courses/shape/vector-group.webp" alt="shape" />
                        </div>
                        <span className=' absolute top-[38%] left-[25%] text-4xl text-white'>${props.price}</span>
                    </div>
                    <Button styleBtn='py-2 px-4 mt-1 text-md' text="Buy Now" href={`/course-detail/${props.shortName}`} />

                </div>

                <img className=' absolute bottom-0 right-0 rounded-br-[10px]' src="/images/courses/shape/vector-1.webp" alt="shape" />

            </div>
            <div></div>
        </div>
    )
}
