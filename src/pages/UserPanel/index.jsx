import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../../Components/UserPanel/NavBar/NavBar'
import SideBar from '../../Components/UserPanel/SideBar/SideBar'
export default function index() {
    const [isNavCmsMobileOpen, setIsNavCmsMobileOpen] = useState(false)

    return (
        <>
            <NavBar onActive={() => setIsNavCmsMobileOpen(prevState => !prevState)} />
            <div className='grid grid-cols-12  bg-FooterBg min-h-screen mx-auto bg-cover'>
                <div className=' col-span-12 md:col-span-2 order-1 md:order-none '>
                    <SideBar isNavCmsMobileOpen={isNavCmsMobileOpen} setIsNavCmsMobileOpen={setIsNavCmsMobileOpen} />
                </div>
                <div className=" col-span-12 lg:col-span-10">
                    <div className='mt-28 px-4 sm:px-8 mb-9'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}
