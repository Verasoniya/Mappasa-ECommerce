import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";
import { Button } from "../components/Button";

function Header() {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [avatar, setAvatar] = useState("");

  let btn1;
  let btn2;

  useEffect(() => {
    const getToken = localStorage.getItem("userToken");
    setToken(getToken);
  }, [token]);
  console.log(token);

  useEffect(() => {
    const getAvatar = localStorage.getItem("avatar");
    setAvatar(getAvatar);
  }, [avatar]);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("id");
    localStorage.removeItem("avatar");
    window.location.reload(true);
  };

  if (token) {
    btn1 = <Button label={<FaShoppingCart />} onClick={() => handleCart()} />;
    btn2 = <img src={avatar} width={40} height={40} className="rounded-full cursor-pointer" onClick={() => handleLogout()} />;
  } else {
    btn1 = <Button label="Masuk" onClick={() => handleLogin()} />;
    btn2 = <Button label="Daftar" onClick={() => handleRegister()} />;
  }

  const handleLogin = () => {
    navigate("/login");
  };
  const handleRegister = () => {
    navigate("/register");
  };
  const handleCart = () => {
    navigate("/cart");
  };

  return (
    <div className="sticky w-full z-10 top-0 bg-[#F2F2F0] flex justify-between drop-shadow-md">
      <div className="m-5 font-bold text-[#4F826F] self-center">MAPPASA</div>
      <div className="m-5 flex self-center">
        <div className="ml-2 self-center">{btn1}</div>
        <div className="ml-2">{btn2}</div>
      </div>
    </div>
  );
}
export default Header;
