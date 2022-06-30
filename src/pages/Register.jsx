// import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { apiRequest } from "../utils/apiRequest";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisable] = useState(true);

  useEffect(() => {
    if (name && email && password && phone && address) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [name, email, password, phone, address]);

  const handleClick = async (e) => {
    setLoading(true);
    const body = {
      name,
      email,
      password,
      phone,
      address,
    };
    apiRequest("register", "post", body)
      .then((res) => {
        if (res.message === "success") {
          navigate("/login");
        }
        alert(res.message);
      })
      .catch((err) => {
        const { message } = err.response.data;
        alert(message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="w-full h-min min-h-screen h-auto flex flex-col justify-between p-8 bg-[#F2F2F0]">
      <div className="self-center font-bold text-[#4F826F] text-3xl mb-8 md:mb-0">
        MAPPASA
      </div>
      <div className="self-center flex flex-col md:flex-row justify-between">
        <div className="flex flex-col justify-center w-full md:w-1/3 mb-12 md:mb-0">
          <img src={Logo} alt="logo" className="w-full rounded-full" />
          <p className="font-bold text-md mt-6  text-center">
            Jual Beli Mudah Hanya di Mappasa
          </p>
          <p className="text-base  text-center">
            Gabung dan rasakan kemudahan bertransaksi di Mappasa
          </p>
        </div>
        <div className="flex flex-col justify-center w-full md:w-1/2 lg:w-1/3 h-full self-center">
          <div className="bg-[#F2F2F0] drop-shadow-md p-8 rounded-md font-semibold h-4/5">
            <p className="text-center text-md">Daftar Sekarang</p>
            <div className="flex justify-center mb-8 text-sm">
              <p>sudah punya akun Mappasa?</p>
              <a href="/" className="text-[#4F826F] ml-2">
                masuk
              </a>
            </div>
            <div className="mb-4 font-normal">
              <Input
                type="text"
                placeholder="Name lengkap"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4 font-normal">
              <Input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4 font-normal">
              <Input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4 font-normal">
              <Input
                type="tel"
                placeholder="Telepon"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-12 font-normal">
              <Input
                type="text"
                placeholder="Alamat"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <Button
              label="Daftar"
              loading={loading || disabled}
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
      <div className="flex self-center mt-8 md:mt-0">
        <p>&copy; 2022 |</p>{" "}
        <p className="text-[#4F826F] ml-1"> Mappasa Project</p>
      </div>
    </div>
  );
}

export default Register;
