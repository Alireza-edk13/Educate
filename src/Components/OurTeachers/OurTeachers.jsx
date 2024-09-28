import React from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import Button from '../Button/Button';
import OurTeachersCart from '../OurTeachersCart/OurTeachersCart';

export default function OurTeachers() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    appendDots: dots => <ul style={{ marginBottom: '-1rem' }}>{dots}</ul>,
    customPaging: i => (
      <button className=' before:hidden !bg-main !p-0 !rounded !w-[15px] !h-[6px]' type="button" role="tab" id="slick-slide-control10" aria-controls="slick-slide10" aria-label="1 of 2">1</button>
    ),
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 976,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className=" relative my-14 container">
        <img src="/images/ourTeachers/3dtag.webp" alt="3dtag" className='tag' />
        <img src="/images/ourTeachers/dots-1.webp" alt="dots" className='dots hidden  sm:block' />
        <div className="grid grid-cols-12 ">
          <div className=' col-span-12 xl:col-span-5'>
            <div className='  pr-0 mt-28'>
              <div className=' bg-OurTeachersBg1 bg-contain bg-no-repeat'>
                <div className='max-w-[30rem]'>
                  <h6 className='text-main font-InterSB mb-2'>––––Our Teachers</h6>
                  <h2 className={` text-3xl xl:text-5xl leading-[125%] xl:leading-[125%] tracking-[-.47px]`} >Meet the Dedicated Educators Shaping Your <span className=' font-CourgetteR'>Future</span></h2>
                  <p className=' tracking-wide text-mainGray my-8'>Lorem ipsum dolor sit amet consectetur. Non convallis sed id aliquam tempus. Volutpat tortor tincidunt egestas sit risus donec.</p>
                </div>
                <Button styleBtn=' mb-6 hidden sm:block' text='View All' href={'/teacher-list'} />

              </div>
            </div>
          </div>
          <div className=' col-span-12 xl:col-span-7 '>
            <div className=" overflow-hidden py-28">
              <div className="slider-container teacher-slider">
                <Slider {...settings}>
                  <OurTeachersCart img='Card-3.webp' name='Angel Whites' role='Economic' />
                  <OurTeachersCart img='Card-4.webp' name='Sophia Parker' role='Developer' />
                  <OurTeachersCart img='Card-2.webp' name='Mia Thompson' role='Markting' />
                  <OurTeachersCart img='Card-5.webp' name='Angel Whites' role='Designer' />
                  <OurTeachersCart img='Card-4.webp' name='Mia Thompson' role='Economic' />
                  <OurTeachersCart img='Card-3.webp' name='Sophia Parker' role='Developer' />
                  <OurTeachersCart img='Card.webp' name='Angel Whites' role='Designer' />
                  <OurTeachersCart img='Card-5.webp' name='Mia Thompson' role='Economic' />
                  <OurTeachersCart img='Card-2.webp' name='Sophia Parker' role='Developer' />

                </Slider>
              </div>
              <div className="container px-5 sm:px-2">
                <Button styleBtn='w-full text-center mt-16 lg:hidden' text='View All' href={'/teacher-list'} />
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}
