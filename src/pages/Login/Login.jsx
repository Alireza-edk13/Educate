import React from 'react'
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import LoginSchema from '../../Validations/Login';
import { useFormik } from 'formik';
import { useLogin } from '../../hooks/useUser';
export default function Login() {

    const form = useFormik({
        initialValues: { identifier: "", password: "" },

        onSubmit: (values, { setSubmitting }) => {
            console.log(values);
            userLogin(values)
            setTimeout(() => {
                setSubmitting(false);
            }, 8000);
        },

        validationSchema: LoginSchema
    })

    const { mutateAsync: userLogin } = useLogin()


    return (
        <>
            <section className=' lg:bg-LoginBg bg-cover h-screen bg-center relative'>
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className=" col-span-12 lg:col-span-6">
                            <div className=" relative grid items-center">
                                <div className=" relative z-20  mt-4 mb-8">
                                    <Link to={'/'} className=' mt-4'>
                                        <div className='flex items-center'>
                                            <img src="/images/logo.webp" className='w-12' alt="logo" />
                                            <h4 className=' font-InterSM text-3xl ml-0.5'>Educate</h4>
                                        </div>
                                    </Link>
                                    <Link to={'/'} className=' mt-3 mb-8 flex items-center gap-1 text-main'><IoIosArrowBack />Back To Home</Link>
                                    <div className=" relative w-fit mb-8 md:mb-14">
                                        <h2 className='text-3xl md:text-5xl'>Login</h2>
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
                                    <form onSubmit={form.handleSubmit}>
                                        <div className=" my-4">
                                            <input type="email" className=' p-4 bg-transparent rounded-md border border-lightGray placeholder:text-mainGray tracking-wider w-full mb-2' id='login-email' placeholder='Email'
                                                name='identifier'
                                                value={form.values.identifier}
                                                onChange={form.handleChange}
                                                onBlur={form.handleBlur}
                                            />
                                            {
                                                form.errors.identifier && form.touched.identifier && <label htmlFor="login-email" className='text-red-500'>{form.errors.identifier}</label>
                                            }

                                        </div>
                                        <div className=" mb-4">
                                            <input type="text" className=' p-4 bg-transparent rounded-md border border-lightGray placeholder:text-mainGray tracking-wider w-full mb-2' id='login-password' placeholder='Password'
                                                name='password'
                                                value={form.values.password}
                                                onChange={form.handleChange}
                                                onBlur={form.handleBlur}
                                            />
                                            {
                                                form.errors.password && form.touched.password && <label htmlFor="login-password" className='text-red-500'>{form.errors.password}</label>
                                            }
                                        </div>
                                        <button type="submit" disabled={form.isSubmitting} className='btn w-full text-center'>
                                            {form.isSubmitting ? "Loading ..." : "Login"}
                                            <span className='btn_curve'></span>
                                        </button>
                                    </form>
                                    <div className="flex justify-between items-center mt-4 flex-wrap">
                                        <p>Don’t have an account?<Link to={'/register'} className=' ml-1 text-main'>Register</Link></p>
                                        <Link className=' text-main'>Forgot Password?</Link>
                                    </div>
                                </div>
                                <div>
                                    <img className=' absolute right-0 hidden md:block -bottom-16' src="/images/login/circle-lines-3.webp" alt="shape" />
                                    <img className=' absolute -bottom-10 hidden md:block right-6' src="/images/login/location.webp" alt="shape" />
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
