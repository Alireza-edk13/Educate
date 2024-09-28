import React, { useState, useEffect } from 'react'
import TopSectionPanel from '../../../Components/AdminPanel/TopSectionPanel/TopSectionPanel'
import Pagination from '../../../Components/Pagination/Pagination'
import { IoIosSearch } from "react-icons/io";
import AddModal from '../../../Components/AdminPanel/AddModal/AddModal';
import OrginalButton from '../../../Components/OrginalButton/OrginalButton';
import DeleteModal from '../../../Components/AdminPanel/DeleteModal/DeleteModal';


import { useFormik } from "formik";
import CourseSchema from '../../../Validations/AdminPanel/Course';
import { useAddNewCourse, useDeleteCourse, useGetCourses } from '../../../hooks/useCourse';
import { useGetCategories } from '../../../hooks/useCategory';


export default function CourseList() {
    const [isShowAddModal, setIsShowAddModal] = useState(false)
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
    const [courseId, setCourseId] = useState(null)




    //========= get all courses ======

    const { data: courses, isLoading } = useGetCourses()

    // ========= get all category ========

    const { data: categories } = useGetCategories()

    // ========= add course ===========

    const { mutateAsync: addNewCourse, isPending } = useAddNewCourse()

    const addForm = useFormik({
        initialValues: { name: "", shortName: "", desc: "", price: "", support: "", status: "presell", cover: null, categoryId: "" },

        onSubmit: (values) => {
            addNewCourse(values)
            setIsShowAddModal(false)
        },

        validationSchema: CourseSchema,
    });

    // ======== delete courese ===========

    const { mutateAsync: deleteCourse } = useDeleteCourse()

    if (isLoading) {
        return <div className='mt-28 px-4 sm:px-8 h-screen'>
            <h3 className="text-xl sm:text-2xl">Loading....</h3>
        </div>
    }
    return (
        <>
            <div className="mt-28 px-4 sm:px-8 space-y-10 mb-9" >
                <h3 className='xl:px-8 text-red-500 text-md'>
                    Warning: Please dont delete any course and if you add a course please delete it after your work done
                </h3>

                {
                    isPending && <h3 className="text-2xl xl:px-8">Pending....</h3>
                }
                <TopSectionPanel title='Course List' spanTitle='Courses' />
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
                                    <OrginalButton styleBtn='p-2 bg-green-500' textBtn=' + Add Course' />
                                </div>
                            </div>
                        </div>
                        <table className="w-full text-gray-500 overflow-auto">
                            <thead className="border-b child:whitespace-nowrap">
                                <tr className='child:text-left child:p-4 text-gray-600'>
                                    <th>Index</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Teacher</th>
                                    <th>Status</th>
                                    <th>Category</th>
                                    <th>Registers</th>
                                </tr>
                            </thead>
                            <tbody className='divide-y divide-gray-200 child:whitespace-nowrap'>

                                {
                                    courses?.map((course, index) => (
                                        <tr key={course._id} className='child:p-4'>
                                            <td className=' text-center'>{index + 1}</td>
                                            <td>{course.name}</td>
                                            <td>{course.price === 0 ? "Free" : "$" + course.price.toLocaleString()}</td>
                                            <td>{course.creator}</td>
                                            <td className="py-4 before:text-sm text-gray-500">
                                                <span className=
                                                    {`px-2 py-1 rounded text-xs text-white ${course.status === "start" ? 'bg-green-500' : ' bg-yellow-500'}`}>
                                                    {
                                                        course.status === "start" ? "Ongoing" : "Presell"
                                                    }
                                                </span>
                                            </td>
                                            <td >
                                                {course.categoryID.name}
                                            </td>
                                            <td >
                                                {course.registers}
                                            </td>
                                            <td >
                                                <div onClick={() => {
                                                    setIsShowDeleteModal(true)
                                                    setCourseId(course._id)
                                                }} className=" inline-block">
                                                    <OrginalButton styleBtn='p-2 bg-red-500' textBtn='Delete Course' />
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
                isShowAddModal && <AddModal title='Course' onClose={() => setIsShowAddModal(false)}>
                    <form onSubmit={addForm.handleSubmit}>
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="name" className="text-sm font-medium text-gray-900 block mb-2">Course Name</label>
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
                                <label htmlFor="shortName" className="text-sm font-medium text-gray-900 block mb-2">short Name</label>
                                <input type="text" name="shortName" id="shortName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-2.5 " placeholder="Figma"
                                    value={addForm.values.shortName}
                                    onChange={addForm.handleChange}
                                    onBlur={addForm.handleBlur}
                                />
                                {
                                    addForm.errors.shortName && addForm.touched.shortName && <label htmlFor="shortName" className='text-red-500 text-[13px] block mt-2 ml-1'>{addForm.errors.shortName}</label>
                                }
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="desc" className="text-sm font-medium text-gray-900 block mb-2">Creator Expert</label>
                                <input type="text" id="desc" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-2.5" placeholder="this course is about ,...."
                                    name='desc'
                                    value={addForm.values.desc}
                                    onChange={addForm.handleChange}
                                    onBlur={addForm.handleBlur}
                                />

                                {
                                    addForm.errors.desc && addForm.touched.desc && <label htmlFor="desc" className='text-red-500 text-[13px] block mt-2 ml-1'>{addForm.errors.desc}</label>
                                }
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="price" className="text-sm font-medium text-gray-900 block mb-2">price</label>
                                <input type="number" id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-2.5" placeholder="100,000,000"
                                    name='price'
                                    value={addForm.values.price}
                                    onChange={addForm.handleChange}
                                    onBlur={addForm.handleBlur}
                                />
                                {
                                    addForm.errors.price && addForm.touched.price && <label htmlFor="price" className='text-red-500 text-[13px] block mt-2 ml-1'>{addForm.errors.price}</label>
                                }
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="support" className="text-sm font-medium text-gray-900 block mb-2">support way</label>
                                <input type="text" id="support" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-2.5" placeholder="telegram"
                                    name='support'
                                    value={addForm.values.support}
                                    onChange={addForm.handleChange}
                                    onBlur={addForm.handleBlur}
                                />
                                {
                                    addForm.errors.support && addForm.touched.support && <label htmlFor="support" className='text-red-500 text-[13px] block mt-2 ml-1'>{addForm.errors.support}</label>
                                }
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="chooseCate" className="text-sm font-medium text-gray-900 block mb-2">Category</label>
                                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:border-main block w-full p-2.5 outline-none child:outline-none"
                                    name="categoryId"
                                    value={addForm.values.categoryId}
                                    onChange={addForm.handleChange}
                                    onBlur={addForm.handleBlur}
                                >
                                    <option value="-1">Choose a Category</option>
                                    {categories?.map((category) => (
                                        <option key={category._id} value={category._id}>{category.title}</option>
                                    ))}
                                </select>
                                {
                                    addForm.errors.categoryId && addForm.touched.categoryId && <label htmlFor="category" className='text-red-500 text-[13px] block mt-2 ml-1'>{addForm.errors.categoryId}</label>
                                }
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="file_input">Cover</label>
                                <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400"
                                    type="file"
                                    id="cover"
                                    name="cover"
                                    onChange={(event) => {
                                        addForm.setFieldValue("cover", event.currentTarget.files[0]);
                                    }}
                                />
                                {
                                    addForm.errors.cover && addForm.touched.cover && <label htmlFor="cover" className='text-red-500 text-[13px] block mt-2 ml-1'>{addForm.errors.cover}</label>
                                }
                            </div>
                            <div className="col-span-6 sm:col-span-3 mt-7">
                                <div className='flex gap-6'>
                                    <div className="flex items-center">
                                        <input id="default-radio-1" type="radio" className="w-4 h-4 text-main bg-gray-100 border-gray-300"
                                            name="status"
                                            value="presell"
                                            checked={addForm.values.status === 'presell'}
                                            onChange={addForm.handleChange}

                                        />
                                        <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900">PreSell</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input id="default-radio-2" type="radio" className="w-4 h-4 text-main bg-gray-100 border-gray-300"
                                            name="status"
                                            value="start"
                                            checked={addForm.values.status === 'start'}
                                            onChange={addForm.handleChange}

                                        />
                                        <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900">Ongoing</label>
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
                    deleteCourse(courseId)
                    setIsShowDeleteModal(false)
                }} title='delete  this course?' />
            }

        </>
    )
}
