import React from 'react'
import AboutCart from '../AboutCart/AboutCart'
import Button from '../Button/Button';

export default function About() {
    return (
        <>
            <div className=' container'>
                <div className=" grid grid-cols-1 xl:grid-cols-2 my-20 ">
                    <div className='order-2 xl:order-none'>
                        <h6 className='text-main font-InterSB mb-2'>–––– About Us</h6>
                        <h2 className=' text-4xl xl:text-5xl leading-[125%] tracking-[-.47px] mb-4'>Cultivating a Digital Learning <span className=' font-CourgetteR'>Ecosystem.</span></h2>
                        <p className=' tracking-wide text-mainGray mb-8'>Lorem ipsum dolor sit amet consectetur. Non convallis sed id aliquam tempus. Volutpat
                            tortor tincidunt egestas sit risus donec.</p>
                        <div className=' flex flex-col items-center'>
                            <AboutCart title = 'Latest Courses' icon ='Clock.webp'/>
                            <AboutCart title = 'Live Classes' icon ='WiFi.webp'/>
                        </div>
                        <div className='text-right  w-[95%]'>
                            <Button styleBtn='' text='Learn More' href='/contact' />
                            
                        </div>
                    </div>
                    <div>
                        <img src="images/about/about.webp" alt="about" />
                    </div>

                </div>
            </div>
        </>
    )
}
