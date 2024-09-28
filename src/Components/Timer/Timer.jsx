import React, { useState, useEffect } from 'react'
import Button from '../Button/Button'

export default function Timer() {
    const [day, setDay] = useState(null)
    const [hour, setHour] = useState(null)
    const [min, setMin] = useState(null)
    const [sec, setSec] = useState(null)


    const updateTime = () => {
        const countdown = new Date("September 22, 2024 11:59:59").getTime()
        const now = new Date().getTime()
        const distance = countdown - now

        const day = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hour = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const min = Math.floor((distance / 1000 / 60) % 60);
        const sec = Math.floor((distance / 1000) % 60);
        if (distance > 0) {
            setDay(day)
            setHour(hour)
            setMin(min)
            setSec(sec)
        } else {
            clearInterval(updateTime)
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            updateTime()
        }, 1000);

        return () => clearInterval(timer);
    });

    return (
        <>
            <div className='hidden relative lg:grid content-center h-[600px]'>
                <div className=" absolute bg-DiscountBg2 bg-no-repeat top-0 right-5 h-full w-[512px]">
                    <ul className='flex flex-col text-[24px] text-mainWhite justify-end gap-16 pt-7 child:text-right'>
                        <li className=' opacity-[0.3] pr-[28%]'>{10 > sec + 3 ? '0' + (sec + 3) : sec + 3}</li>
                        <li className=' opacity-[0.6] pr-[14%]'>{10 > sec + 2 ? '0' + (sec + 2) : sec + 2}</li>
                        <li className=' opacity-[0.8] pr-[8%]'>{10 > sec + 1 ? '0' + (sec + 1) : sec + 1}</li>
                    </ul>
                    <ul className='flex flex-col text-[24px] text-mainWhite justify-end gap-16 pt-[144px] child:text-right'>
                        <li className=' opacity-[0.8] pr-[8%]'>{10 > sec - 1 ? '0' + (sec - 1) : sec - 1}</li>
                        <li className=' opacity-[0.6] pr-[14%]'>{10 > sec - 2 ? '0' + (sec - 2) : sec - 2}</li>
                        <li className=' opacity-[0.3] pr-[28%]'>{10 > sec - 3 ? '0' + (sec - 3) : sec - 3}</li>
                    </ul>
                </div>
                <div className=" bg-OurTeachersBg1 bg-no-repeat  absolute z-10 top-[20%] left-0 size-full"></div>
                <ul className='flex absolute child:w-24 right-0 top-[17rem] justify-end  z-20 gap-[5.5rem] child:gap-4 child:flex child:items-center items-center text-xl'>
                    <li>
                        <h2 className=' text-5xl'>{day}</h2>
                        <span className=' text-center'>Days</span>
                    </li>
                    <li>
                        <h2 className=' text-5xl'>{10 > hour ? '0' + hour : hour}</h2>
                        <span className=' text-center'>Hrs</span>
                    </li>
                    <li>
                        <h2 className=' text-5xl'>{10 > min ? '0' + min : min}</h2>
                        <span className=' text-center'>Min</span>
                    </li>
                    <li>
                        <h2 className='text-mainWhite text-5xl w-24'>{10 > sec ? '0' + sec : sec}</h2>
                        <span className=' text-center w-4'>Sec</span>
                    </li>
                </ul>
            </div>
            <div className=" relative lg:hidden mt-6">
                <ul className=' flex child:flex-col sm:child:flex-row gap-8 flex-wrap child:gap-2 child:text-sm child:flex child:items-center'>
                    <li>
                        <h2 className=' text-4xl lg:text-5xl'>{day}</h2>
                        <span className=' text-center'>Days</span>
                    </li>
                    <li>
                        <h2 className=' text-4xl lg:text-5xl'>{10 > hour ? '0' + hour : hour}</h2>
                        <span className=' text-center'>Hrs</span>
                    </li>
                    <li>
                        <h2 className=' text-4xl lg:text-5xl'>{10 > min ? '0' + min : min}</h2>
                        <span className=' text-center'>Min</span>
                    </li>
                    <li className=' hidden '>
                        <h2 className='lg:text-mainWhite text-4xl lg:text-5xl'>{10 > sec ? '0' + sec : sec}</h2>
                        <span className=' text-center w-4'>Sec</span>
                    </li>
                </ul>
            </div>
            <Button styleBtn='w-full text-center mt-16 lg:hidden' text='View All' href={'/course-list'} />

        </>
    )
}
