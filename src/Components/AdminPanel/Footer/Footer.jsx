import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="flex justify-between rounded-md mt-4 px-8 py-4 text-gray-500 border-2 text-xs font-bold bg-mainWhite">
            <div className="plex space-x-4 child-hover:text-main transition-all">
                <Link>User Guide</Link>
                <Link className="font-bold ">FAQ</Link>
                <Link className="font-bold ">Support</Link>
            </div>
            <div>© 2024 Alireza</div>
        </footer>
    )
}
