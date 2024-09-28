import React from 'react'
import Slider from "react-slick";

import CommentsCart from '../CommentsCart/CommentsCart';
export default function Comments() {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => <ul style={{ marginBottom: '-1rem' }}>{dots}</ul>,
        customPaging: i => (
            <button className=' before:hidden !bg-main !p-0 !rounded !w-[15px] !h-[6px]' type="button" role="tab" id="slick-slide-control10" aria-controls="slick-slide10" aria-label="1 of 2">1</button>
        ),
    };

    return (
        <>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 mb-36 mt-4">
                    <div>
                        <div className=' pr-0 mt-28'>
                            <div className='relative max-w-[34rem]'>
                                <img src="/images/comments/quote3d.webp" alt="shape" className=' absolute right-0 top-[-30%] size-20 sm:size-auto' />
                                <h6 className='text-main font-InterSB mb-2'>––––Testimonials</h6>
                                <h2 className={` text-3xl xl:text-5xl leading-[125%] xl:leading-[125%] tracking-[-.47px]`} >Student’s Stories! Some Awesome Comments By Our <span className=' font-CourgetteR'>Students!</span></h2>
                                <p className=' tracking-wide text-mainGray my-8'>Lorem ipsum dolor sit amet consectetur. Non convallis sed id aliquam tempus. Volutpat tortor tincidunt egestas sit risus donec.</p>
                                <img src="/images/ourTeachers/dots-1.webp" alt="dots" className='dots bottom-[-30%]  ring-0 hidden  sm:block' />
                                <img className=' absolute bottom-[-30%] right-24 size-16 sm:size-auto' src="/images/comments/vector-2.webp" alt="shape" />

                            </div>
                        </div>
                    </div>
                    <div className=' relative'>
                        <img className=' absolute top-[10%] right-0  md:right-[60%]' src="/images/comments/bg-elements-1.webp" alt="shape" />
                        <div className="slider-container">
                            <Slider {...settings}>
                                <CommentsCart />
                                <CommentsCart />
                                <CommentsCart />
                                <CommentsCart />
                                <CommentsCart />
                            </Slider>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
