import React from "react";
import PropTypes from "prop-types";

import "./button.css";

function Button({ title = "", onClick = () => {}, loading = false }) {
  return (
    <button
      className={`btn ${loading ? "loading" : ""}`}
      disabled={loading}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

export default Button;
