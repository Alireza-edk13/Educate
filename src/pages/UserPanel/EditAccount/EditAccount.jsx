import React, { useEffect} from 'react'
import { useFormik } from 'formik';
import RegisterSchema from '../../../Validations/Register';
import { useGetUserInfo, useUpdateUserInfo } from '../../../hooks/useUser';


export default function EditAccount() {

    const editForm = useFormik({
        initialValues: { name: "", username: "", email: "", password: "", phone: "" },
        enableReinitialize: true,
        validationSchema: RegisterSchema,
        onSubmit: (values) => {
            updateUserInfo(values)
        }
    });

    const { mutateAsync: updateUserInfo } = useUpdateUserInfo()
    const { data: newUserInfo } = useGetUserInfo()


    useEffect(() => {
        if (newUserInfo) {
            editForm.setValues({
                name: newUserInfo?.name || "",
                username: newUserInfo?.username || "",
                email: newUserInfo?.email || "",
                phone: newUserInfo?.phone || "",
                password: "",
            });
        }
    }, [newUserInfo]);

    return (
        <>
            <form onSubmit={editForm.handleSubmit}>
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="name" className="text-sm font-medium text-gray-900 block mb-2">Name</label>
                        <input type="text" name="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-4"
                            value={editForm.values.name.trim()}
                            onChange={editForm.handleChange}
                            onBlur={editForm.handleBlur}
                        />
                        {
                            editForm.errors.name && editForm.touched.name && <label htmlFor="name" className='text-red-500 text-[13px] block mt-2 ml-1'>{editForm.errors.name}</label>
                        }                            </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="username" className="text-sm font-medium text-gray-900 block mb-2">Username</label>
                        <input type="text" name="username" id="username" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-4 " placeholder="Edward-KO13"
                            value={editForm.values.username.trim()}
                            onChange={editForm.handleChange}
                            onBlur={editForm.handleBlur}
                        />
                        {
                            editForm.errors.username && editForm.touched.username && <label htmlFor="username" className='text-red-500 text-[13px] block mt-2 ml-1'>{editForm.errors.username}</label>
                        }                            </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2">Email</label>
                        <input type="email" name="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-4" placeholder="edward@gmail.com"
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
                        <input type="tel" id="phone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-4" placeholder="e.g. +(12)3456 789"
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
                        <input type="text" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-4" placeholder="••••••••"
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
                    <button className='py-2.5 px-3.5 btn text-sm' type="submit"><span className='btn_curve'></span>Edit Info</button>
                </div>
            </form>
        </>
    )
}
