import React from 'react'

export default function FeatureCart({icon,title,desc,marginTopNum}) {
    return (
        <>
            <div className={`relative bg-white text-center rounded-2xl h-max featureCart-MarginT ${marginTopNum}`}>
                <div className=' absolute left-12 -top-12 z-20 bg-white w-fit my-0 mx-auto p-6 border-[5px] rounded-full border-mainRgba feature-box-shadow'>
                    <img src={`/images/feature/${icon}`} alt="icon" />
                </div>
                <div className=' relative pt-[74px] pb-16 px-4 mainBoxShadowrounded-2xl '>
                    <h5 className=' text-xl mb-3 leading-[130%]'>{title}</h5>
                    <p className=' text-mainGray tracking-[0.32px]'>{desc}</p>
                    <img className='rounded-b-2xl h-16 rounded-l-2xl absolute bottom-0 right-0' src="/images/feature/feture-bg-shape.webp" alt="shape" />
                </div>
            </div>
        </>
    )
}
