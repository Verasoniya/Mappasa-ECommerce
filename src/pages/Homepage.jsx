import React from "react";
import { CardDetailCart, CardDetailProduct, CardHomeProduct, CardListProduct } from "../components/Card";
import { Layout } from "../components/Layout";

function Homepage() {
  return (
    <Layout>
      <div className="grid grid-flow-row auto-rows-max grid-cols-5">
        <CardHomeProduct />
        <CardHomeProduct />
        <CardHomeProduct />
        <CardHomeProduct />
        <CardHomeProduct />
        <CardHomeProduct />
        <CardHomeProduct />
        <CardHomeProduct />
        <CardHomeProduct />
        <CardHomeProduct />
        <CardHomeProduct />
        <CardHomeProduct />
        <CardHomeProduct />
        <CardHomeProduct />
        <CardHomeProduct />
        <CardHomeProduct />
        <CardHomeProduct />
        <CardHomeProduct />
        <CardHomeProduct />
        <CardHomeProduct />
        <CardHomeProduct />
        <CardHomeProduct />
        <CardHomeProduct />
        <CardHomeProduct />
        <CardHomeProduct />
        <CardHomeProduct />
        <CardHomeProduct />
      </div>
    </Layout>
    // <Layout>
    //   <div className="grid grid-flow-row auto-rows-max justify-center mb-8"></div>
    //   <CardListProduct />
    // </Layout>
  );
}

export default Homepage;
