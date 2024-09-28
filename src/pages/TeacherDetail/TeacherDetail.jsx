import React from 'react'
import Header from '../../Components/Header/Header'
import PageTitleBanner from '../../Components/PageTitleBanner/PageTitleBanner';
import FooterSection from '../../Components/FooterSection/FooterSection'
import { PiStudent } from "react-icons/pi";
import { FaStar, FaChalkboardTeacher } from "react-icons/fa";
import Button from '../../Components/Button/Button';

export default function TeacherDetail() {
    return (
        <>
            <Header />
            <PageTitleBanner title='Teacher Detail' />

            <div className="container my-16">
                <div className="grid grid-cols-12 gap-4">
                    <div className=' col-span-12 md:col-span-5 md:px-4'>
                        <img src="/images/ourTeachers/Card-3.webp" alt="teacher" className=' rounded-xl xl:size-full ' />
                    </div>
                    <div className=' col-span-12 md:col-span-7 space-y-6 sm:space-y-4'>
                        <h2 className='text-3xl  xl:text-5xl leading-[125%] xl:leading-[125%] tracking-[-.47px]'>
                            Angel Whites
                        </h2>
                        <span className=' flex items-center gap-2 text-main text-xl'><PiStudent className=' text-3xl' />Economics</span>
                        <p className=" text-mainGray">
                            Lorem ipsum dolor sit amet consectetur. Egestas sem purus nulla libero tortor nunc mattis vestibulum enim. Faucibus neque sagittis amet lectus nec magna sollicitudin cras ante. Dignissim urna urna eget ipsum lorem mattis quis dictum. At nunc turpis ullamcorper ac massa eu. Id ornare fames nisl maecenas nibh at ipsum.
                        </p>
                        <p className=" text-mainGray">
                            Lorem ipsum dolor sit amet consectetur. Egestas sem purus nulla libero tortor nunc mattis vestibulum enim. Faucibus neque sagittis amet lectus nec magna sollicitudin cras ante. Dignissim urna urna eget ipsum lorem mattis quis dictum. At nunc turpis ullamcorper ac massa eu. Id ornare fames nisl maecenas nibh at ipsum.
                        </p>
                        <div className=' py-4 space-y-4 border-b border-b-lightGray'>
                            <div className=' flex items-center text-lg justify-between'>
                                <span>Engagements Score</span>
                                <span>90%</span>
                            </div>
                            <div className=" overflow-hidden bg-lightGray h-2 w-full rounded-md">
                                <div className=" w-[80%] h-full bg-main rounded-md"></div>
                            </div>
                            <p className=" text-mainGray">Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div className='pb-4 border-b border-b-lightGray'>
                            <div className=' flex justify-between items-center'>
                                <h5 className=' flex items-center py-2 gap-2 text-md sm:text-xl'>
                                    <FaChalkboardTeacher className=' text-main' />
                                    Lectures
                                </h5>
                                <span className=' text-mainGray text-sm sm:text-base'>450+ Videos</span>
                            </div>
                        </div>
                        <div className='pb-4 border-b border-b-lightGray'>
                            <div className=' flex justify-between items-center text-md sm:text-xl'>
                                <h5 className=' flex items-center py-2 gap-2 '>
                                    <FaStar className=' text-main' />
                                    Awards Won
                                </h5>
                                <span className=' text-mainGray text-sm sm:text-base'>45+ Teaching Awards</span>
                            </div>
                        </div>
                        {/* contact */}
                        <ul className="flex items-center gap-4 child:p-2 child:rounded-xl child:bg-main">
                            <li><img src="/images/footer/Twitter.webp" alt="social" /></li>
                            <li><img src="/images/footer/Facebook.webp" alt="social" /></li>
                            <li><img src="/images/footer/Linkedin.webp" alt="social" /></li>
                            <li><img src="/images/footer/Instagram.webp" alt="social" /></li>
                        </ul>
                        <div className=' text-right'>
                            <Button href='/contact' styleBtn='' text='Get in Touch' />
                        </div>
                    </div>

                </div>
            </div>
            <FooterSection />

        </>
    )
}
