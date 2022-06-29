import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import Detailproduct from "./pages/Detailproduct";
import Listproduct from "./pages/Listproduct";
import Cart from "./pages/Cart";
import Homepage from "./pages/Homepage";
import Uploadproduct from "./pages/Uploadproduct";
import Editproduct from "./pages/Editproduct";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Layout from "./components/Layout";
import { RoutesECommerce } from "./routes/Routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RoutesECommerce />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
