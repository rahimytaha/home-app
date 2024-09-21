import React from "react";
import HomeCart from "../commen/homeCart/HomeCart";


const Homes = () => {
    const data=[
        {image:"https://elementreedrafting.com.au/wp-content/uploads/2015/05/What-makes-a-home-a-Luxury-Home.jpg",title:"خانه در شرق اکباتان",price:17000000,id:1}

    ]
  return (
    <div className="flex my-10 gap-5 ">
      {data.map(el=><HomeCart data={el} />)}
      {data.map(el=><HomeCart data={el} />)}
      {data.map(el=><HomeCart data={el} />)}
      {data.map(el=><HomeCart data={el} />)}
    </div>
  );
};

export default Homes;
