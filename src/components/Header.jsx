import React from "react";

function Header() {
  return (
    <div className="sticky top-0 bg-[#F2F2F0]  flex justify-between">
      <div className="m-5 font-bold text-[#4F826F]">MAPPASA</div>
      <div className="m-5 flex">
        <div className="ml-2  bg-[#4F826F] px-4 py-1 rounded-md">
          <button className="text-white font-bold">Masuk</button>
        </div>
        <div className="ml-2 bg-[#4F826F] px-4 py-1 rounded-md">
          <button className="text-white font-bold">Daftar</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
