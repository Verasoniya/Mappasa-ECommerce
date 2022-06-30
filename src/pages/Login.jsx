import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";

import { apiRequest } from "../utils/apiRequest";
import { TokenContext } from "../utils/context";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

import Logo from "../assets/logo.jpg";
function Login() {
  const { token, setToken } = useContext(TokenContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (email && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      email,
      password,
    };
    apiRequest("login", "post", body)
      .then((res) => {
        const { data } = res;
        const { token } = data;

        localStorage.setItem("token", token);

        setToken(token);

        localStorage.setItem("id", data.ID);
        localStorage.setItem("avatar", data.avatar);
        alert("Login Berhasil");
        navigate("/homepage");
        console.log(data.ID);
        console.log(data.token);
      })
      .catch((err) => alert(err));
    console.log(email);
    console.log(password);
  };

  if (token === "0" || token == null) {
    return (
      <div className="w-full min-h-screen h-auto flex flex-col justify-between p-8 bg-[#F2F2F0]">
        <div className="self-center font-bold text-[#4F826F] text-3xl mb-8 md:mb-0">MAPPASA</div>
        <div className="self-center flex flex-col md:flex-row justify-between">
          <div className="flex flex-col justify-center w-full md:w-1/3 mb-12 md:mb-0">
            <img src={Logo} className="w-full rounded-full" />
            <p className="font-bold text-md mt-6  text-center">Jual Beli Mudah Hanya di Mappasa</p>
            <p className="text-base  text-center">Gabung dan rasakan kemudahan bertransaksi di Mappasa</p>
          </div>
          <div className="flex flex-col justify-center w-full md:w-1/2 lg:w-1/3 h-full self-center">
            <div className="bg-[#F2F2F0] drop-shadow-md p-8 rounded-md font-semibold h-4/5">
              <p className="text-center text-md">Masuk ke akunmu</p>
              <div className="flex justify-center mb-8 text-sm">
                <p>belum punya akun Mappasa?</p>
                <a href="/" className="text-[#4F826F] ml-2">
                  daftar
                </a>
              </div>
              <div className="mb-4 font-normal">
                <Input type="email" placeholder="Email" id="input-email" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="mb-12 font-normal">
                <Input type="password" placeholder="Password" id="input-password" onChange={(e) => setPassword(e.target.value)} />
              </div>
              <Button label="Login" loading={loading || disabled} onClick={(e) => handleSubmit(e)} disabled={email.length === 0 || password.length === 0} />
            </div>
          </div>
        </div>
        <div className="flex self-center mt-8 md:mt-0">
          <p>&copy; 2022 |</p> <p className="text-[#4F826F] ml-1"> Mappasa Project</p>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/homepage" />;
  }
}

export default Login;
