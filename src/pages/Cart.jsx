import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { withRouter } from "../utils/navigations";
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

export default withRouter(Cart);
