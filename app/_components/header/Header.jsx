import React from "react";
import LinkItem from "./linkItem/LinkItem";
import SignButten from "./signButten/SignButten";

const Header = () => {
  return (
    <div className="px-5 pt-5 ">
      <div className="flex bg-lightDark  items-center  rounded-2xl px-5    justify-between h-20 ">
        <div className="w-3/12   flex justify-around h-full items-center ">
          <LinkItem link={"/"} title={"خانه"} />
          <LinkItem link={"/homes"} title={"مسکن ها"} />
          <LinkItem link={"/rent"} title={"رخن و اجاره"} />
          <LinkItem link={"/help"} title={"پشتیبانی"} />
        </div>
        {/* <div className="w-3/12">j</div> */}
        <div className="w-3/12 flex justify-center ">
        <SignButten/>
        </div>
      </div>
    </div>
  );
};

export default Header;
