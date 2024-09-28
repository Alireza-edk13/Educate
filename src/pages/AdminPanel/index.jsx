import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../../Components/AdminPanel/SideBar/SideBar'
import NavBar from '../../Components/AdminPanel/NavBar/NavBar'
export default function index() {


  const [isNavCmsMobileOpen, setIsNavCmsMobileOpen] = useState(false)

  return (
    <>
      <NavBar onActive={() => setIsNavCmsMobileOpen( prevState => !prevState)} />
      <div className='grid grid-cols-12  bg-FooterBg min-h-screen mx-auto bg-cover'>
        <div className="md:col-span-2">
          <SideBar isNavCmsMobileOpen={isNavCmsMobileOpen} setIsNavCmsMobileOpen={setIsNavCmsMobileOpen} />
        </div>
        <div className=" col-span-12 lg:col-span-10">
          <Outlet />
        </div>
      </div>
    </>
  )
}
