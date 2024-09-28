import React from 'react'
import TopSectionPanel from '../../../Components/AdminPanel/TopSectionPanel/TopSectionPanel'
import Pagination from '../../../Components/Pagination/Pagination'
import { IoIosSearch } from "react-icons/io";
import Error404 from '../../../Components/AdminPanel/Error404/Error404';
export default function BlogPanel() {
    return (
        <>
            {/* <div className="mt-28  px-4 sm:px-8 space-y-10 mb-9" >
                <TopSectionPanel title='Blog List' spanTitle='Blogs' />
                <div className="mt-8 xl:py-4 xl:px-8">
                    <p className=' mb-4 text-red-500'>Features are Not Availble on This Page !</p>
                    <div className="p-4 bg-mainWhite rounded-md overflow-auto">
                        <div className="flex justify-between flex-wrap gap-6">
                            <div>
                                <form className=' relative'>
                                    <button className=' absolute left-3 top-2 border-none'>
                                        <IoIosSearch fontSize={'1.6rem'} className=' text-main' />
                                    </button>
                                    <input type="text" placeholder='Search Here...' className=' text-sm outline-none bg-transparent border py-2 text-gray-500 placeholder:text-gray-500 rounded-md px-10' />
                                </form>
                            </div>
                            <div>
                                <div>
                                    <button className="flex items-center bg-green-500 p-2 text-white rounded text-sm hover:bg-green-600">
                                        + Add Blog
                                    </button>
                                </div>
                            </div>
                        </div>
                        <table className="w-full mt-8 text-gray-500 overflow-auto">
                            <thead className="border-b child:whitespace-nowrap">
                                <tr className='child:text-left child:px-4 text-gray-600'>
                                    <th>Index</th>
                                    <th>Title</th>
                                    <th>Link</th>
                                    <th>Author</th>

                                </tr>
                            </thead>
                            <tbody className='divide-y divide-gray-200 '>
                                <tr className='child:p-4 child:whitespace-nowrap'>
                                    <td className=' text-center'>1</td>
                                    <td>How to center a div</td>
                                    <td>center-div</td>
                                    <td>Edward.lre</td>
                                    <td><Button href='' styleBtn=' p-2 text-sm' text='Edit' /></td>
                                    <td><Button href='' styleBtn=' p-2 text-sm bg-red-600' text='Delete' /></td>
                                </tr>
                                <tr className='child:p-4 child:whitespace-nowrap'>
                                    <td className=' text-center'>2</td>
                                    <td>How to center a div</td>
                                    <td>center-div</td>
                                    <td>Edward.lre</td>
                                    <td><Button href='' styleBtn=' p-2 text-sm' text='Edit' /></td>
                                    <td><Button href='' styleBtn=' p-2 text-sm bg-red-600' text='Delete' /></td>
                                </tr>
                                <tr className='child:p-4 child:whitespace-nowrap'>
                                    <td className=' text-center'>3</td>
                                    <td>How to center a div</td>
                                    <td>center-div</td>
                                    <td>Edward.lre</td>
                                    <td><Button href='' styleBtn=' p-2 text-sm' text='Edit' /></td>
                                    <td><Button href='' styleBtn=' p-2 text-sm bg-red-600' text='Delete' /></td>
                                </tr>
                                <tr className='child:p-4 child:whitespace-nowrap'>
                                    <td className=' text-center'>4</td>
                                    <td>How to center a div</td>
                                    <td>center-div</td>
                                    <td>Edward.lre</td>
                                    <td><Button href='' styleBtn=' p-2 text-sm' text='Edit' /></td>
                                    <td><Button href='' styleBtn=' p-2 text-sm bg-red-600' text='Delete' /></td>
                                </tr>



                            </tbody>
                        </table>

                    </div>
                    
                </div>
                <Pagination />
            </div> */}

            <Error404 />
        </>
    )
}
