"use client"
import Link from 'next/link'
import React from 'react'

const ButtonItem = ({id}) => {
  return (
    <Link href={`/Homes/${id}`} className=" bg-textYellow text-dark rounded-md  p-3 px-5 shadow-yellowShadow  ">
      مشاهده این خانه 
    </Link>
  )
}

export default ButtonItem