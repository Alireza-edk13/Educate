import React, { useState, useEffect } from 'react'
import InfoBox from '../../../Components/AdminPanel/InfoBox/InfoBox';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid,
    Tooltip, ResponsiveContainer, PieChart, Pie, Sector,
} from 'recharts';
import { Link } from 'react-router-dom';
import Button from '../../../Components/Button/Button';
import Footer from '../../../Components/AdminPanel/Footer/Footer';
import { useGetCourses } from '../../../hooks/useCourse';
import { useGetAdminPanelInfo } from '../../../hooks/useUser';
const data = [
    {
        name: 'Jan',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Feb',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Mar',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'April',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'May',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Jun',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'July',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];


export default function Index() {


    const [infos, setInfos] = useState([]);
    const [lastRegisteredUsers, setLastRegisteredUsers] = useState([]);
    const [adminName, setAdminName] = useState("");

    const { data: lastCourses} = useGetCourses()

    const { data: pageInfo , isSuccess , isLoading  } = useGetAdminPanelInfo()

    useEffect(() => {
        if (isSuccess) {
            setInfos(pageInfo.infos);
            setLastRegisteredUsers(pageInfo.lastUsers);
            setAdminName(pageInfo.adminName);
        }
    },[isSuccess,pageInfo])

    if (isLoading) {
        return <div className='mt-28 px-4 sm:px-8 h-screen'>
            <h3 className="text-xl sm:text-2xl">Loading....</h3>
        </div>
    }

    return (
        <>
            <div className=' mt-28 px-4 sm:px-8 space-y-10 mb-9'>
                <h4 className=' text-2xl sm:text-3xl'>Welcome {adminName} !</h4>
                {/* infoBox */}
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {infos?.map((info, index) => (
                        <InfoBox key={index + 1} {...info} />
                    ))}
                    <InfoBox title='Site Viwe' count={1230} />
                </div>
                {/* chart */}
                <div className='grid grid-cols-12 gap-6'>
                    <div className=' col-span-12 lg:col-span-8 bg-mainWhite border shadow pl-2 pt-2 rounded-md'>
                        <h4 className=' mb-4 pl-2 text-lg'>Page Viwe</h4>
                        <div className='  pr-8 pb-8 pt-6'>
                            <ResponsiveContainer width="100%" height={300}>
                                <AreaChart
                                    data={data}
                                    syncId="anyId"
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="uv" stroke="#0aa6d7" fill="#0aa6d7" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-4 ">
                        <div className='grid grid-rows-2 gap-6'>
                            <div className="px-4 py-4 bg-mainWhite border rounded-md shadow">
                                <h3 className="text-xl mb-2">Popular Blog</h3>
                                <div className="flex flex-col">
                                    <div className="align-middle inline-block min-w-full">
                                        <div className="overflow-hidden border-0">
                                            <table className="table-auto min-w-full divide-y divide-gray-200">
                                                <thead>
                                                    <tr><th scope="col" className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Post Title </th><th scope="col" className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Views </th></tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 text-sm text-gray-500">
                                                    <tr>
                                                        <td className="py-1">Create an Admin Panel with Tailwind CSS</td>
                                                        <td className="py-1">1,672</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-1">How To Center a Div</td>
                                                        <td className="py-1">1,423</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-1">Let's Star This Project</td>
                                                        <td className="py-1">926</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-4 bg-mainWhite border rounded-md shadow">
                                <h3 className="text-xl mb-2">Top Contributor</h3>
                                <div className="flex flex-col">
                                    <div className="align-middle inline-block min-w-full">
                                        <div className="overflow-hidden border-0">
                                            <table className="min-w-full divide-y divide-gray-200">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Name </th>
                                                        <th scope="col" className="py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"> Courses </th>
                                                        <th scope="col" className="py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"> Seesion
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 text-sm text-gray-500">
                                                    <tr>
                                                        <td className="py-1 whitespace-nowrap">Alireza Mousavi</td>
                                                        <td className="py-1 text-right whitespace-nowrap text-sm text-gray-500">19</td>
                                                        <td className="py-1 text-right whitespace-nowrap text-sm text-gray-500">247</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-1 whitespace-nowrap">Some Dude</td><td className="py-1 text-right whitespace-nowrap text-sm text-gray-500">22</td><td className="py-1 text-right whitespace-nowrap text-sm text-gray-500">152</td></tr>
                                                    <tr>
                                                        <td className="py-1 whitespace-nowrap">It Could Be You</td>
                                                        <td className="py-1 text-right whitespace-nowrap text-sm text-gray-500">7</td>
                                                        <td className="py-1 text-right whitespace-nowrap text-sm text-gray-500">39</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* userBox and courseBox */}
                <div className="grid grid-cols-12 gap-6">
                    <div className=' col-span-12 overflow-auto xl:col-span-4 bg-mainWhite border rounded-lg shadow'>
                        <div className="flex justify-between items-center px-4 py-2 mb-2 border-b-2 ">
                            <h3 className='tracking-wider'>Recent Users</h3>
                            <Button href='users' styleBtn='px-4 py-2 text-xs' text='View All' />
                        </div>
                        <div className="px-4">
                            <table className='table-fixed min-w-full divide-y divide-gray-200'>
                                <thead>
                                    <tr>
                                        <th scope="col" className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Index</th>
                                        <th scope="col" className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                        <th scope="col" className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Email </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 text-sm text-gray-500">

                                    {
                                        lastRegisteredUsers?.map((user, index) => (
                                            <tr key={user._id}>
                                                <td className="py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                                                <td className="py-4 whitespace-nowrap text-sm text-gray-500">{user.name}</td>
                                                <td className="py-4 whitespace-nowrap text-sm text-gray-500 ">{user.email}</td>

                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className=' col-span-12 overflow-auto xl:col-span-8 bg-mainWhite border rounded-lg shadow'>
                        <div className="flex justify-between items-center px-4 py-2 mb-2 border-b-2 ">
                            <h3 className='tracking-wider'>Recent Courses</h3>
                            <Button href='users' styleBtn='px-4 py-2 text-xs' text='View All' />
                        </div>
                        <div className=' px-4'>
                            <table className="table-fixed min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr className=' child:pr-4'>
                                        <th scope="col" className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Index </th>
                                        <th scope="col" className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Course </th>
                                        <th scope="col" className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Price </th>
                                        <th scope="col" className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Teacher </th>
                                        <th scope="col" className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Status </th>
                                        <th scope="col" className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Action </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 text-sm text-gray-500">

                                    {
                                        lastCourses?.slice(0,5).map((course, index) => (
                                            <tr key={course._id} className=' child:pr-4'>
                                                <td className="py-4 whitespace-nowrap">{index + 1}</td>
                                                <td className="py-4 whitespace-nowrap text-sm text-gray-500">{course.name}</td>
                                                <td className="py-4 whitespace-nowrap text-sm text-gray-500">{course.price === 0 ? "Free" : '$' + course.price.toLocaleString()}</td>
                                                <td className="py-4 whitespace-nowrap text-sm text-gray-500">{course.creator}</td>
                                                <td className="py-4 whitespace-nowrap text-sm text-gray-500">
                                                    <span className=
                                                        {`px-2 py-1 rounded text-xs text-white ${course.status === "start" ? 'bg-green-500' : ' bg-yellow-500'}`}>
                                                        {
                                                            course.status === "start" ? "Ongoing" : "Presell"
                                                        }
                                                    </span>
                                                </td>
                                                <td className="py-4 whitespace-nowrap text-sm text-main">
                                                    <Link to={'admin-panel/course-list'}>View Detail</Link>
                                                </td>
                                            </tr>
                                        ))
                                    }


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Footer />

            </div>

        </>
    )
}
