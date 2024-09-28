import React from 'react'
import { Link } from 'react-router-dom';

export default function Button({href,styleBtn,text}) {
    return (
        <Link to={href} className={`btn ${styleBtn}`}><span className='btn_curve'></span>{text}</Link>
    )
}
