import React from "react";

import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <img
          className="logo-header"
          src="https://s3.ap-south-1.amazonaws.com/tpng-images/random/original/6be52f0b-56bf-4fdc-abd3-0bec9e58610c.png"
          alt="Healthify Logo"
        />
        <p className="title">Accounts</p>
      </header>
      <div className="container">
        <div className="login-view">
          <img
            className="logo-login"
            src="https://s3.ap-south-1.amazonaws.com/tpng-images/random/original/6be52f0b-56bf-4fdc-abd3-0bec9e58610c.png"
            alt="Healthify Logo"
          />
          <h3>Sign In</h3>
          <p>Use your HealthifyMe Account</p>
          <form>
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Enter Your Email"
            />
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Enter Your Password"
            />
            <input className="input" type="button" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
