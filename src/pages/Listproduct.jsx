import React from "react";
import { CardListProduct } from "../components/Card";
import { Layout } from "../components/Layout";

function Listproduct() {
  return (
    <Layout>
      <div className="grid grid-flow-row auto-rows-max justify-center mb-8"></div>
      <CardListProduct />
    </Layout>
  );
}

export default Listproduct;
