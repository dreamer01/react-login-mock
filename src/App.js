import React from "react";

import logoSrc from "./logo.png";
import "./App.css";

function App() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleLogin = () => {
    setLoading(true);
    fetch("http://www.mocky.io/v2/5d9d9219310000153650e30b", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        console.log(data);
        // Navigate Home Page
      })
      .catch(console.error);
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

            {!loading ? (
              <input
                // className={`input btn ${loading && "loading"}`}
                // disabled={loading}
                className="input btn"
                onClick={handleLogin}
                type="button"
                value="Login"
              />
            ) : (
              <div className="spinner-view">
                <div className="spinner-circle spinner" />
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
