import React from "react";
import { CardDetailProduct } from "../components/Card";
import Layout from "../components/Layout";

function Detailproduct() {
  return (
    <Layout>
      <div className="grid w-full">
        <CardDetailProduct />
      </div>
    </Layout>
  );
}

export default Detailproduct;
