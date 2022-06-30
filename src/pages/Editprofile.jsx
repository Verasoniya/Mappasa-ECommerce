import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { apiRequest } from "../utils/apiRequest";
import axios from "axios";
import { Input } from "../components/Input";

const Editprofile = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [visibilityName, setVisibilityName] = useState(true);
  const [visibilityEmail, setVisibilityEmail] = useState(true);
  const [visibilityTelephone, setVisibilityTelephone] = useState(true);
  const [visibilityAddress, setVisibilityAddress] = useState(true);
  const id = localStorage.getItem("id");
  // const token = localStorage.getItem("userToken");

  useEffect(() => {
    apiRequest(`/users/${id}`, "get", {})
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        const { message } = err.response.data;
        alert(message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleVisibilityName = () => {
    if (visibilityName === true) {
      setVisibilityName(!visibilityName);
    } else {
      axios
        .put(`http://54.151.23.147/users/${id}`, data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally((data) => console.log(data));

      setVisibilityName(!visibilityName);
    }
  };

  const handleVisibilityEmail = () => {
    if (visibilityEmail === true) {
      setVisibilityEmail(!visibilityEmail);
    } else {
      axios
        .put(`http://54.151.23.147/users/${id}`, data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally((data) => console.log(data));

      setVisibilityEmail(!visibilityEmail);
    }
  };

  const handleVisibilityPhone = () => {
    if (visibilityTelephone === true) {
      setVisibilityTelephone(!visibilityTelephone);
    } else {
      axios
        .put(`http://54.151.23.147/users/${id}`, data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally((data) => console.log(data));

      setVisibilityTelephone(!visibilityTelephone);
    }
  };

  const handleVisibilityAddress = () => {
    if (visibilityAddress === true) {
      setVisibilityAddress(!visibilityAddress);
    } else {
      axios
        .put(`http://54.151.23.147/users/${id}`, data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally((data) => console.log(data));

      setVisibilityAddress(!visibilityAddress);
    }
  };

  return (
    <div className="w-full min-h-screen h-auto">
      <Header />
      <div className="bg-[#4F826F] h-32"></div>
      <div className="flex flex-col items-center justify-center ">
        <div className="flex">
          <div className="mr-10 my-20 mb-10 p-10">
            <img src={data.avatar} alt="avatar" className=" w-48" />
          </div>
          <div className="bg-white w-full my-20 mb-10 p-5">
            <div>Ubah Biodata Diri</div>
            <div className="grid grid-cols-3 gap-5">
              <div>Nama</div>
              <div>
                {visibilityName ? (
                  data.name
                ) : (
                  <Input
                    onChange={(e) =>
                      setData((prevData) => ({
                        ...prevData,
                        name: e.target.value,
                      }))
                    }
                  />
                )}
              </div>
              <div>
                <a
                  href="#"
                  className="text-[#4F826F] hover:text-green-500"
                  onClick={handleVisibilityName}
                >
                  {visibilityName ? "ubah" : "ganti"}
                </a>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div>Email</div>
              <div>
                {visibilityEmail ? (
                  data.email
                ) : (
                  <Input
                    onChange={(e) =>
                      setData((prevData) => ({
                        ...prevData,
                        email: e.target.value,
                      }))
                    }
                  />
                )}{" "}
              </div>
              <div>
                <a
                  href="#"
                  className="text-[#4F826F] hover:text-green-500"
                  onClick={handleVisibilityEmail}
                >
                  ubah
                </a>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div>Telephone</div>
              <div>
                {visibilityTelephone ? (
                  data.phone
                ) : (
                  <Input
                    onChange={(e) =>
                      setData((prevData) => ({
                        ...prevData,
                        phone: e.target.value,
                      }))
                    }
                  />
                )}
              </div>
              <div>
                <a
                  href="#"
                  className="text-[#4F826F] hover:text-green-500"
                  onClick={handleVisibilityPhone}
                >
                  ubah
                </a>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div>Alamat</div>
              <div>
                {visibilityAddress ? (
                  data.address
                ) : (
                  <Input
                    onChange={(e) =>
                      setData((prevData) => ({
                        ...prevData,
                        address: e.target.value,
                      }))
                    }
                  />
                )}
              </div>
              <div>
                <a
                  href="#"
                  className="text-[#4F826F] hover:text-green-500"
                  onClick={handleVisibilityAddress}
                >
                  ubah
                </a>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div>Password</div>
              <div>*******</div>
              <div>
                <a href="" className="text-[#4F826F] hover:text-green-500">
                  ubah
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Editprofile;
