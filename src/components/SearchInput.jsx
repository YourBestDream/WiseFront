import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchInput = () => {
  return (
    <div className="relative">
      <input
        className="w-[205px] md:w-[300px] lg:w-[690px] h-[24px] lg:h-[40px] bg-white rounded-full p-2 text-[12px] lg:text-[18px] pr-6 lg:pr-10"
        type="text"
        placeholder="How to install mods"
      />
      <FiSearch className="absolute top-[13px] lg:top-[20px] right-[8px] -translate-y-[50%] w-[12px] h-[12px] lg:w-[20px] lg:h-[20px]" />
    </div>
  );
};

export default SearchInput;
