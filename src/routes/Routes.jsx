import React, { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import { TokenContext } from "../utils/context";
import Homepage from "../pages/Homepage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import Uploadproduct from "../pages/Uploadproduct";
import Listproduct from "../pages/Listproduct";
import Editproduct from "../pages/Editproduct";
import Editprofile from "../pages/Editprofile";
import Detailproduct from "../pages/Detailproduct";

axios.defaults.baseURL = "http://54.151.23.147/";

const RoutesECommerce = () => {
  const [token, setToken] = useState(null);
  const jwtToken = useMemo(() => ({ token, setToken }), [token]);

  useEffect(() => {
    const getToken = localStorage.getItem("token") || "0";
    setToken(getToken);
    axios.defaults.headers.common["Authorization"] = `Bearer ${getToken}`;
  }, [token]);

  if (token) {
    return (
      <TokenContext.Provider value={jwtToken}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/upload-product" element={<Uploadproduct />} />
            <Route path="/list-product-user" element={<Listproduct />} />
            <Route path="/edit/:edit_id" element={<Editproduct />} />
            <Route path="/list-product-user" element={<Uploadproduct />} />
            <Route path="/editprofile" element={<Editprofile />} />
            <Route path="/editproduct" element={<Editproduct />} />
            <Route path="/detailproduct" element={<Detailproduct />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "4rem" }}>
                  <p>Sorry! There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </BrowserRouter>
      </TokenContext.Provider>
    );
  }
};

export { RoutesECommerce };
