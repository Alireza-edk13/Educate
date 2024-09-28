import React from 'react'
import FooterLink from '../FooterLink/FooterLink'

export default function FooterPart() {
    return (
        <>
            <h5 className='text-xl mb-6'>Quick Links</h5>
            <ul className=" font-InterR  space-y-3 child:flex child:items-start child:gap-1">
                <FooterLink/>
                <FooterLink/>
                <FooterLink/>
            </ul>
        </>
    )
}
