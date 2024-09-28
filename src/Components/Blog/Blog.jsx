import React from 'react'
import TopSection from '../TopSection/TopSection'
import BlogCart from '../BlogCart/BlogCart'
import { GoMail } from "react-icons/go";
import Button from '../Button/Button';
export default function Blog() {
    return (
        <>
            <div className="container mb-12">
                <TopSection title=' Blogs' descMark='Authors!' desc='Latest News By Talented' href='/blog-list' maxWidthNum='34rem' />
                <div className="grid grid-cols-12 mt-6 gap-x-6">
                    <div className="col-span-12 xl:col-span-8 space-y-6">
                        <BlogCart img ="bl-1.webp" />
                        <BlogCart img ="bl-2.webp" />
                        <Button styleBtn='w-full text-center mt-16 lg:hidden' text='View All' href={'/blog-list'} />
                    </div>
                    <div className="col-span-12 mt-12 xl:mt-0 xl:col-span-4 text-mainWhite">
                        <div className=" relative pt-[121px] px-4 pb-[310px] mainBoxShadow overflow-hidden text-center bg-BlogBg bg-no-repeat bg-cover bg-center rounded-2xl h-full">
                            <div className=" size-24 border-[5px] border-blogRgba mainBoxShadow rounded-full my-0 mx-auto mb-6 flex-center">
                                <GoMail fontSize={35} />
                            </div>
                            <h2 className=' text-3xl sm:text-5xl mb-4'>NEWSLETTER</h2>
                            <p className=" text-sm sm:text-base font-InterR mb-8">Subscribe to our newsletter for latest news!</p>
                            <form className=' relative flex items-center w-auto' action="">
                                <input type="email" placeholder='Your Email' className=' rounded-md outline-none w-full bg-transparent border border-mainWhite text-mainWhite py-2 px-3 placeholder:text-mainWhite' />
                                <button type="button" className=' rounded-md -ml-4 bg-mainWhite border-[2px] border-mainWhite text-black py-2 px-4 text-md'>Subscribe</button>

                            </form>
                            <div>
                                <img src="/images/ourTeachers/3dtag.webp" alt="3dtag" className='tag top-4 left-auto w-20 right-6' />
                                <img src="/images/blog/circle-lines.webp" className='circle-shape' alt="circle-shape" />
                                <img src="/images/ourTeachers/dots-1.webp" alt="dots" className='dots opacity-[.4] right-0 hidden bottom-[5%]  sm:block' />
                                <img className=' absolute size-16 top-[65%] left-[20%] sm:size-auto' src="/images/blog/vector-6.webp" alt="shape" />
                                <img src="/images/blog/vector-5.webp" className=' opacity-[0.5] absolute  top-12 left-8' alt="shape" />

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
