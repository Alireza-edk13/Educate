import React, { useState, useEffect } from 'react'
import TopSectionPanel from '../../../Components/AdminPanel/TopSectionPanel/TopSectionPanel'
import Pagination from '../../../Components/Pagination/Pagination'
import { IoIosSearch } from "react-icons/io";
import AddModal from '../../../Components/AdminPanel/AddModal/AddModal';
import OrginalButton from '../../../Components/OrginalButton/OrginalButton';
import DeleteModal from '../../../Components/AdminPanel/DeleteModal/DeleteModal';
import SessionSchema from '../../../Validations/AdminPanel/Session';
import { useFormik } from 'formik';
import { useAddNewSession, useDeleteSession, useGetSessions } from '../../../hooks/useSession';
import { useGetCourses } from '../../../hooks/useCourse';

export default function SessionList() {

    const [isShowAddModal, setIsShowAddModal] = useState(false)
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
    const [sessions, setSessions] = useState([])

    const [sessionId, setSessionId] = useState(null);


    //========= get all courses ======

    const { data: courses } = useGetCourses()

    //========= get all sessions =========

    const { data, isSuccess, isLoading } = useGetSessions()

    useEffect(() => {
        if (isSuccess) {
            setSessions([...data].reverse())
        }
    }, [isSuccess, data])

    // ========= add session =============

    const { mutateAsync: addNewSession, isPending } = useAddNewSession()

    const addForm = useFormik({
        initialValues: { name: "", time: "", courseId: "", status: "0", video: null },

        onSubmit: (values) => {
            addNewSession(values)
            setIsShowAddModal(false)
        },

        validationSchema: SessionSchema,
    });
    // ======== delete session ===========

    const { mutateAsync: deleteSession } = useDeleteSession()



    if (isLoading) {
        return <div className='mt-28 px-4 sm:px-8 h-screen'>
            <h3 className="text-xl sm:text-2xl">Loading....</h3>
        </div>
    }

    return (
        <>
            <div className="mt-28 px-4 sm:px-8 space-y-10 mb-9" >
                <h3 className='xl:px-8 text-red-500 text-md'>
                    Warning: Please dont delete any session and if you add a session please delete it after your work done
                </h3>

                {
                    isPending && <h3 className="text-2xl xl:px-8">Pending....</h3>
                }

                <TopSectionPanel title='Session List' spanTitle='Sessions' />
                <div className="mt-8 xl:py-4 xl:px-8">
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
                                <div className=' size-fit' onClick={() => setIsShowAddModal(true)}>
                                    <OrginalButton styleBtn='p-2 bg-green-500' textBtn=' + Add Session' />
                                </div>
                            </div>
                        </div>
                        <table className="w-full text-gray-500 overflow-auto">
                            <thead className="border-b child:whitespace-nowrap">
                                <tr className='child:text-left child:p-4 text-gray-600'>
                                    <th>Index</th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody className='divide-y divide-gray-200 child:whitespace-nowrap'>
                                {
                                    sessions?.map((session, index) => (
                                        <tr key={session._id} className='child:p-4'>
                                            <td className=' text-center'>{index + 1}</td>
                                            <td>{session.title}</td>
                                            <td>{session.time}</td>
                                            <td>{session.course.name}</td>
                                            <td>{session.free === 0 ? 'Not Free' : 'Free'}</td>
                                            <td >
                                                <div onClick={() => {
                                                    setIsShowDeleteModal(true)
                                                    setSessionId(session._id)
                                                }
                                                } className=" inline-block">
                                                    <OrginalButton styleBtn='p-2 bg-red-500' textBtn='Delete Session' />
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                    </div>

                </div>
                <Pagination />
            </div>


            {
                isShowAddModal && <AddModal title='Session' textBtn='Add Session' onClose={() => setIsShowAddModal(false)} onSubmit={addNewSession}>
                    <form onSubmit={addForm.handleSubmit}>
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-6">
                                <label htmlFor="name" className="text-sm font-medium text-gray-900 block mb-2">Session Name</label>
                                <input type="text" name="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-2.5" placeholder="Figma 0 to 100"
                                    value={addForm.values.name}
                                    onChange={addForm.handleChange}
                                    onBlur={addForm.handleBlur}
                                />
                                {
                                    addForm.errors.name && addForm.touched.name && <label htmlFor="name" className='text-red-500 text-[13px] block mt-2 ml-1'>{addForm.errors.name}</label>
                                }
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="time" className="text-sm font-medium text-gray-900 block mb-2">time</label>
                                <input type="text" id="time" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-2.5" placeholder="5:30"
                                    name='time'
                                    value={addForm.values.time}
                                    onChange={addForm.handleChange}
                                    onBlur={addForm.handleBlur}
                                />
                                {
                                    addForm.errors.time && addForm.touched.time && <label htmlFor="time" className='text-red-500 text-[13px] block mt-2 ml-1'>{addForm.errors.time}</label>
                                }
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="chosseCourse" className="text-sm font-medium text-gray-900 block mb-2">Chosse a Course</label>
                                <select id="chosseCourse" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:border-main block w-full p-2.5 outline-none child:outline-none"
                                    name="courseId"
                                    value={addForm.values.courseId}
                                    onChange={addForm.handleChange}
                                    onBlur={addForm.handleBlur}
                                >
                                    <option value="-1">Choose a Course</option>
                                    {courses?.map((course) => (
                                        <option key={course._id} value={course._id}>{course.name}</option>
                                    ))}
                                </select>
                                {
                                    addForm.errors.courseId && addForm.touched.courseId && <label htmlFor="category" className='text-red-500 text-[13px] block mt-2 ml-1'>{addForm.errors.courseId}</label>
                                }
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="file_input">video</label>
                                <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400"
                                    type="file"
                                    id="video"
                                    name="video"
                                    onChange={(event) => {
                                        addForm.setFieldValue("video", event.currentTarget.files[0]);
                                    }}
                                />
                                {
                                    addForm.errors.video && addForm.touched.video && <label htmlFor="video" className='text-red-500 text-[13px] block mt-2 ml-1'>{addForm.errors.video}</label>
                                }
                            </div>
                            <div className="col-span-6 sm:col-span-3 mt-7">
                                <div className='flex gap-6'>
                                    <div className="flex items-center">
                                        <input id="default-radio-1" type="radio" className="w-4 h-4 text-main bg-gray-100 border-gray-300"
                                            name="status"
                                            value="0"
                                            checked={addForm.values.status === '0'}
                                            onChange={addForm.handleChange}

                                        />
                                        <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900"> Not Free</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input id="default-radio-2" type="radio" className="w-4 h-4 text-main bg-gray-100 border-gray-300"
                                            name="status"
                                            value="1"
                                            checked={addForm.values.status === '1'}
                                            onChange={addForm.handleChange}

                                        />
                                        <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900">Free</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" text-end mt-6 pt-6 border-t border-gray-200 rounded-b">
                            <button className='py-2.5 px-3.5 btn text-sm' type="submit"><span className='btn_curve'></span>Add user</button>
                        </div>
                    </form>
                </AddModal>
            }


            {isShowDeleteModal &&
                <DeleteModal onClose={() => setIsShowDeleteModal(false)} onSubmit={() => {
                    deleteSession(sessionId)
                    setIsShowDeleteModal(false)
                }} title='delete  this Session?' />
            }
        </>
    )
}
