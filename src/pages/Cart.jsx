import React from "react";
import { CardDetailCart } from "../components/Card";
import Layout from "../components/Layout";

function Cart() {
  return (
    <Layout>
      <div className="grid grid-flow-row auto-rows-max w-full justify-center mb-8">
        <CardDetailCart />
        <CardDetailCart />
      </div>
    </Layout>
  );
}

export default Cart;
