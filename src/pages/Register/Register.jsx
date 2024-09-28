import React from 'react'
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { useFormik } from "formik";
import RegisterSchema from '../../Validations/Register';
import { useRegisterNewUser } from '../../hooks/useUser';
export default function Register() {

    const { mutateAsync: addNewUser, isSuccess } = useRegisterNewUser()



    const form = useFormik({
        initialValues: { name: "", username: "", email: "", password: "", phone: "", confirmPassword: "" },

        onSubmit: (values, { setSubmitting }) => {
            values.confirmPassword = values.password
            addNewUser(values)
            if (isSuccess) {
                setTimeout(() => {
                    setSubmitting(false);
                }, 8000);
            }

        },

        validationSchema: RegisterSchema,
    });



    return (
        <>
            <section className=' lg:bg-LoginBg bg-cover bg-center relative'>
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className=" col-span-12 lg:col-span-6">
                            <div className=" relative grid items-center">
                                <div className=" relative z-20 mt-4 mb-8">
                                    <Link to={'/'}>
                                        <div className='flex items-center'>
                                            <img src="/images/logo.webp" className='w-12' alt="logo" />
                                            <h4 className=' font-InterSM text-3xl ml-0.5'>Educate</h4>
                                        </div>
                                    </Link>
                                    <Link to={'/'} className=' mt-3 mb-8 flex items-center gap-1 text-main'><IoIosArrowBack />Back To Home</Link>
                                    <div className=" relative w-fit mb-8 md:mb-14 ">
                                        <h2 className='text-3xl md:text-5xl'>Create an account</h2>
                                    </div>
                                    <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <Link className=' bg-transparent flex-center flex-wrap gap-[6px] w-full py-2 px-3 transition-all duration-[0.5s] border border-mainGray rounded-md hover:bg-main hover:text-mainWhite'><img src="/images/login/google.webp" alt="login" />Log in with Google</Link>
                                        </div>
                                        <div>
                                            <Link className=' bg-transparent flex-center flex-wrap gap-[6px] w-full py-2 px-3 transition-all duration-[0.5s] border border-mainGray rounded-md hover:bg-main hover:text-mainWhite'><img src="/images/login/facebook-icon.webp" alt="login" />Log in with Google</Link>
                                        </div>
                                    </div>
                                    <h5 className='or-email after:right-0 before:left-0 relative text-center text-xl mt-6 mb-1'>or</h5>
                                    <div className="text-center">
                                        <h5>Login with your email address</h5>
                                    </div>

                                    {/* form Inputs */}

                                    <form onSubmit={form.handleSubmit}>
                                        <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-x-6 mt-4 child:mb-4">
                                            <div>
                                                <input
                                                    type="text"
                                                    className=' p-4 bg-transparent rounded-md border border-lightGray placeholder:text-mainGray tracking-wider outline-none w-full mb-2'
                                                    id='name'
                                                    placeholder='name'
                                                    name='name'
                                                    value={form.values.name.trim()}
                                                    onChange={form.handleChange}
                                                    onBlur={form.handleBlur}
                                                />
                                                {
                                                    form.errors.name && form.touched.name && <label htmlFor="name" className='text-red-500'>{form.errors.name}</label>
                                                }
                                            </div>
                                            <div>
                                                <input type="text" className=' p-4 bg-transparent rounded-md  border border-lightGray placeholder:text-mainGray tracking-wider outline-none w-full mb-2' id='username' placeholder='Username'
                                                    name='username'
                                                    value={form.values.username.trim()}
                                                    onChange={form.handleChange}
                                                    onBlur={form.handleBlur}
                                                />
                                                {
                                                    form.errors.username && form.touched.username && <label htmlFor="username" className='text-red-500'>{form.errors.username}</label>
                                                }
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-x-6 child:mb-4">
                                            <div>
                                                <input type="tel" className=' p-4 bg-transparent rounded-md  border border-lightGray placeholder:text-mainGray tracking-wider outline-none w-full mb-2' id='phone' placeholder='Phone'
                                                    name='phone'
                                                    value={form.values.phone}
                                                    onChange={form.handleChange}
                                                    onBlur={form.handleBlur}
                                                />

                                                {
                                                    form.errors.phone && form.touched.phone && <label htmlFor="phone" className='text-red-500'>{form.errors.phone}</label>
                                                }
                                            </div>
                                            <div>
                                                <input type="email" className=' p-4 bg-transparent rounded-md  border border-lightGray placeholder:text-mainGray tracking-wider outline-none w-full mb-2' id='email' placeholder='Email'
                                                    name='email'
                                                    value={form.values.email.trim()}
                                                    onChange={form.handleChange}
                                                    onBlur={form.handleBlur}
                                                />
                                                {
                                                    form.errors.email && form.touched.email && <label htmlFor="email" className='text-red-500'>{form.errors.email}</label>
                                                }
                                            </div>
                                        </div>
                                        <div>
                                            <input type="text" className=' p-4 bg-transparent rounded-md  border border-lightGray placeholder:text-mainGray tracking-wider outline-none w-full mb-2' id='password' placeholder='Password'
                                                name='password'
                                                value={form.values.password.trim()}
                                                onChange={form.handleChange}
                                                onBlur={form.handleBlur}
                                            />
                                            {
                                                form.errors.password && form.touched.password && <label htmlFor="password" className='text-red-500'>{form.errors.password}</label>
                                            }
                                        </div>
                                        <button type="submit" disabled={form.isSubmitting} className='btn w-full text-center mt-4'>
                                            {form.isSubmitting ? "Loading ..." : "Create Account"}
                                            <span className='btn_curve'></span>
                                        </button>
                                    </form>





                                    <div className="flex justify-between items-center my-4 flex-wrap">
                                        <p>Already have an account?<Link to={'/login'} className=' ml-1 text-main'>Login</Link></p>
                                    </div>
                                </div>
                                <div>
                                    <img className=' absolute right-0 hidden md:block bottom-0' src="/images/login/circle-lines-3.webp" alt="shape" />
                                    <img className=' absolute bottom-8 right-4 hidden md:block' src="/images/login/location.webp" alt="shape" />
                                    <img className=' absolute top-12 right-16 rotate-[210deg] hidden md:block size-16' src="/images/comments/vector-2.webp" alt="shape" />
                                    <img className=' absolute top-1/2 -left-32 rotate-[40deg] hidden md:block size-16' src="/images/comments/vector-2.webp" alt="shape" />

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
