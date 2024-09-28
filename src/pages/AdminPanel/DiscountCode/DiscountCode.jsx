import React from 'react'
import TopSectionPanel from '../../../Components/AdminPanel/TopSectionPanel/TopSectionPanel'
import { IoIosSearch } from "react-icons/io";
import Button from '../../../Components/Button/Button';
export default function DiscountCode() {
    return (
        <>
            <div className="mt-28 px-4 sm:px-8 space-y-10 mb-9" >
                <TopSectionPanel title='Discount Code' spanTitle='Discount Code' />
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
                                        + Add Discount Code
                                    </button>
                                </div>
                            </div>
                        </div>
                        <table className="w-full mt-8 text-gray-500 overflow-auto">
                            <thead className="border-b child:whitespace-nowrap">
                                <tr className='child:text-left child:px-4 text-gray-600'>
                                    <th>Index</th>
                                    <th>Code</th>
                                    <th>Persent</th>
                                    <th>Max Use</th>
                                    <th>Usage</th>
                                    <th>Creator</th>

                                </tr>
                            </thead>
                            <tbody className='divide-y divide-gray-200 '>
                                <tr className='child:p-4 child:whitespace-nowrap'>
                                    <td className=' text-center'>1</td>
                                    <td>opcd50</td>
                                    <td>50%</td>
                                    <td>2</td>
                                    <td>1</td>
                                    <td>Edward</td>
                                    <td><Button href='' styleBtn=' p-2 text-sm bg-red-600' text='Delete' /></td>
                                </tr>
                                <tr className='child:p-4 child:whitespace-nowrap'>
                                    <td className=' text-center'>2</td>
                                    <td>opcdbxb70</td>
                                    <td>70%</td>
                                    <td>2</td>
                                    <td>1</td>
                                    <td>Edward</td>
                                    <td><Button href='' styleBtn=' p-2 text-sm bg-red-600' text='Delete' /></td>
                                </tr>

                            </tbody>
                        </table>

                    </div>

                </div>
            </div>
        </>
    )
}
