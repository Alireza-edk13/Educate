import React from 'react'
import { Link } from 'react-router-dom'
import Timer from '../Timer/Timer'
import Button from '../Button/Button';

export default function Discount() {
    return (
        <>
            <div className='bg-DiscountBg1 bg-no-repeat bg-right lg:bg-center  h-[600px]'>
                <div className="container">
                    <div className="grid  lg:grid-cols-2">
                        <div className=' relative mt-14 xl:my-auto mx-0 lg:bg-none  bg-OurTeachersBg1 bg-contain bg-no-repeat'>
                            <img src="/images/discount/mic-speaker.webp" alt="icon" className='mini-speaker top-[-110px] right-[140px]' />
                            <h1 className='text-4xl xl:text-5xl tracking-[-1.22px] leading-[140%] md:leading-[120%] xl:leading-[120%] mb-4'>Get a
                                <span className='relative z-20 font-CourgetteR'>30% Discount!<img className='line_vector' src="images/line-vector-2.webp" alt="vector" /></span></h1>
                            <h4 className=" font-InterM my-4 text-2xl">Create Your Free Account Today! </h4>
                            <p className=' text-mainGray mb-10 max-w-[32rem]'>Lorem ipsum dolor sit amet consectetur. Non convallis sed id
                                aliquam tempus. Volutpat tortor tincidunt egestas sit risus donec.</p>
                            <Button styleBtn='mb-6 hidden lg:block' text='View All' href={'/course-list'} />

                        </div>
                        <Timer />
                    </div>
                </div>
            </div>
        </>
    )
}
