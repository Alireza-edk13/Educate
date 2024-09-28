import React, { useState } from 'react'
import TopSectionPanel from '../../../Components/AdminPanel/TopSectionPanel/TopSectionPanel'
import Pagination from '../../../Components/Pagination/Pagination'
import AddModal from '../../../Components/AdminPanel/AddModal/AddModal';
import OrginalButton from '../../../Components/OrginalButton/OrginalButton';
import EditModal from '../../../Components/AdminPanel/EditModal/EditModal';
import DeleteModal from '../../../Components/AdminPanel/DeleteModal/DeleteModal';
import { FaStar } from 'react-icons/fa6';
import Error404 from '../../../Components/AdminPanel/Error404/Error404';
export default function Comments() {

    const [isShowEditModal, setIsShowEditModal] = useState(false)
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
    const [isShowBanModal, setIsShowBanModal] = useState(false)
    const [isShowAnswerModal, setIsShowAnswerModal] = useState(false)
    const [isShowAcceptModal, setIsShowAcceptModal] = useState(false)
    const [isShowViewModal, setIsShowViewModal] = useState(false)

    const addNewComment = () => {
        console.log('add');
    }
    const updateCommentInfo = () => {
        console.log('update');
    }
    const deleteComment = () => {
        console.log('delete');
    }
    const banUser = () => {
        console.log('ban');
    }
    return (
        <>
            {/* <div className="mt-28 px-4 sm:px-8 space-y-10 mb-9" >
                <TopSectionPanel title='Comments' spanTitle='Comments' />
                <div className="mt-8 xl:py-4 xl:px-8">
                    <div className="p-4 bg-mainWhite rounded-md overflow-auto">
                        <table className="w-full text-gray-500 overflow-auto">
                            <thead className="border-b child:whitespace-nowrap">
                                <tr className='child:text-left child:p-4 text-gray-600'>
                                    <th>Index</th>
                                    <th>User</th>
                                    <th>Course</th>
                                    <th>Star</th>
                                </tr>
                            </thead>
                            <tbody className='divide-y divide-gray-200 child:whitespace-nowrap'>
                                <tr className='child:p-4'>
                                    <td className=' text-center'>1</td>
                                    <td>Edward kop</td>
                                    <td>Adobe Xd</td>
                                    <td className=' flex-center mt-3 text-yellow-400 gap-2'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowViewModal(true)} className=' inline-block'>
                                            <OrginalButton styleBtn='p-2' textBtn='View' />
                                        </div>
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowAcceptModal(true)} className=" inline-block">
                                            <OrginalButton styleBtn='p-2' textBtn='Accept' />
                                        </div>
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowAnswerModal(true)} className=" inline-block">
                                            <OrginalButton styleBtn='p-2' textBtn='Answer' />
                                        </div>
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowEditModal(true)} className=" inline-block">
                                            <OrginalButton styleBtn='p-2' textBtn='Edit' />
                                        </div>
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowDeleteModal(true)} className=" inline-block">
                                            <OrginalButton styleBtn='p-2 bg-red-500' textBtn='Delete' />
                                        </div>
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowBanModal(true)} className=" inline-block">
                                            <OrginalButton styleBtn='p-2 bg-red-600' textBtn='Ban User' />
                                        </div>
                                    </td>
                                </tr>
                                <tr className='child:p-4'>
                                    <td className=' text-center'>2</td>
                                    <td>Edward kop</td>
                                    <td>Adobe Xd</td>
                                    <td className=' flex-center mt-3 text-yellow-400 gap-2'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowViewModal(true)} className=' inline-block'>
                                            <OrginalButton styleBtn='p-2' textBtn='View' />
                                        </div>
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowAcceptModal(true)} className=" inline-block">
                                            <OrginalButton styleBtn='p-2' textBtn='Accept' />
                                        </div>
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowAnswerModal(true)} className=" inline-block">
                                            <OrginalButton styleBtn='p-2' textBtn='Answer' />
                                        </div>
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowEditModal(true)} className=" inline-block">
                                            <OrginalButton styleBtn='p-2' textBtn='Edit' />
                                        </div>
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowDeleteModal(true)} className=" inline-block">
                                            <OrginalButton styleBtn='p-2 bg-red-500' textBtn='Delete' />
                                        </div>
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowBanModal(true)} className=" inline-block">
                                            <OrginalButton styleBtn='p-2 bg-red-600' textBtn='Ban User' />
                                        </div>
                                    </td>
                                </tr>
                                <tr className='child:p-4'>
                                    <td className=' text-center'>3</td>
                                    <td>Edward kop</td>
                                    <td>Adobe Xd</td>
                                    <td className=' flex-center mt-3 text-yellow-400 gap-2'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowViewModal(true)} className=' inline-block'>
                                            <OrginalButton styleBtn='p-2' textBtn='View' />
                                        </div>
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowAcceptModal(true)} className=" inline-block">
                                            <OrginalButton styleBtn='p-2' textBtn='Accept' />
                                        </div>
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowAnswerModal(true)} className=" inline-block">
                                            <OrginalButton styleBtn='p-2' textBtn='Answer' />
                                        </div>
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowEditModal(true)} className=" inline-block">
                                            <OrginalButton styleBtn='p-2' textBtn='Edit' />
                                        </div>
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowDeleteModal(true)} className=" inline-block">
                                            <OrginalButton styleBtn='p-2 bg-red-500' textBtn='Delete' />
                                        </div>
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowBanModal(true)} className=" inline-block">
                                            <OrginalButton styleBtn='p-2 bg-red-600' textBtn='Ban User' />
                                        </div>
                                    </td>
                                </tr>
                                <tr className='child:p-4'>
                                    <td className=' text-center'>4</td>
                                    <td>Edward kop</td>
                                    <td>Adobe Xd</td>
                                    <td className=' flex-center mt-3 text-yellow-400 gap-2'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowViewModal(true)} className=' inline-block'>
                                            <OrginalButton styleBtn='p-2' textBtn='View' />
                                        </div>
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowAcceptModal(true)} className=" inline-block">
                                            <OrginalButton styleBtn='p-2' textBtn='Accept' />
                                        </div>
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowAnswerModal(true)} className=" inline-block">
                                            <OrginalButton styleBtn='p-2' textBtn='Answer' />
                                        </div>
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowEditModal(true)} className=" inline-block">
                                            <OrginalButton styleBtn='p-2' textBtn='Edit' />
                                        </div>
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowDeleteModal(true)} className=" inline-block">
                                            <OrginalButton styleBtn='p-2 bg-red-500' textBtn='Delete' />
                                        </div>
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowBanModal(true)} className=" inline-block">
                                            <OrginalButton styleBtn='p-2 bg-red-600' textBtn='Ban User' />
                                        </div>
                                    </td>
                                </tr>
                                <tr className='child:p-4'>
                                    <td className=' text-center'>5</td>
                                    <td>Edward kop</td>
                                    <td>Adobe Xd</td>
                                    <td className=' flex-center mt-3 text-yellow-400 gap-2'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowViewModal(true)} className=' inline-block'>
                                            <OrginalButton styleBtn='p-2' textBtn='View' />
                                        </div>
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowAcceptModal(true)} className=" inline-block">
                                            <OrginalButton styleBtn='p-2' textBtn='Accept' />
                                        </div>
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowAnswerModal(true)} className=" inline-block">
                                            <OrginalButton styleBtn='p-2' textBtn='Answer' />
                                        </div>
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowEditModal(true)} className=" inline-block">
                                            <OrginalButton styleBtn='p-2' textBtn='Edit' />
                                        </div>
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowDeleteModal(true)} className=" inline-block">
                                            <OrginalButton styleBtn='p-2 bg-red-500' textBtn='Delete' />
                                        </div>
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowBanModal(true)} className=" inline-block">
                                            <OrginalButton styleBtn='p-2 bg-red-600' textBtn='Ban User' />
                                        </div>
                                    </td>
                                </tr>
                                <tr className='child:p-4'>
                                    <td className=' text-center'>6</td>
                                    <td>Edward kop</td>
                                    <td>Adobe Xd</td>
                                    <td className=' flex-center mt-3 text-yellow-400 gap-2'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowViewModal(true)} className=' inline-block'>
                                            <OrginalButton styleBtn='p-2' textBtn='View' />
                                        </div>
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowAcceptModal(true)} className=" inline-block">
                                            <OrginalButton styleBtn='p-2' textBtn='Accept' />
                                        </div>
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowAnswerModal(true)} className=" inline-block">
                                            <OrginalButton styleBtn='p-2' textBtn='Answer' />
                                        </div>
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowEditModal(true)} className=" inline-block">
                                            <OrginalButton styleBtn='p-2' textBtn='Edit' />
                                        </div>
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowDeleteModal(true)} className=" inline-block">
                                            <OrginalButton styleBtn='p-2 bg-red-500' textBtn='Delete' />
                                        </div>
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowBanModal(true)} className=" inline-block">
                                            <OrginalButton styleBtn='p-2 bg-red-600' textBtn='Ban User' />
                                        </div>
                                    </td>
                                </tr>
                                <tr className='child:p-4'>
                                    <td className=' text-center'>7</td>
                                    <td>Edward kop</td>
                                    <td>Adobe Xd</td>
                                    <td className=' flex-center mt-3 text-yellow-400 gap-2'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowViewModal(true)} className=' inline-block'>
                                            <OrginalButton styleBtn='p-2' textBtn='View' />
                                        </div>
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowAcceptModal(true)} className=" inline-block">
                                            <OrginalButton styleBtn='p-2' textBtn='Accept' />
                                        </div>
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowAnswerModal(true)} className=" inline-block">
                                            <OrginalButton styleBtn='p-2' textBtn='Answer' />
                                        </div>
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowEditModal(true)} className=" inline-block">
                                            <OrginalButton styleBtn='p-2' textBtn='Edit' />
                                        </div>
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowDeleteModal(true)} className=" inline-block">
                                            <OrginalButton styleBtn='p-2 bg-red-500' textBtn='Delete' />
                                        </div>
                                    </td>
                                    <td >
                                        <div onClick={() => setIsShowBanModal(true)} className=" inline-block">
                                            <OrginalButton styleBtn='p-2 bg-red-600' textBtn='Ban User' />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <Pagination />
            </div> */}
            <Error404/>
        </>



    )
}
