import React from "react";
import TopBar from "../components/TopBar";
import Card from "../components/Card";

const Profile = () => {
  return (
    <div className="bg-primary">
      <div className="p-[20px] grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <Card>
          <div className="p-[20px] grid grid-cols-2 grid-rows-3 gap-6">
            <div className="xl:col-span-2 col-span-1 col-start-2 flex flex-col justify-center">
              <h3 className="text-primary text-center xl:text-2xl text:md">
                Channel Name
              </h3>
              <h3 className="text-primary font-bold text-center xl:text-2xl text:md">
                SuperKiller1337
              </h3>
            </div>
            <div className="xl:row-span-2 row-start-1 row-span-3 flex justify-center items-center">
              <div
                className={`bg-[url('https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png')] md:w-[240px] md:h-[240px] w-[150px] h-[150px] bg-cover rounded-full`}></div>
            </div>
            <div className="flex justify-center flex-col items-center xl:items-start">
              <h3 className="text-primary font-bold xl:text-xl text:sm">
                1st Video
              </h3>
              <h3 className="text-primary xl:text-xl text:md">12/02/2014</h3>
            </div>
            <div className="flex justify-center flex-col items-center xl:items-start">
              <h3 className="text-primary font-bold xl:text-xl text:md">
                Registered
              </h3>
              <h3 className="text-primary xl:text-xl text:md">12/02/2010</h3>
            </div>
          </div>
        </Card>
        <Card>
          <h2>Hello</h2>
        </Card>
        <Card classAdd="lg:col-span-2">
          <h2>Hello</h2>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
