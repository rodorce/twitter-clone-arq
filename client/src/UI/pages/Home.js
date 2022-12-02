import React from "react";
import Feed from "../Twitter/Feed";
import Sidebar from "../Twitter/Sidebar";

export const Home = () => {
  return (
    <>
      <div className="flex flex-row">
        <Sidebar />
        <Feed />
        <div className="w-1/3 bg-black"></div>
      </div>
    </>
  );
};
