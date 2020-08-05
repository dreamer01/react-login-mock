import React from "react";
import PropTypes from "prop-types";

import logoSrc from "../../logo.png";
import "./header.css";

function Header({ title = "" }) {
  return (
    <header className="header">
      <img className="logo-header" src={logoSrc} alt="Healthify Logo" />
      <p data-testid="header-title" className="title">
        {title}
      </p>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
