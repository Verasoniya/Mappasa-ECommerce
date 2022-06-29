import React from "react";
import { CardDetailCart, CardDetailProduct, CardHomeProduct, CardListProduct } from "../components/Card";
import Layout from "../components/Layout";
import { withRouter } from "../utils/navigations";

function Homepage() {
  return (
    <Layout>
      <div className="grid grid-flow-row auto-rows-max w-full my-8 mx-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-8 justify-center">
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
  );
}

export default withRouter(Homepage);
