import React from "react";
import { useLocation } from "react-router-dom";

import Layout from "../../components/Layout";

function NotFound(props) {
  const { pathname } = useLocation();
  return (
    <Layout title="404">
      <h1>Not Found : </h1>
      <p>Path Name : {pathname}</p>
    </Layout>
  );
}

NotFound.propTypes = {};

export default NotFound;
