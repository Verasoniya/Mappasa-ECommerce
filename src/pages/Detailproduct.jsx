import React from "react";
import { CardDetailProduct } from "../components/Card";
import { Layout } from "../components/Layout2";

function Detailproduct() {
  return (
    <Layout>
      <div className="grid grid-flow-row auto-rows-max">
        <CardDetailProduct />
      </div>
    </Layout>
  );
}

export default Detailproduct;
