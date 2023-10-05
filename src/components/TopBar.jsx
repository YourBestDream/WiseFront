import React, { useEffect } from "react";
import SearchInput from "./SearchInput";
import { FiMenu } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../features/sideBarSlice";

const TopBar = () => {
  const dispath = useDispatch();
  return (
    <div className="fixed top-0 left-0 flex w-full h-[50px] lg:h-[70px] justify-center bg-secondary items-center shadow-topBar z-[1000]">
      <FiMenu
        onClick={() => dispath(toggleSideBar())}
        className="w-[24px] h-[24px] lg:w-[30px] lg:h-[30px] xl:hidden md:left-[53px] left-[26px] absolute "
        color="white"
      />
      <img
        src={require("../assets/wise_logo.png")}
        className=" hidden xl:block absolute left-[75px]"
        alt=""
      />
      <SearchInput />
      <VscAccount
        color="white"
        className="h-[24px] w-[24px] lg:w-[30px] lg:h-[30px] xl:w-[40px] xl:h-[40px] md:right-[53px] right-[26px] absolute"
        alt=""
      />
    </div>
  );
};

export default TopBar;
