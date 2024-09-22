import React from "react";
import "../globals.css";
import Image from "next/image";

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`bg-dark text-textColor flex justify-center  text-lg h-screen font-bold items-center   antialiased`}
      >
        <div
          dir="rtl"
          className="relative h-5/6 w-10/12 shadow-xl flex items-center  justify-center  "
        >
          <img
            alt="Picture of the home"
            className="h-full w-full absolute rounded-2xl  "
            src="https://marvel-b1-cdn.bc0a.com/f00000000266467/www.grandhomes.com/images/b2.jpg"
          />
          <div className="backdrop-blur min-h-[500px] max-w-[600px]  rounded-2xl shadow-xl  w-4/12  p-10 z-10 relative ">
            <h1 className="text-2xl font-bold text-center ">خوش آمدید کاربر گرامی! </h1>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
};

export default layout;
