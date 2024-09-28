import React from 'react'
import { Link } from 'react-router-dom'

export default function NavMobileSubMenuItem({title,href}) {
    return (
        <li>
            <Link to={`/${href}`} className=' flex hover:text-main justify-between pl-4 leading-8 transition-all duration-500 items-center text-mainBlack capitalize font-InterSB h-11'>
                {title}
            </Link>
        </li>
    )
}
