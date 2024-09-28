import React, { useState } from 'react'
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaLock, FaLockOpen } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function Accordion({ sessions, title, courseName, isUserRegisteredToThisCourse }) {

    const [showInfo, setShowInfo] = useState(false)
    const [session, setSession] = useState()
    const [showVideoModal, setShowVideoModal] = useState(false)

    const toggleShowInfoHandler = () => {
        setShowInfo(prevShowInfo => !prevShowInfo)
    }

    const getVideo = async (sessionId) => {

        const res = await fetch(`https://educate-api.vercel.app/v1/courses/${courseName}/${sessionId}`, {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token
                    }`,
            },
        })
        if (res.ok) {
            const data = await res.json()
            setSession(data.session)
            console.log(data.session);
            setShowVideoModal(true)
        }

    }

    return (
        <>
            <div>
                <h2 onClick={toggleShowInfoHandler}>
                    <button type="button" className={`${showInfo ? 'rounded-t-lg text-mainWhite bg-main' : 'rounded-lg bg-mainWhite text-mainBlack'} transition-all duration-[0.2s] ease-linear  flex items-center justify-between w-full p-5 border border-gray-200 gap-3`}>
                        <span>{title}</span>
                        <IoIosArrowForward className={`${showInfo && 'rotate-90'} text-lg`} />
                    </button>
                </h2>
                <div className={`${showInfo ? 'block' : 'hidden'}`} >
                    <div className="p-5 text-sm sm:text-base  space-y-4 border border-t-0 rounded-b-lg bg-mainWhite border-gray-200">


                        {
                            sessions?.length ?
                                sessions.map((session) => (

                                    session.free === 1 || isUserRegisteredToThisCourse ?
                                        <div onClick={() => getVideo(session._id)} key={session._id} className="flex items-center justify-between border border-lightGray rounded-lg bg-mainWhite py-3 px-5 group cursor-pointer">
                                            <div className='group-hover:text-main transition-all duration-[0.2s] ease-linear flex items-center gap-2'>
                                                <FaRegCirclePlay className='text-main' />
                                                {session.title}
                                            </div>
                                            <div className='group-hover:text-main transition-all duration-[0.2s] ease-linear flex items-center gap-2'>
                                                <span className='text-sm'>{session.time}</span>
                                                <FaLockOpen className='text-main' />
                                            </div>
                                        </div>
                                        :
                                        <div key={session._id} className="flex items-center justify-between border border-lightGray rounded-lg bg-mainWhite py-3 px-5 group cursor-pointer">
                                            <div className='group-hover:text-main transition-all duration-[0.2s] ease-linear flex items-center gap-2'>
                                                <FaRegCirclePlay className='text-main' />
                                                {session.title}
                                            </div>
                                            <div className='group-hover:text-main transition-all duration-[0.2s] ease-linear flex items-center gap-2'>
                                                <span className='text-sm'>{session.time}</span>
                                                <FaLock className='text-main' />
                                            </div>
                                        </div>
                                ))
                                :
                                <p className="text-center text-main">There is no session upload yet !</p>
                        }
                    </div>

                    {
                        showVideoModal &&
                        <div className='overflow-x-hidden overflow-y-auto fixed inset-0 z-50 justify-center items-center sm:h-full flex'>
                            <div onClick={() => setShowVideoModal(false)} className=" fixed inset-0 bg-mainBlack opacity-[0.7]" >
                            </div>
                            <div className="relative max-w-5xl px-4 h-auto">
                                <div className="w-full max-h-full rounded-xl shadow-2xl aspect-video bg-black overflow-hidden">
                                    <video width="1920" height="1080" controls>
                                        <source
                                            src={`https://educate-api.vercel.app/courses/covers/${session.video}`}
                                            type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                    }


                </div>
            </div>
        </>
    )
}
