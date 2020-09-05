import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import logoSrc from "../../assets/logo.svg";
import "./header.css";

function Header({ title }) {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const authState = window.localStorage.getItem("@test:auth");
    if (authState) {
      const { isLogged } = JSON.parse(authState);
      if (isLogged) setIsLogged(true);
    }
  }, []);

  const handleLogout = () => {
    window.localStorage.removeItem("@test:auth");
  };

  return (
    <header className="header">
      <div className="logo-view">
        <Link to="/">
          <img className="logo-header" src={logoSrc} alt="Dev World Logo" />
        </Link>
        <p data-testid="header-title" className="title">
          {title}
        </p>
      </div>
      <menu>
        <Link className="link" to="/about">
          About
        </Link>
        {isLogged ? (
          <>
            <Link className="link" to="/profile">
              Profile
            </Link>
            <Link className="link" to="/login" onClick={handleLogout}>
              Logout
            </Link>
          </>
        ) : (
          <Link className="link" to="/login">
            Login
          </Link>
        )}
      </menu>
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
