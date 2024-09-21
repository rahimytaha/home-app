import React from "react";
import Rezerve from "./rezerveButton/Rezerve";

const Box = ({ data }) => {
  return (
    <div className="bg-lightDark shadow-innerShadow2  p-5   w-full  rounded-3xl  ">
      <h1 className="text-3xl text-white ">{data.title}</h1>
      <div className="p-2 ">
        <h3 className="my-3      ">فروشنده:{data.seller}</h3>
        <h3 className="my-3     ">تعداد خواب :{data.room}</h3>
        <h3 className="my-3     ">مکان :{data.locate}</h3>
        <h3 className="my-3     ">متراژ:{data.metrage}</h3>
        <h3 className="my-3     ">متراژ زیربنا :{data.infrastructure}</h3>
        <h3 className="my-3     ">تعداد سرویس :{data.toilet}</h3>
        <h3 className="my-3     ">امتیاز :{data.star}</h3>
      </div>
      <div className="flex items-center  justify-between  ">
        <h2 className="text-3xl text-white">
          {data.price} <span className="text-sm text-red ">تومان</span>
        </h2>
        <Rezerve id={data.id} />
      </div>
    </div>
  );
};

export default Box;
