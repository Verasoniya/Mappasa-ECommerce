import React from "react";
import Header from "./Header";
import Category from "./Category";
import Footer from "./Footer";

function Layout(props) {
  return (
    <div className="w-full min-h-screen h-auto">
      <Header />
      <div className="bg-[#4F826F] h-32"></div>
      <div className="flex flex-col items-center justify-center ">
        <Category />
        <div className="bg-white w-3/4 mt-16 mb-10 flex items-center">{props.children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
