"use client";
import React from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { useState } from "react";

const Pictures = ({ data }) => {
  const [number, setNumber] = useState(0);
  return (
    <div className="h-[700px] w-[800px] relative ">
      <FaChevronCircleRight
        className="absolute z-10 right-5 top-2/4 translate-y-[-50%] cursor-pointer hover:text-white duration-200 "
        size="32"
        onClick={e=>setNumber(index=>index-1)}
      />
      <FaChevronCircleLeft
        className="absolute z-10 left-5 top-2/4 translate-y-[-50%] cursor-pointer hover:text-white duration-200 "
        size="32"
        onClick={e=>setNumber(index=>index+1)}
      />
      <img
        className="h-[700px] w-[800px] rounded-3xl "
        src={data[number]?.link}
        alt=""
      />
      <div className="absolute h-5 bottom-5 flex gap-2 justify-center  w-full  z-10 ">
        {data.map((el,index)=><div onClick={e=>setNumber(index)} className={`w-5 rounded-full cursor-pointer duration-150   ${number==index?" bg-blue ":"bg-blue/50  "}`}>

        </div>)}
      </div>

    </div>
  );
};

export default Pictures;
