import React from "react";

import logoSrc from "./logo.png";
import "./App.css";

function App() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    console.log({ email, password });
  };

  return (
    <div className="wrapper">
      <header className="header">
        <img className="logo-header" src={logoSrc} alt="Healthify Logo" />
        <p className="title">Accounts</p>
      </header>
      <div className="container">
        <div className="login-view">
          <img className="logo-login" src={logoSrc} alt="Healthify Logo" />
          <h3>Sign In</h3>
          <p>Use your HealthifyMe Account</p>
          <form>
            <input
              className="input"
              type="email"
              name="email"
              value={email}
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="input"
              type="password"
              name="password"
              value={password}
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              className="input btn"
              onClick={handleLogin}
              type="button"
              value="Login"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
