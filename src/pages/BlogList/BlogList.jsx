import React from 'react'
import Header from '../../Components/Header/Header'
import PageTitleBanner from '../../Components/PageTitleBanner/PageTitleBanner';
import FooterSection from '../../Components/FooterSection/FooterSection'
import BlogCart from '../../Components/BlogCart/BlogCart';
import Pagination from '../../Components/Pagination/Pagination';
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
import SideBlogCart from '../../Components/SideBlogCart/SideBlogCart';

export default function BlogList() {
    return (
        <>
            <Header />
            <PageTitleBanner title='Blog List' />
            <div className="container my-16">
                <div className="grid grid-cols-12">
                    <div className=" col-span-12 xl:col-span-4 pr-0 xl:pr-8 space-y-8">
                        {/* seacrh input */}
                        <form className=' relative'>
                            <button className=' absolute left-3 top-2 border-none'>
                                <IoIosSearch fontSize={'1.6rem'} className=' text-main' />
                            </button>
                            <input type="text" placeholder='Search Here...' className=' outline-none bg-transparent border w-full border-lightGray py-2 px-3 text-mainGray placeholder:text-mainGray rounded-md pl-10' />
                        </form>
                        {/* tags */}
                        <div>
                            <h5 className=' text-xl mb-5'>Tags</h5>
                            <div className=' flex flex-wrap gap-4 text-mainGray'>
                                <span>#education</span><span>#onlineclass</span><span>#learning</span><span>#latest</span><span>#teachers</span><span>#literature</span><span>#educator</span><span>#edtech</span><span>#studyabroad</span>
                            </div>
                        </div>
                        {/* Categories */}
                        <div>
                            <h5 className=' text-xl mb-5'>Categories</h5>
                            <div className=' flex flex-wrap gap-4 text-mainWhite child:bg-main child:py-1 child:px-2 child:rounded'>
                                <Link>Online Learning</Link>
                                <Link>Student Life</Link>
                                <Link>Educational Policy</Link>
                                <Link>Learning Methods</Link>
                                <Link>Online Learning</Link>
                                <Link>Career Guidance</Link>
                            </div>
                        </div>

                        {/* Side Blog */}
                        <div>
                            <h5 className=' text-xl mb-5'>Popular Blogs</h5>
                            <div className=' space-y-5'>
                                <SideBlogCart />
                                <SideBlogCart />
                                <SideBlogCart />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 mt-8 xl:mt-0 xl:col-span-8 space-y-6">
                        <BlogCart img="bl-2.webp" />
                        <BlogCart img="bl-1.webp" />
                        <Pagination />
                    </div>
                </div>
            </div>
            <FooterSection />

        </>
    )
}
