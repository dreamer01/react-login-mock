import React from "react";
import PropTypes from "prop-types";

import logoSrc from "../../assets/logo.svg";
import "./header.css";

function Header({ title }) {
  return (
    <header className="header">
      <img className="logo-header" src={logoSrc} alt="Dev World Logo" />
      <p data-testid="header-title" className="title">
        {title}
      </p>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

Header.defaultProps = {
  title: "",
};

export default Header;
