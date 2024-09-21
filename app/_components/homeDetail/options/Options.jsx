import React from 'react'
import { IoIosInformationCircleOutline } from "react-icons/io";
import { CiStar } from "react-icons/ci";
const Options = ({data}) => {
  return (
    <div className="bg-lightDark shadow-innerShadow2  p-5   w-full  rounded-3xl  my-5 ">
        <h1 className="text-2xl text-white flex gap-1 items-center ">با ویژگی و آپشن های این خانه بیشتر آشنا شوید <IoIosInformationCircleOutline size={32} className="mt-1  opacity-70 cursor-pointer " /></h1>
      <div className="flex gap-3 flex-wrap  my-5 ">{data?.map(el=><div className="p-3 rounded-lg flex items-center gap-1    bg-blue/90  text-white ">
           <CiStar size={26} /> {el.name}
        </div>)}
        
        </div>  
    </div>
  )
}

export default Options