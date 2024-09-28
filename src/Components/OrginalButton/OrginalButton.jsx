import React from 'react'

export default function OrginalButton({textBtn,styleBtn}) {
  return (
    <button className={`${styleBtn} btn text-sm`} type="submit"><span className='btn_curve'></span>{textBtn}</button>
  )
}
