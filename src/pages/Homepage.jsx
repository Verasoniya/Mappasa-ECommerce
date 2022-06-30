import React, { useEffect, useState } from "react";
import { CardHomeProduct } from "../components/Card";
import Layout from "../components/Layout";
import { withRouter } from "../utils/navigations";
import axios from "axios";
import { apiRequest } from "../utils/apiRequest";

function Homepage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchAllProduct();
  }, []);

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

  return (
    <Layout>
      <div className="grid grid-flow-row auto-rows-max w-full my-8 mx-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-8 justify-center">
        {data.map((item) => (
          <CardHomeProduct key={item.id} imageItem={item.product_picture} productTitle={item.name} productPrice={item.price} />
        ))}
      </div>
    </Layout>
  );
}

export default withRouter(Homepage);
