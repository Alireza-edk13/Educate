import React, { useState, useEffect } from 'react'
import TopSectionPanel from '../../../Components/AdminPanel/TopSectionPanel/TopSectionPanel'
import OrginalButton from '../../../Components/OrginalButton/OrginalButton';
import Modal from '../../../Components/AdminPanel/Modal/Modal';
import useToast from '../../../Components/Toast/Toast';
import { useFormik } from 'formik';
import TicketSchema from '../../../Validations/AdminPanel/Ticket';
import SadError from '../../../Components/SadError/SadError';
import Error404 from '../../../Components/AdminPanel/Error404/Error404';

export default function Tickets() {

    // react quert is not use in this page !!

    // const [isShowAnswerModal, setIsShowAnswerModal] = useState(false)
    // const [isShowViewModal, setIsShowViewModal] = useState(false)
    // const [isLoading, setIsLoading] = useState(true);


    // const [tickets, setTickets] = useState([]);
    // const [ticketId, setTicketId] = useState("");
    // const [selectedTicket, setSelectedTicket] = useState("");

    // const showToast = useToast()


    // const getAllTickets = async () => {
    //     const localStorageData = JSON.parse(localStorage.getItem("user"));
    //     const res = await fetch("http://localhost:8000/v1/tickets", {
    //         headers: {
    //             Authorization: `Bearer ${localStorageData.token}`,
    //         },
    //     })

    //     if (res.ok) {
    //         const data = await res.json()
    //         console.log(data);
    //         setTickets(data);
    //     }
    //     setIsLoading(false);
    // }


    // useEffect(() => {
    //     getAllTickets();
    // }, []);


    // const form = useFormik({
    //     initialValues: { body: "" },

    //     onSubmit: (values) => {
    //         answerToTickets(values)
    //     },

    //     validationSchema: TicketSchema,
    // });


    // const answerToTickets = async (values) => {
    //     const ticketAnswerInfos = {
    //         ticketID: ticketId,
    //         body: values.body,
    //     };

    //     const res = await fetch(`http://localhost:8000/v1/tickets/answer`, {
    //         method: "POST",
    //         headers: {
    //             Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token
    //                 }`,
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(ticketAnswerInfos),
    //     })

    //     if (res.ok) {
    //         getAllTickets()
    //         showToast("Ticket Removed", "success")
    //         setIsShowAnswerModal(false)
    //     } else {
    //         console.log(res.text());
    //         showToast("Ticket didnt remove", "error")
    //         setIsShowAnswerModal(false)
    //     }
    // }

    // if (isLoading) {
    //     return <div></div>
    // }

    return (
        <>
            {/*             
                tickets.length ?

                    <div className="mt-28 px-4 sm:px-8 space-y-10 mb-9" >
                        <TopSectionPanel title='Tickets' spanTitle='Tickets' />
                        <div className="mt-8 xl:py-4 xl:px-8">
                            <div className="p-4 bg-mainWhite rounded-md overflow-auto">
                                <table className="w-full text-gray-500 overflow-auto">
                                    <thead className="border-b child:whitespace-nowrap">
                                        <tr className='child:text-left child:p-4 text-gray-600'>
                                            <th>Index</th>
                                            <th>User</th>
                                            <th>Title</th>
                                            <th>Type</th>
                                            <th>Coures</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className='divide-y divide-gray-200 child:whitespace-nowrap'>
                                        {
                                            tickets.map((ticket, index) => (
                                                <tr key={ticket._id} className='child:p-4'>
                                                    <td className='text-center'>{index + 1}</td>
                                                    <td>{ticket.user}</td>
                                                    <td>{ticket.title}</td>
                                                    <td>{ticket.departmentSubID}</td>
                                                    <td>{ticket.course ? ticket.course : "---"}</td>
                                                    <td className="py-4text-sm text-gray-500">
                                                        <span className={`px-2 py-1 rounded text-xs text-white ${ticket.answer === 0 ? ' bg-red-500' : 'bg-green-500'}`}>{ticket.answer === 1 ? 'Answerd' : 'Not Answerd'}</span>
                                                    </td>
                                                    <td >
                                                        <div onClick={() => {
                                                            setIsShowViewModal(true)
                                                            setSelectedTicket(ticket.body)

                                                        }} className=' inline-block'>
                                                            <OrginalButton styleBtn='p-2' textBtn='View' />
                                                        </div>
                                                    </td>
                                                    <td >
                                                        <div onClick={() => {
                                                            setIsShowAnswerModal(true)
                                                            setTicketId(ticket._id)
                                                        }} className=" inline-block">
                                                            <OrginalButton styleBtn='p-2' textBtn='Answer' />
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
                    : (
                        <div className='mt-28 px-4 sm:px-8 mb-9'>
                            <SadError text='You dont have any Tickets!' />
                        </div>
                    )}
            
                isShowAnswerModal && <Modal textBtn='Answer' onClose={() => setIsShowAnswerModal(false)} onSubmit={answerToTickets}>
                    <div className="px-6 pb-6 pt-0 space-y-6">
                        <form onSubmit={form.handleSubmit}>
                            <div className="grid grid-cols-12">
                                <div className="col-span-12">
                                    <label htmlFor="body" className="text-sm font-medium text-gray-900 block mb-2">Answer</label>
                                    <textarea name="body" id="body" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main outline-none block max-h-64 min-h-24 w-full p-2.5" placeholder="Hi"
                                        value={form.values.body}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}

                                    />
                                    {
                                        form.errors.body && form.touched.body && <label htmlFor="body" className='text-red-500 text-[13px] block mt-2 ml-1'>{form.errors.body}</label>
                                    }
                                </div>
                            </div>
                            <div className=" text-end mt-6 pt-6 border-t border-gray-200 rounded-b">
                                <button className='py-2.5 px-3.5 btn text-sm' type="submit"><span className='btn_curve'></span>Answer</button>
                            </div>
                        </form>
                    </div>
                </Modal>
            
            
                isShowViewModal && <Modal textBtn='Ok' onClose={() => setIsShowViewModal(false)} onSubmit={() => {
                    setIsShowViewModal(false)
                }}>
                    <div className="px-6 pb-6 pt-0 space-y-6">
                        <p className=''>{selectedTicket}</p>
                    </div>
                </Modal>
             */}

            <Error404 />
             
        </>
    )
}
