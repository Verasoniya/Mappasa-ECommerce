import React, { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import { TokenContext } from "../utils/context";
import Homepage from "../pages/Homepage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Cart from "../pages/Cart";

const RoutesECommerce = () => {
  const [token, setToken] = useState(null);
  const jwtToken = useMemo(() => ({ token, setToken }, [token]));

  useEffect(() => {
    const getToken = localStorage.getItem("userToken") || "0";
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
  } else {
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "4rem" }}>
              <p>Sorry! There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>;
  }
};

export { RoutesECommerce };
