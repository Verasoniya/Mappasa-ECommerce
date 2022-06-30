import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { withRouter } from "../utils/navigations";
import { apiRequest } from "../utils/apiRequest";

import { CardHomeProduct } from "../components/Card";
import Layout from "../components/Layout";

function Homepage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchAllProduct();
  }, []);

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    setToken(getToken);
  }, [token]);

  const fetchAllProduct = async () => {
    apiRequest("/products", "get", {})
      .then((res) => {
        const { data } = res;
        console.log(data);
        setData(data);
      })
      .catch((err) => alert(err.toString()))
      .finally(() => setLoading(false));
  };

  const handleAddCart = () => {
    if (token) {
      alert("Produk berhasil ditambahkan!");
    } else {
      navigate("/login");
    }
  };

  return (
    <Layout>
      <div className="grid grid-flow-row auto-rows-max w-full my-8 mx-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-8 justify-center">
        {data.map((item) => (
          <CardHomeProduct key={item.id} imageItem={item.product_picture} productTitle={item.product_name} productPrice={item.price} onClickAddCart={() => handleAddCart(item)} />
        ))}
      </div>
    </Layout>
  );
}

export default withRouter(Homepage);
