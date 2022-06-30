import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { withRouter } from "../utils/navigations";
import { apiRequest } from "../utils/apiRequest";

import { CardListProduct } from "../components/Card";
import Layout from "../components/Layout";

function Listproduct() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMyProduct();
  }, []);

  const fetchMyProduct = async () => {
    apiRequest("/my-products", "get", {})
      .then((res) => {
        const { data } = res;
        console.log(data);
        setData(data);
      })
      .catch((err) => alert(err.toString()))
      .finally(() => setLoading(false));
  };
  const handleAddCart = async (item) => {
    apiRequest(`/cart/${item}`, "post", {})
      .then((res) => {
        alert("Produk Berhasil Ditambahkan!");
      })
      .catch((err) => alert(err.toString()))
      .finally(() => setLoading(false));
  };

  const handleDelMyProduct = async (item) => {
    apiRequest(`/products/${item}`, "delete", {})
      .then((res) => {
        alert("Produk Berhasil Dihapus!");
      })
      .catch((err) => alert(err.toString()))
      .finally(() => setLoading(false));
  };

  return (
    <Layout>
      <div className="grid grid-flow-row auto-rows-max w-full my-8 mx-8 gap-6 grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 justify-center">
        {data.map((item) => (
          <CardListProduct
            key={item.id}
            imageItem={item.product_picture}
            productTitle={item.product_name}
            productPrice={item.price}
            onClickAddCart={() => handleAddCart(item.id)}
            onClickEditProduct={() => navigate(`/edit/${item.id}`)}
            onClickDelProduct={() => handleDelMyProduct(item)}
          />
        ))}
      </div>
    </Layout>
  );
}

export default withRouter(Listproduct);
