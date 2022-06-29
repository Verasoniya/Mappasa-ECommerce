import React from "react";
import { CardListProduct } from "../components/Card";
import Layout from "../components/Layout";

function Listproduct() {
  return (
    <Layout>
      <div className="grid grid-flow-row auto-rows-max w-full my-8 mx-8 gap-6 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 justify-center">
        <CardListProduct />
        <CardListProduct />
        <CardListProduct />
        <CardListProduct />
        <CardListProduct />
        <CardListProduct />
        <CardListProduct />
      </div>
    </Layout>
  );
}

export default Listproduct;
