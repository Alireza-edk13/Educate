import React from 'react'
export default function Error500({error}) {
    return (
        <div className="py-8 px-4 mx-auto w-screen bg-cover bg-FooterBg min-h-screen  flex-center lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
                <h1 className="mb-6 text-7xl tracking-tight font-extrabold lg:text-9xl text-main">500</h1>
                <p className="mb-6 text-3xl tracking-tight font-bold text-main md:text-4xl">Something Went Wrong!</p>
                <p className="mb-6 text-lg font-light text-mainGray">
                    {error}
                </p>
            </div>
        </div>
    )
}
