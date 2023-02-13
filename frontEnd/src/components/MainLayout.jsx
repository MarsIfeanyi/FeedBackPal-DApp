import React from "react";
import Header from "./Header";
import ConnectWallet from "./ConnectWallet";

const MainLayout = () => {
  return (
    <div>
      <div className="flex flex-col space-y-6 space-x-0 md:flex-row  md:justify-between 10 text-4xl text-blue-600 ml-10 mt-10  ">
        <Header />
        <ConnectWallet />
      </div>
    </div>
  );
};

export default MainLayout;
