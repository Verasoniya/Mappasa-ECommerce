import React, { useEffect, useState } from "react";
import { CardDetailProduct } from "../components/Card";
import Layout from "../components/Layout";
import { apiRequest } from "../utils/apiRequest";

function Detailproduct() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const id = localStorage.getItem("id");

  useEffect(() => {
    fetchDataDetail();
  }, []);

  const fetchDataDetail = async () => {
    apiRequest(`/products/1`, "get", {})
      .then((res) => {
        const { data } = res;
        console.log(data);
        setData(data);
      })
      .catch((err) => alert(err.toString()))
      .finally(() => setLoading(false));
  };

  return (
    <Layout>
      <div className="grid w-full">
        <CardDetailProduct
          key={data.id}
          imageItem={data.product_picture}
          productTitle={data.product_name}
          productPrice={data.price}
          productDescription={data.description}
        />
      </div>
    </Layout>
  );
}

export default Detailproduct;
