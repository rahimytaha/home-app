import Link from 'next/link'
import React from 'react'

const SignButten = () => {
  return (
    <div className="rounded-full h-14 shadow-innerShadow   w-56  flex items-center text-lg     ">

        <Link href="/register" className="    flex justify-center items-center  rounded-full text-white  w-7/12 h-full  bg-blue ">
            ثبت نام
        </Link>
        <Link href="/login" className="  flex justify-center items-center rounded-full text-white pb-1   w-4/12 h-full   ">
        <p>ورود</p>
            
        </Link>

    </div>
  )
}

export default SignButten