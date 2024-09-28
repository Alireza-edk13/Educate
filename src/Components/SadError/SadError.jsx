import React from 'react'
import { FaSadTear } from "react-icons/fa";
export default function SadError({ text }) {
    return (
        <div className="mt-8 xl:py-16 xl:px-8">
            <div className=" px-4 mx-auto max-w-screen-xl py-8 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <div className=" flex-center">
                        <FaSadTear className=" text-main text-[10rem] sm:text-[12rem]" />
                    </div>
                    <p className="my-8 text-lg sm:text-xl font-light text-main">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )
}
