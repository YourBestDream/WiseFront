import React from "react";
import VideoResult from "../components/VideoResult";

const Results = () => {
  return (
    <div className="bg-primary min-h-[100vh]">
      <div className="w-[97%] bg-tertiary min-h-[100vh] my-0 mx-auto px-[16px] pt-[70px] lg:pt-[90px] pb-[5px]">
        <VideoResult />
        <VideoResult />
        <VideoResult />
        <VideoResult />
        <VideoResult />
        <VideoResult />
        <VideoResult />
      </div>
    </div>
  );
};

export default Results;
