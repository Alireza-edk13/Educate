import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Brands() {
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1440,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,

              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <>
            <div className='bg-white'>
                <div className='container p-8 sm:p-16'>
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div><img src="/images/brands/barnd-4.webp" alt="brand" /></div>
                            <div><img src="/images/brands/barnd-1.webp" alt="brand" /></div>
                            <div><img src="/images/brands/barnd-3.webp" alt="brand" /></div>
                            <div><img src="/images/brands/barnd-5.webp" alt="brand" /></div>
                            <div><img src="/images/brands/barnd-1.webp" alt="brand" /></div>
                            <div><img src="/images/brands/barnd-6.webp" alt="brand" /></div>
                            <div><img src="/images/brands/barnd-2.webp" alt="brand" /></div>
                            <div><img src="/images/brands/barnd-4.webp" alt="brand" /></div>
                            <div><img src="/images/brands/barnd-5.webp" alt="brand" /></div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}
