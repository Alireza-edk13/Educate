import React from 'react'
import { FaStar } from "react-icons/fa";
export default function CommentsCart() {
    return (
        <>
            <div className="relative group mt-32 !flex flex-col mb-6 md:mb-auto md:flex-row items-center justify-end max-w-[665px]  ml-auto">
                <div className="commentAfterPic mt-6 mr-8 mb-4 ml-0 group-hover:after:top-0  group-hover:after:left-0 flex-shrink-0 relative md:m-auto md:ml-7">
                    <img className=' rounded-2xl' src="images/comments/commentPic.webp" alt="comment" />
                    <div className=" size-36 absolute right-0 bottom-0 rounded-br-[79rem] bg-commentsRgba rounded-tl-full  "></div>
                </div>
                <div className=" relative pt-6 pr-6 pb-12 md:pb-14 pl-6 md:pl-5 bg-mainWhite rounded-2xl md:rounded-tr-2xl md:rounded-br-2xl">
                    <div className="">
                        <h4 className="mb-4 font-InterSB text-[22.462px]">Jophie Alen</h4>
                        <div className=' flex  gap-2 items-center mb-4'>
                            <FaStar color='#0aa6d7' fontSize={18} />
                            <FaStar color='#0aa6d7' fontSize={18} />
                            <FaStar color='#0aa6d7' fontSize={18} />
                            <FaStar color='#0aa6d7' fontSize={18} />
                            <FaStar color='#0aa6d7' fontSize={18} />

                        </div>
                        <p className=" text-mainGray text-base lg:text-sm xl:text-base">Lorem ipsum dolor sit amet consectetur. Non convallis sed id aliquam
                            tempus. Volutpat tortor tincidunt egestas sit risus donec.</p>
                    </div>
                    <img className=" h-[116px] w-full absolute right-0 rounded-[10px] md:rounded-none  md:rounded-br-[10px] bottom-0" src="/images/ourTeachers/feture-bg-shape.webp" alt="shape"></img>
                </div>

            </div>
        </>
    )
}
