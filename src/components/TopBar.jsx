import React, { useEffect } from "react";
import SearchInput from "./SearchInput";
import { FiMenu } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../features/sideBarSlice";
import { setText } from "../features/searchSlice";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const search = useSelector((state) => state.search.text);
  const onSearch = (text) => {
    if (text.trim() !== "") {
      dispatch(setText(text));
      navigate("/results");
    } else {
      console.log("not good");
    }
  };

  return (
    <div className="fixed top-0 left-0 flex w-full h-[50px] lg:h-[70px] justify-center bg-secondary items-center shadow-topBar z-[1000]">
      <FiMenu
        onClick={() => dispatch(toggleSideBar())}
        className="w-[24px] h-[24px] lg:w-[30px] lg:h-[30px] xl:hidden md:left-[53px] left-[26px] absolute "
        color="white"
      />
      <img
        src={require("../assets/wise_logo.png")}
        className=" hidden xl:block absolute left-[75px]"
        alt=""
      />
      <SearchInput onSearch={onSearch} />
      <VscAccount
        color="white"
        className="h-[24px] w-[24px] lg:w-[30px] lg:h-[30px] xl:w-[40px] xl:h-[40px] md:right-[53px] right-[26px] absolute"
        alt=""
      />
    </div>
  );
};

export default TopBar;
