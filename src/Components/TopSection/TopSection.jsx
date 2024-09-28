import React from 'react'
import Button from '../Button/Button';


export default function TopSection({ title, descMark, desc, href, maxWidthNum }) {
    return (
        <>
            <div className='flex justify-between items-center xl:items-end'>
                <div>
                    <h6 className='text-main font-InterSB mb-2'>–––– {title} </h6>
                    <h2 className={` text-3xl  xl:text-5xl leading-[125%] xl:leading-[125%] tracking-[-.47px] mb-6`} style={{ maxWidth: maxWidthNum }}>{desc} <span className=' font-CourgetteR'>{descMark}</span></h2>
                </div>
                <Button styleBtn='hidden lg:block xl:mb-6' text='View All' href={href} />
                
            </div>
        </>
    )
}
