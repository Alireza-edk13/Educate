import React, { useState, useEffect } from 'react'
import TopSectionPanel from '../../../Components/AdminPanel/TopSectionPanel/TopSectionPanel'
import Pagination from '../../../Components/Pagination/Pagination'
import OrginalButton from '../../../Components/OrginalButton/OrginalButton';
import DeleteModal from '../../../Components/AdminPanel/DeleteModal/DeleteModal';
import Modal from '../../../Components/AdminPanel/Modal/Modal';
import useToast from '../../../Components/Toast/Toast';
import SadError from '../../../Components/SadError/SadError';
import { useDeleteMessage, useGetMessage } from '../../../hooks/useMessage';

export default function Message() {

    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
    const [isShowAnswerModal, setIsShowAnswerModal] = useState(false)
    const [isShowViewModal, setIsShowViewModal] = useState(false)

    const [messageId, setMessageId] = useState("");
    const [selectedMessage, setSelectedMessage] = useState("");
    const showToast = useToast()

    // get all messages

    const { data: messages, isLoading } = useGetMessage()




    // answer to message


    const answerToMessage = () => {
        console.log('add');
    }

    // delete message

    const { mutateAsync: deleteMessage } = useDeleteMessage()


    if (isLoading) {
        return <div className='mt-28 px-4 sm:px-8 h-screen'>
            <h3 className="text-xl sm:text-2xl">Loading....</h3>
        </div>

    }

    return (
        <>
            {
                messages?.length ?
                    <div className="mt-28 px-4 sm:px-8 space-y-10 mb-9" >
                        <TopSectionPanel title='Message' spanTitle='Message' />
                        <div className="mt-8 xl:py-4 xl:px-8">
                            <div className="p-4 bg-mainWhite rounded-md overflow-auto">
                                <table className="w-full text-gray-500 overflow-auto">
                                    <thead className="border-b child:whitespace-nowrap">
                                        <tr className='child:text-left child:p-4 text-gray-600'>
                                            <th>Index</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className='divide-y divide-gray-200 child:whitespace-nowrap'>
                                        {
                                            messages?.map((message, index) => (
                                                <tr key={message._id} className='child:p-4'>
                                                    <td className={`text-center`}>{index + 1}</td>
                                                    <td>{message.name}</td>
                                                    <td>{message.email}</td>
                                                    <td>{message.phone}</td>
                                                    <td className="py-4text-sm text-gray-500">
                                                        <span className={`px-2 py-1 rounded text-xs text-white ${message.answer === 0 ? ' bg-red-500' : 'bg-green-500'}`}>{message.answer === 1 ? 'Answerd' : 'Not Answerd'}</span>
                                                    </td>
                                                    <td >
                                                        <div onClick={() => {
                                                            setIsShowViewModal(true)
                                                            setSelectedMessage(message.body)

                                                        }} className=' inline-block'>
                                                            <OrginalButton styleBtn='p-2' textBtn='View' />
                                                        </div>
                                                    </td>

                                                    <td >
                                                        <div onClick={() => setIsShowAnswerModal(true)} className=" inline-block">
                                                            <OrginalButton styleBtn='p-2' textBtn='Answer' />
                                                        </div>
                                                    </td>

                                                    <td >
                                                        <div onClick={() => {
                                                            setIsShowDeleteModal(true)
                                                            setMessageId(message._id)
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
                    : (
                        <div className='mt-28 px-4 sm:px-8 mb-9'>
                            <SadError text='You dont have any Messages!' />
                        </div>
                    )
            }





            {isShowDeleteModal &&
                <DeleteModal onClose={() => setIsShowDeleteModal(false)} onSubmit={() => {
                    deleteMessage(messageId)
                    setIsShowDeleteModal(false)
                }} title='delete  this message?' />
            }

            {
                isShowAnswerModal && <Modal textBtn='Answer' onClose={() => setIsShowAnswerModal(false)} onSubmit={answerToMessage}>
                    <div className="px-6 pb-6 pt-0 space-y-6">
                        <form>
                            <div className="grid grid-cols-12">
                                <div className="col-span-12">
                                    <p className='  mb-6 text-red-500'>You Cant Answer this Message !</p>
                                    <label htmlFor="user-name" className="text-sm font-medium text-gray-900 block mb-2">Answer</label>
                                    <input type="text" name="user-name" id="user-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-2.5" placeholder="Hi" readOnly />
                                </div>
                            </div>
                            <div className=' text-end mt-6'>
                                <OrginalButton styleBtn='p-2' textBtn='Answer Message' readOnly />
                            </div>
                        </form>
                    </div>
                </Modal>
            }
            {
                isShowViewModal && <Modal textBtn='Ok' onClose={() => setIsShowViewModal(false)} onSubmit={() => {
                    setIsShowViewModal(false)
                }}>
                    <div className="px-6 pb-6 pt-0 space-y-6">
                        <p className=''>{selectedMessage}</p>
                    </div>
                </Modal>
            }
        </>
    )
}
