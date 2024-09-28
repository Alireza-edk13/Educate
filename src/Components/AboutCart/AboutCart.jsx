import React from 'react'

export default function AboutCart({title,icon}) {
    return (
        <div className=' relative bg-white text-left rounded-2xl h-max mb-8  w-[90%]'>
            <div className='absolute -left-7 vsm:-left-11 -top-1 z-20 bg-white w-fit my-0 mx-auto p-4 vsm:p-6 border-[5px] rounded-full border-mainRgba feature-box-shadow'>
                <img src={`images/about/${icon}`} alt="icon" />
            </div>
            <div className='relative pr-6 pl-16 py-3 mainBoxShadowrounded-2xl'>
                <h5 className='text-xl mb-3 leading-[130%]'>{title}</h5>
                <p className=' text-mainGray tracking-[0.32px]'>Lorem ipsum dolor sit amet consectetur. Non convallis sed id aliquam tempus. Volutpat tortor tincidunt egestas sit risus.</p>
            </div>
        </div>
    )
}
