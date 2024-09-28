import React, { useState, useEffect } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import OrginalButton from '../../../Components/OrginalButton/OrginalButton';
import SadError from '../../../Components/SadError/SadError';
import { useGetUserOrders } from '../../../hooks/useCourse';


export default function Orders() {

  const { data: orders, isSuccess, isLoading } = useGetUserOrders()


  if (isLoading) {
    return <h3 className=" text-xl sm:text-2xl h-screen">Loading......</h3>
  }
  return (
    <>

      {
        orders?.length ?
          <div className="mt-28 px-4 sm:px-8 space-y-10 mb-9">
            <div className="mt-8 xl:py-4 xl:px-8">
              <div className="flex justify-between mb-4">
                <h2 className="text-3xl">Order</h2>
                <div className="flex items-center space-x-1 text-xs">
                  <Link to={"/my-account"} className="router-link-active font-bold text-main">Home</Link>
                  <IoIosArrowForward />
                  <span>Order</span>
                </div>

              </div>
              <div className="p-4 bg-mainWhite rounded-md overflow-auto">
                <table className="w-full text-gray-500 overflow-auto">
                  <thead className="border-b child:whitespace-nowrap">
                    <tr className='child:text-left child:p-4 text-gray-600'>
                      <th>Index</th>
                      <th>Date</th>
                      <th>Course</th>
                      <th>Price</th>
                      <th>Status</th>
                      <th>More Info</th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200 child:whitespace-nowrap'>
                    {
                      orders?.map((order, index) => (
                        <tr key={order._id} className='child:p-4'>
                          <td className={`text-center`}>{index + 1}</td>
                          <td>{order.createdAt.slice(0, 10)}</td>
                          <td>{order.course.name}</td>
                          <td>{order.price ? "$" + order.price.toLocaleString() : 'Free'}</td>
                          <td className="py-4 before:text-sm text-gray-500">
                            <span className=
                              {`px-2 py-1 rounded text-xs text-white ${order.status === "start" ? 'bg-yellow-500' : ' bg-green-500 '}`}>
                              {
                                order.status === "start" ? "Presell" : "Ongoing"
                              }
                            </span>
                          </td>
                          <td >
                            <div className=" inline-block">
                              <OrginalButton styleBtn='p-2' textBtn='More Info' />
                            </div>
                          </td>

                        </tr>
                      ))
                    }

                  </tbody>
                </table>
              </div>
            </div>
          </div>

          :
          <SadError text='You dont have any Order!' />
      }
    </>
  )
}
