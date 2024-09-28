import React, { useState, useEffect } from 'react'
import TopSectionPanel from '../../../Components/AdminPanel/TopSectionPanel/TopSectionPanel'
import Pagination from '../../../Components/Pagination/Pagination'
import AddModal from '../../../Components/AdminPanel/AddModal/AddModal';
import OrginalButton from '../../../Components/OrginalButton/OrginalButton';
import { IoIosSearch } from "react-icons/io";
import DeleteModal from '../../../Components/AdminPanel/DeleteModal/DeleteModal';
import CategorySchema from '../../../Validations/AdminPanel/Category';
import { useFormik } from 'formik';
import { useAddNewCategory, useDeleteCategory, useGetCategories } from '../../../hooks/useCategory';


export default function Category() {

    const [isShowAddModal, setIsShowAddModal] = useState(false)
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
    const [categoryId, setCategoryId] = useState("");
    const [categories, setCategories] = useState([])


    // ========= get all category ========

    const { data, isSuccess, isLoading } = useGetCategories()

    useEffect(() => {
        if (isSuccess) {
            setCategories([...data].reverse())
        }
    }, [isSuccess, data])

    // ========= add category ============


    const { mutateAsync: newCategory, isPending } = useAddNewCategory()

    const addForm = useFormik({
        initialValues: { title: "", name: "" },

        onSubmit: (values) => {
            console.log("Form Inputs Data =>", values);
            newCategory(values)
            setIsShowAddModal(false)
        },

        validationSchema: CategorySchema,
    });

    // =========== remove category ===============


    const { mutateAsync: deleteCategory } = useDeleteCategory()




    if (isLoading) {
        return <div className='mt-28 px-4 sm:px-8 h-screen'>
            <h3 className="text-xl sm:text-2xl">Loading....</h3>
        </div>
    }



    return (
        <>
            <div className="mt-28 px-4 sm:px-8 space-y-10 mb-9" >
                <h3 className='xl:px-8 text-red-500 text-md'>
                    Warning: Please dont delete any category and if you add a category please delete it after your work done
                </h3>

                {
                    isPending && <h3 className="text-2xl xl:px-8">Pending....</h3>
                }
                <TopSectionPanel title='Category' spanTitle='Category' />
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
                                    <OrginalButton styleBtn='p-2 bg-green-500' textBtn=' + Add Category' />
                                </div>
                            </div>
                        </div>
                        <table className="w-full text-gray-500 overflow-auto">
                            <thead className="border-b child:whitespace-nowrap">
                                <tr className='child:text-left child:p-4 text-gray-600'>
                                    <th>Index</th>
                                    <th>Name</th>
                                    <th>shortName</th>
                                </tr>
                            </thead>
                            <tbody className='divide-y divide-gray-200 child:whitespace-nowrap'>
                                {
                                    categories?.map((category, index) => (
                                        <tr key={category._id} className='child:p-4'>
                                            <td className=' text-center'>{index + 1}</td>
                                            <td>{category.title}</td>
                                            <td>{category.name}</td>
                                            <td >
                                                <div onClick={() => {
                                                    setIsShowDeleteModal(true)
                                                    setCategoryId(category._id)
                                                }} className=" inline-block">
                                                    <OrginalButton styleBtn='p-2 bg-red-500' textBtn='Delete' />
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
                isShowAddModal && <AddModal title='Category' onClose={() => setIsShowAddModal(false)}>
                    <form onSubmit={addForm.handleSubmit}>
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="name" className="text-sm font-medium text-gray-900 block mb-2">Title</label>
                                <input type="text" name="title" id="title" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-2.5" placeholder="Ui / Ux Designer"
                                    value={addForm.values.title}
                                    onChange={addForm.handleChange}
                                    onBlur={addForm.handleBlur}
                                />
                                {
                                    addForm.errors.title && addForm.touched.title && <label htmlFor="title" className='text-red-500 text-[13px] block mt-2 ml-1'>{addForm.errors.title}</label>
                                }
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="name" className="text-sm font-medium text-gray-900 block mb-2">short Name</label>
                                <input type="text" name="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-2.5 " placeholder="Ui/Ux"
                                    value={addForm.values.name}
                                    onChange={addForm.handleChange}
                                    onBlur={addForm.handleBlur}
                                />
                                {
                                    addForm.errors.name && addForm.touched.name && <label htmlFor="name" className='text-red-500 text-[13px] block mt-2 ml-1'>{addForm.errors.name}</label>
                                }
                            </div>
                        </div>
                        <div className=" text-end mt-6 pt-6 border-t border-gray-200 rounded-b">
                            <button className='py-2.5 px-3.5 btn text-sm' type="submit"><span className='btn_curve'></span>Add category</button>
                        </div>
                    </form>





                </AddModal>
            }



            {isShowDeleteModal &&
                <DeleteModal onClose={() => setIsShowDeleteModal(false)} onSubmit={() => {
                    deleteCategory(categoryId)
                    setIsShowDeleteModal(false)
                }} title='delete  this category?' />
            }

        </>
    )
}
