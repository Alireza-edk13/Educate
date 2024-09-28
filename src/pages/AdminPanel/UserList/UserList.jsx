import React, { useState, useEffect } from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Pagination from '../../../Components/Pagination/Pagination';
import TopSectionPanel from '../../../Components/AdminPanel/TopSectionPanel/TopSectionPanel';
import AddModal from '../../../Components/AdminPanel/AddModal/AddModal';
import OrginalButton from '../../../Components/OrginalButton/OrginalButton';
import EditModal from '../../../Components/AdminPanel/EditModal/EditModal';
import DeleteModal from '../../../Components/AdminPanel/DeleteModal/DeleteModal';
import Modal from '../../../Components/AdminPanel/Modal/Modal';
import RegisterSchema from '../../../Validations/Register';
import RoleSchema from '../../../Validations/AdminPanel/Role';

import { useFormik } from 'formik';
import { useAddNewUser, useBanUser, useChangeUserRole, useGetUsers, useRegisterNewUser, useRemoveUser, useUpdateUserInfoByAdmin } from '../../../hooks/useUser';

export default function UserList() {




    const [isShowAddModal, setIsShowAddModal] = useState(false)
    const [isShowEditModal, setIsShowEditModal] = useState(false)
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
    const [isShowBanModal, setIsShowBanModal] = useState(false)
    const [isShowChangeRoleModal, setIsShowChangeRoleModal] = useState(false)


    const [userId, setUserId] = useState(null)
    const [mainUserInfo, setMainUserInfo] = useState({})
    const [usersList, setUsersList] = useState([])



    // ============= get All users from server ===========

    const { data: users, isLoading, isSuccess } = useGetUsers()

    useEffect(() => {
        if (isSuccess) {
            setUsersList([...users].reverse())
        }
    }, [isSuccess, users])

    // ============= register new user ================

    const { mutateAsync: addNewUser, isPending } = useAddNewUser()


    const form = useFormik({
        initialValues: { name: "", username: "", email: "", password: "", phone: "", confirmPassword: "" },

        onSubmit: (values) => {
            values.confirmPassword = values.password
            addNewUser(values)
            setIsShowAddModal(false)
        },

        validationSchema: RegisterSchema,
    });


    // =============== update userInfo ================

    const { data, mutateAsync: updateUserInfo } = useUpdateUserInfoByAdmin()

    const editForm = useFormik({
        initialValues: { name: "", username: "", email: "", password: "", phone: "", confirmPassword: "" },

        onSubmit: (values) => {
            values.confirmPassword = values.password
            updateUserInfo({ values, userId })
            console.log(values);
            setIsShowEditModal(false)
            setMainUserInfo(data)
        },

        validationSchema: RegisterSchema,
    });

    useEffect(() => {
        if (isShowEditModal) {
            editForm.setValues({
                name: mainUserInfo.name || "",
                username: mainUserInfo.username || "",
                email: mainUserInfo.email || "",
                phone: mainUserInfo.phone || "",
                password: "",
                confirmPassword: ""
            });
        }
    }, [isShowEditModal, mainUserInfo]);

    // ============ delete user =======================

    const { mutateAsync: removeUser } = useRemoveUser()

    // ============ ban user ==========================

    const { mutateAsync: banUser } = useBanUser()

    // ============  change user role =================

    const { mutateAsync: changeUserRole } = useChangeUserRole()

    const roleForm = useFormik({
        initialValues: { role: "", id: "" },

        onSubmit: (values) => {
            values.id = userId
            changeUserRole(values)
            setIsShowChangeRoleModal(false)
        },

        validationSchema: RoleSchema,
    });


    if (isLoading) {
        return <div className='mt-28 px-4 sm:px-8 h-screen'>
            <h3 className="text-xl sm:text-2xl">Loading....</h3>
        </div>
    }


    return (
        <>

            <div className="mt-28 px-4 sm:px-8 space-y-10 mb-9">
                <h3 className='xl:px-8 text-red-500 text-md'>
                    Warning: Please dont delete or change info of any user
                </h3>
                {
                    isPending && <h3 className="text-2xl xl:px-8">Pending....</h3>
                }
                <TopSectionPanel title='User List' spanTitle='Users' />
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
                                    <OrginalButton styleBtn='p-2 bg-green-500' textBtn=' + Add User' />
                                </div>
                            </div>
                        </div>
                        <table className="w-full text-gray-500 overflow-auto">
                            <thead className="border-b child:whitespace-nowrap">
                                <tr className='child:text-left child:p-4 text-gray-600'>
                                    <th>Index</th>
                                    <th>User</th>
                                    <th>Phone</th>
                                    <th>Role</th>

                                </tr>
                            </thead>
                            <tbody className='divide-y divide-gray-200 child:whitespace-nowrap'>
                                {usersList?.map((user, index) => (
                                    <tr key={user._id} className=' child:p-4'>
                                        <td className='text-center'>{index + 1}</td>
                                        <td className="flex items-center py-4">
                                            <div className="text-2xl text-mainWhite p-2 rounded-full bg-main">
                                                <FaUser />
                                            </div>
                                            <div className="px-4">
                                                <div>
                                                    <Link href="#" className="text-gray-600 font-bolder">{user.name}</Link>
                                                </div>
                                                <div className="font-bold text-sm">{user.email}</div>
                                            </div>
                                        </td>
                                        <td>{user.phone}</td>
                                        <td>{user.role}</td>
                                        <td >
                                            <div onClick={() => {
                                                setIsShowChangeRoleModal(true)
                                                setUserId(user._id)
                                            }} className=" inline-block">
                                                <OrginalButton styleBtn=' p-2' textBtn='Change Role' />
                                            </div>
                                        </td>
                                        <td >
                                            <div onClick={() => {
                                                setIsShowEditModal(true)
                                                setMainUserInfo(user)
                                                setUserId(user._id)
                                            }} className=' inline-block'>
                                                <OrginalButton styleBtn='p-2' textBtn='Edit User' />
                                            </div>
                                        </td>
                                        <td >
                                            <div onClick={() => {
                                                setIsShowBanModal(true)
                                                setUserId(user._id)
                                            }} className=" inline-block">
                                                <OrginalButton styleBtn='p-2 bg-red-500' textBtn='Ban User' />
                                            </div>
                                        </td>
                                        <td >
                                            <div onClick={() => {
                                                setIsShowDeleteModal(true)
                                                setUserId(user._id)
                                            }} className=" inline-block">
                                                <OrginalButton styleBtn='p-2 bg-red-600' textBtn='Delete User' />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>

                </div>
                <Pagination />
            </div>

            {/* Add Modal */}
            {
                isShowAddModal && <AddModal title='user' onClose={() => setIsShowAddModal(false)}>
                    <form onSubmit={form.handleSubmit}>
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="name" className="text-sm font-medium text-gray-900 block mb-2">Name</label>
                                <input type="text" name="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-2.5" placeholder="Edward"
                                    value={form.values.name.trim()}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                />
                                {
                                    form.errors.name && form.touched.name && <label htmlFor="name" className='text-red-500 text-[13px] block mt-2 ml-1'>{form.errors.name}</label>
                                }                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="username" className="text-sm font-medium text-gray-900 block mb-2">Username</label>
                                <input type="text" name="username" id="username" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-2.5 " placeholder="Edward-KO13"
                                    value={form.values.username.trim()}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                />
                                {
                                    form.errors.username && form.touched.username && <label htmlFor="username" className='text-red-500 text-[13px] block mt-2 ml-1'>{form.errors.username}</label>
                                }                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2">Email</label>
                                <input type="email" name="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-2.5" placeholder="edward@gmail.com"
                                    value={form.values.email}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                />
                                {
                                    form.errors.email && form.touched.email && <label htmlFor="email" className='text-red-500 text-[13px] block mt-2 ml-1'>{form.errors.email}</label>
                                }
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="phone" className="text-sm font-medium text-gray-900 block mb-2">Phone Number</label>
                                <input type="tel" id="phone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-2.5" placeholder="e.g. +(12)3456 789"
                                    name='phone'
                                    value={form.values.phone}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                />

                                {
                                    form.errors.phone && form.touched.phone && <label htmlFor="phone" className='text-red-500 text-[13px] block mt-2 ml-1'>{form.errors.phone}</label>
                                }
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2">Password</label>
                                <input type="text" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-2.5" placeholder="••••••••"
                                    name='password'
                                    value={form.values.password.trim()}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                />
                                {
                                    form.errors.password && form.touched.password && <label htmlFor="password" className='text-red-500 text-[13px] block mt-2 ml-1'>{form.errors.password}</label>
                                }
                            </div>

                        </div>
                        <div className=" text-end mt-6 pt-6 border-t border-gray-200 rounded-b">
                            <button className='py-2.5 px-3.5 btn text-sm' type="submit"><span className='btn_curve'></span>Add user</button>
                        </div>
                    </form>

                </AddModal>
            }



            {
                isShowEditModal && <EditModal title='user info' textBtn='Save' onClose={() => setIsShowEditModal(false)}>
                    <form onSubmit={editForm.handleSubmit}>
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="name" className="text-sm font-medium text-gray-900 block mb-2">Name</label>
                                <input type="text" name="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-2.5" placeholder={mainUserInfo.name}
                                    value={editForm.values.name.trim()}
                                    onChange={editForm.handleChange}
                                    onBlur={editForm.handleBlur}
                                />
                                {
                                    editForm.errors.name && editForm.touched.name && <label htmlFor="name" className='text-red-500 text-[13px] block mt-2 ml-1'>{editForm.errors.name}</label>
                                }                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="username" className="text-sm font-medium text-gray-900 block mb-2">Username</label>
                                <input type="text" name="username" id="username" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-2.5 " placeholder="Edward-KO13"
                                    value={editForm.values.username.trim()}
                                    onChange={editForm.handleChange}
                                    onBlur={editForm.handleBlur}
                                />
                                {
                                    editForm.errors.username && editForm.touched.username && <label htmlFor="username" className='text-red-500 text-[13px] block mt-2 ml-1'>{editForm.errors.username}</label>
                                }                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2">Email</label>
                                <input type="email" name="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-2.5" placeholder="edward@gmail.com"
                                    value={editForm.values.email}
                                    onChange={editForm.handleChange}
                                    onBlur={editForm.handleBlur}
                                />
                                {
                                    editForm.errors.email && editForm.touched.email && <label htmlFor="email" className='text-red-500 text-[13px] block mt-2 ml-1'>{editForm.errors.email}</label>
                                }
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="phone" className="text-sm font-medium text-gray-900 block mb-2">Phone Number</label>
                                <input type="tel" id="phone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-2.5" placeholder="e.g. +(12)3456 789"
                                    name='phone'
                                    value={editForm.values.phone}
                                    onChange={editForm.handleChange}
                                    onBlur={editForm.handleBlur}
                                />

                                {
                                    editForm.errors.phone && editForm.touched.phone && <label htmlFor="phone" className='text-red-500 text-[13px] block mt-2 ml-1'>{editForm.errors.phone}</label>
                                }
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2">Password</label>
                                <input type="text" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-2.5" placeholder="••••••••"
                                    name='password'
                                    value={editForm.values.password.trim()}
                                    onChange={editForm.handleChange}
                                    onBlur={editForm.handleBlur}
                                />
                                {
                                    editForm.errors.password && editForm.touched.password && <label htmlFor="password" className='text-red-500 text-[13px] block mt-2 ml-1'>{editForm.errors.password}</label>
                                }
                            </div>

                        </div>
                        <div className=" text-end mt-6 pt-6 border-t border-gray-200 rounded-b">
                            <button className='py-2.5 px-3.5 btn text-sm' type="submit"><span className='btn_curve'></span>Edit user</button>
                        </div>
                    </form>
                </EditModal>
            }



            {/* delete modal */}
            {isShowDeleteModal &&
                <DeleteModal onClose={() => setIsShowDeleteModal(false)} onSubmit={() => {
                    removeUser(userId)
                    setIsShowDeleteModal(false)
                }} title='delete  this user?' />
            }



            {isShowBanModal &&
                <DeleteModal onClose={() => setIsShowBanModal(false)} onSubmit={() => {
                    banUser(userId)
                    setIsShowBanModal(false)
                }} title='ban this user?' />
            }


            {

                isShowChangeRoleModal && <Modal textBtn='Change Role' onClose={() => setIsShowChangeRoleModal(false)}>
                    <div className="px-6 pb-6 pt-0 space-y-6">
                        <form onSubmit={roleForm.handleSubmit}>
                            <div className="grid grid-cols-12">
                                <div className="col-span-12">
                                    <label htmlFor="role" className="text-sm font-medium text-gray-900 block mb-2">Role</label>
                                    <input type="text" name="role" id="role" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-2.5" placeholder="Admin"
                                        value={roleForm.values.role.trim()}
                                        onChange={roleForm.handleChange}
                                        onBlur={roleForm.handleBlur}

                                    />
                                    {
                                        roleForm.errors.role && roleForm.touched.role && <label htmlFor="role" className='text-red-500 text-[13px] block mt-4 ml-1'>{roleForm.errors.role}</label>
                                    }
                                </div>
                            </div>
                            <div className=" text-end p-6 border-t border-gray-200 rounded-b">
                                <button className='py-2.5 px-3.5 btn text-sm' type="submit"><span className='btn_curve'></span>Change Role</button>
                            </div>
                        </form>
                    </div>
                </Modal>
            }

        </>
    )
}
