import React from "react";
import Rezerve from "./rezerveButton/Rezerve";

const Box = ({ data }) => {
  return (
    <div className="bg-lightDark h-full p-5   w-6/12 rounded-3xl  ">
      <h1 className="text-3xl text-white ">{data.title}</h1>
      <div className="p-2 ">
        <h3 className="my-2">فروشنده:{data.seller}</h3>
        <h3 className="my-2">تعداد خواب :{data.room}</h3>
        <h3 className="my-2">مکان :{data.locate}</h3>
        <h3 className="my-2">متراژ:{data.metrage}</h3>
        <h3 className="my-2">متراژ زیربنا  :{data.infrastructure}</h3>
        <h3 className="my-2">تعداد سرویس :{data.toilet}</h3>
      </div>
      <div>
        <Rezerve id={data.id}/>
        <h2>
            {data.} <span>تومان</span>
        </h2>
        </div>


    </div>
  );
};

export default Box;
