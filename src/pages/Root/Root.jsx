import React from "react";
import Navbar from "../../component/Header/Navbar";
import { Outlet } from "react-router";
import Footer from "../../component/Footer/Footer";

const Root = () => {
  return (
    <div className="container mx-auto px-3">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
