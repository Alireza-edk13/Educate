import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import { FaPlay } from "react-icons/fa";
import FeatureCart from '../FeatureCart/FeatureCart';
import Button from '../Button/Button';

export default function Landing() {

    const [showVideoModal,setShowVideoModal] = useState(false)


    return (
        <>
            <div className=' bg-landing bg-no-repeat bg-cover bg-center lg:h-[74rem]'>
                <div className=' container'>
                    <div className=" grid grid-cols-1 lg:grid-cols-2 pt-36">
                        {/* landing left side */}
                        <div className='mt-6 md:m-auto'>
                            <h1 className='text-4xl xl:text-6xl tracking-[-1.22px] leading-[140%] md:leading-[120%] xl:leading-[120%] mb-4'>The Future of
                                <span className='relative z-20'> Learning <img className='line_vector' src="images/line-vector-2.webp" alt="vector" /></span>
                                is Online</h1>
                            <p className=' text-mainGray mb-10 max-w-[32rem]'>Lorem ipsum dolor sit amet consectetur. Non convallis sed id
                                aliquam tempus. Volutpat tortor tincidunt egestas sit risus donec.</p>
                            <div className='flex flex-col vsm:flex-row justify-start vsm:items-center gap-6'>
                                <Button styleBtn='bg-white text-black' text='Enroll Now' href='/' />
                                <Button styleBtn='bg-transparent border-2 border-solid text-black border-main' text='Find The Course' href='/' />
                            </div>
                        </div>
                        {/* landing right side */}
                        <div className=' relative'>
                            <div className=' mt-20 md:mt-auto'>
                                <img src="/images/main-img.webp" alt="main" />
                            </div>
                            {/* video */}
                            <div onClick={() => setShowVideoModal(true)} className='play-btn cursor-pointer size-[50px] sm:size-[64px]'><FaPlay color='#0aa6d7' fontSize={'20px'} /></div>
                            <div className=' absolute top-[72%] right-[50%] hidden xl:block'>
                                <div className=' relative py-2 pl-8 pr-6 bg-mainWhite text-left rounded-2xl'>
                                    <h6 className="mb-1">2K Courses</h6>
                                    <p className=' text-mainGray'>Based on Latest Knowledge</p>
                                    <img className=' absolute size-20 rounded-full border-[5px] border-main left-[-50px] top-[-10px]' src="/images/bu.webp" alt="info" />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className=' grid grid-cols-1 xl:grid-cols-2 mt-44'>
                        <div className=' grid grid-cols-1 md:grid-cols-3 gap-0 sm:gap-8'>
                            <FeatureCart marginTopNum='0' icon='Support.webp' title='24/7 Support' desc='Lorem ipsum dolor sit amet consectetu' />
                            <FeatureCart marginTopNum='mt-16' icon='Check-mark.webp' title='Best Teachers' desc='Lorem ipsum dolor sit amet consectetu' />
                            <FeatureCart marginTopNum='mt-32' icon='Quality.webp' title='Lifetime Access' desc='Lorem ipsum dolor sit amet consectetu' />
                        </div>
                    </div>
                </div>
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
                                    src='/video.mp4'
                                    type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
