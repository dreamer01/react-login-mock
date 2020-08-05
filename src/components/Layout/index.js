import React from "react";
import PropTypes from "prop-types";

import Header from "../Header";
import "./layout.css";

function Layout({ title = "", children }) {
  return (
    <div className="wrapper">
      <Header role="banner" title={title} />
      <main className="container">{children}</main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
