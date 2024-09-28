import React from 'react'

export default function PageTitleBanner({title}) {
    return (
        <>
            <section className=' bg-HeaderBg bg-center relative overflow-hidden'>
                <div className=" container">
                    <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-36 xl:pt-[120px] pb-12 px-0">
                        <div className=' flex-shrink-0 relative'>
                            <h4 className=' text-4xl md:text-6xl'>{title}</h4>
                            <img src="/images/ourTeachers/3dtag.webp" alt="3dtag" className='tag left-[30%] -top-28 w-20 right-6 hidden md:block ' />
                        </div>
                        <div><img src="/images/page_title.webp" alt="shape" /></div>
                    </div>
                </div>
            </section>
        </>
    )
}
