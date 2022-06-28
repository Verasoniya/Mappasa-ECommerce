import React from "react";

function Category() {
  return (
    <div className="bg-white w-3/4 flex items-center justify-around h-28 text-2xl font-semibold drop-shadow-xl absolute top-32">
      <div className="hover:text-[#4F826F]">PC</div>
      <div className="hover:text-[#4F826F]">CPU</div>
      <div className="hover:text-[#4F826F]">MONITOR</div>
      <div className="hover:text-[#4F826F]">RAM</div>
      <div className="hover:text-[#4F826F]">MOUSE</div>
    </div>
  );
}

export default Category;
