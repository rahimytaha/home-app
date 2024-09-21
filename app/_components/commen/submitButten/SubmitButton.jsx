"use client"
import Link from 'next/link'
import React from 'react'

const SubmitButten = ({fn,title}) => {
  return (
    <button onClick={fn} className=" bg-blue  text-white  rounded-2xl  p-3 px-5 hover:shadow-lg duration-200 hover:border-textYellow border border-transparent   -yellowShadow  ">
      {title}
    </button>
  )
}

export default SubmitButten