import React from "react";
import Header from "./Header";
import Category from "./Category";
import Footer from "./Footer";
import Shipping from "./Shipping";

function Layout() {
  return (
    <div className="w-full h-screen">
      <Header />
      <div className="bg-[#4F826F] h-32"></div>
      <div className="flex items-center justify-center">
        <Category />
        <div className="bg-white w-3/4 mt-16 mb-10 flex items-center justify-center">
          <Shipping />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
