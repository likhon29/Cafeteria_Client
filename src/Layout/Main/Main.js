import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import Navbar2 from './../../Pages/Shared/Navbar/Navbar2';

const Main = () => {
  return (
    <div>
      <Navbar2></Navbar2>
      <div className="max-w-[1440px] mx-auto relative">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Main;
