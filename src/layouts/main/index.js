import React from "react";
import { Outlet } from "react-router-dom";
import GeneralApp from "./../../pages/dashboard/GeneralApp";

const MainLayout = () => {
  return (
    <>
      <div>Main Layout</div>
      <Outlet />
    </>
  );
};

export default MainLayout;
