import React from "react";
import PropTypes from "prop-types";

import "./input.css";

function Input({ onChange, error, ...props }) {
  return (
    <div className="input-view">
      <input
        className={`input ${error && "input-error"}`}
        onChange={onChange}
        {...props}
      />
      {error && (
        <p data-testid="error-message" className="error">
          {error}
        </p>
      )}
    </div>
  );
}

Input.propTypes = {
  onChange: PropTypes.func,
  error: PropTypes.string,
};

Input.defaultProps = {
  onChange: () => {},
  error: "",
};

export default Input;
