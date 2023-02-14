import React from "react";
import Header from "./Header";
import UserAuth from "./UserAuth";

const MainLayout = () => {
  return (
    <div>
      <div className="flex flex-col space-y-6 space-x-0 md:flex-row  md:justify-between 10  text-blue-600 ml-10  ">
        <Header />

        <UserAuth />
      </div>
    </div>
  );
};

export default MainLayout;
