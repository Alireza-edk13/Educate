import React from 'react'

export default function Loading() {
    return (
        <div className=' flex-center z-50 h-screen w-screen bg-white'>
            <div className="rounded-md h-12 w-12 border-4 border-t-4 border-main animate-spin absolute"></div>
        </div>
    )
}
