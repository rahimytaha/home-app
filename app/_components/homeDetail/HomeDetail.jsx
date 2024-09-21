import React from "react";
import Pictures from "./pictures/Pictures";

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
    title:"a beauty home in Tehran",

  };
  return (
    <div className="p-5 ">
      <div className="flex justify-between  h-96 gap-24 ">
      <div className="w-6/12"></div>
        <Pictures data={data.pictures} />
      </div>
    </div>
  );
};

export default HomeDetail;
