import React from 'react'
import Header from '../../Components/Header/Header'
import PageTitleBanner from '../../Components/PageTitleBanner/PageTitleBanner';
import FooterSection from '../../Components/FooterSection/FooterSection'
import ContactCart from '../../Components/ContactCart/ContactCart';
import { useFormik } from 'formik';
import ContactSchema from '../../Validations/Contact';
import { useSendMessage } from '../../hooks/useMessage';


export default function Contact() {

    const { mutateAsync: sendMessage } = useSendMessage()


    const form = useFormik({
        initialValues: { name: "", email: "", phone: "", body: "" },

        onSubmit: (values, { setSubmitting }) => {
            sendMessage(values)
            console.log(values);
            setTimeout(() => {
                setSubmitting(false);
            }, 4000);
        },

        validationSchema: ContactSchema,
    });




    return (
        <>
            <Header />
            <PageTitleBanner title='Contact Us' />
            <div className="container  my-16">
                <div className=' grid lg:grid-cols-2'>
                    <div>
                        <h6 className='text-main font-InterSB mb-2'>–––– Contact Form </h6>
                        <h2 className={` text-3xl  xl:text-5xl leading-[125%] xl:leading-[125%] tracking-[-.47px] mb-6`}>Write Us Anytime, We Would Love To Hear From <span className=' font-CourgetteR'>You!</span></h2>
                        <p className=' text-mainGray'>Lorem ipsum dolor sit amet consectetur. Non convallis sed id
                            aliquam tempus. Volutpat tortor tincidunt egestas sit risus donec.</p>
                        <form onSubmit={form.handleSubmit}>
                            <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-x-6 mt-4 child:mb-4">
                                <div>
                                    <input
                                        type="text"
                                        className=' p-4 bg-transparent rounded-md border border-lightGray placeholder:text-mainGray tracking-wider outline-none w-full mb-2'
                                        id='name'
                                        placeholder='name'
                                        name='name'
                                        value={form.values.name}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                    />
                                    {
                                        form.errors.name && form.touched.name && <label htmlFor="name" className='text-red-500'>{form.errors.name}</label>
                                    }
                                </div>
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
                            </div>
                            <div className="grid grid-cols-1 child:mb-4">
                                <div>
                                    <input type="email" className=' p-4 bg-transparent rounded-md  border border-lightGray placeholder:text-mainGray tracking-wider outline-none w-full mb-2' id='email' placeholder='Email'
                                        name='email'
                                        value={form.values.email}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                    />
                                    {
                                        form.errors.email && form.touched.email && <label htmlFor="email" className='text-red-500'>{form.errors.email}</label>
                                    }
                                </div>
                            </div>
                            <div>
                                <textarea className='min-h-32 p-4 bg-transparent rounded-md  border border-lightGray placeholder:text-mainGray tracking-wider outline-none w-full mb-2' id='body' placeholder='Write Your Message Here'
                                    name='body'
                                    value={form.values.body}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                />
                                {
                                    form.errors.body && form.touched.body && <label htmlFor="body" className='text-red-500'>{form.errors.body}</label>
                                }
                            </div>
                            <button type="submit" disabled={form.isSubmitting} className='btn w-full text-center mt-4'>
                                {form.isSubmitting ? "Loading ..." : "Send"}
                                <span className='btn_curve'></span>
                            </button>
                        </form>

                    </div>
                    <div className=' mt-16 lg:mt-0'>
                        <img src="/images/contact.webp" alt="contact" />
                    </div>
                </div>
                <div className="grid xl:grid-cols-3 gap-8 mt-32">
                    <ContactCart icon='IoLocationOutline' title='123 Main Street, Anytown, USA.' />
                    <ContactCart icon='IoMailOutline' title='+1 234 567 890' />
                    <ContactCart icon='HiOutlinePhone' title='email@example.com' />
                </div>
            </div>
            <FooterSection />

        </>
    )
}
