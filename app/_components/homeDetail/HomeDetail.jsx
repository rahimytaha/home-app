import React from "react";
import Pictures from "./pictures/Pictures";
import Box from "./box/Box";

const HomeDetail = ({ id }) => {
  const data = {
    id: 1,
    pictures: [
      {
        id: 1,
        link: "https://images.squarespace-cdn.com/content/v1/65a8583b3f2bb32732bff587/63ff3986-3c95-4422-bdaa-6a373b71140d/Custom-Luxury-Home-Dallas.jpg",
      },
      {
        id: 1,
        link: "https://cms.interiorcompany.com/wp-content/uploads/2023/11/simple-home-design-Warm-grey-exteriors.png",
      },
    ],
    title:"بهترین خانع ویلایی در اکباتان ایران تهران",
    seller:"taha rahimy",
    room:3,
    price:"3000000",
    options:[{id:1,namr:"فلان آپشن"},{id:2,namr:"فلان آپشن"},{id:3,namr:"فلان آپشن"},{id:4,namr:"فلان آپشن"},{id:5,namr:"فلان آپشن"}],
    location:[1,1],
    locate:"ایران, تهران , اکباتان ",
    metrage:"3,200",
    unit:"metere",
    infrastructure:"3,000",
    toilet:3
  };
  return (
    <div className="p-5 ">
      <div className="flex justify-between  h-96 gap-24 ">
      <Box data={data} />
        <Pictures data={data.pictures} />
      </div>
    </div>
  );
};

export default HomeDetail;
