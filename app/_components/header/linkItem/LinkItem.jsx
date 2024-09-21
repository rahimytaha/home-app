"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const LinkItem = ({title,link}) => {
    const path = usePathname()
  return (<div className={` ${path == link && "text-textYellow "}  w-full my-auto text-center h-full le`}>
    <div className=" flex items-center h-[95%]   text-center w-full "> 
         <Link className="text-center w-full block " href={link}>{title}</Link>

    </div>
    
   
    <div className={`${path == link ? "bg-textYellow  shadow-yellowShadow  ":"bg-transparent "} rounded-2xl  h-1 `}>

    </div>
  </div>

  )
}

export default LinkItem