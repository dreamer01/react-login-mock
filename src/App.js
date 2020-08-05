import React from "react";

import logoSrc from "./logo.png";
import "./App.css";

function App() {
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regex.test(e.target.value))
      setEmailError("Please enter a valid email.");
    else setEmailError("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    const regex = /^(?=.*[A-Z])[A-Za-z\d$@$!%*?&]{6,}/;
    if (!regex.test(e.target.value))
      setPasswordError(
        "Password should be 6 char long and have 1 uppercase char."
      );
    else setPasswordError(false);
  };

  const handleLogin = () => {
    if (emailError || passwordError) return;
    if (!email) setEmailError("Email is required.");
    if (!password) setPasswordError("Password is required.");
    else {
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
          // Navigate To Home Page
        })
        .catch(console.error);
    }
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

          <div className="input-view">
            <input
              className={`input ${emailError && "input-error"}`}
              type="email"
              name="email"
              value={email}
              placeholder="Enter Your Email"
              onChange={handleEmail}
            />
            {emailError && <p className="error">{emailError}</p>}
          </div>

          <div className="input-view">
            <input
              className={`input ${passwordError && "input-error"}`}
              type="password"
              name="password"
              value={password}
              placeholder="Enter Your Password"
              onChange={handlePassword}
            />
            {passwordError && <p className="error">{passwordError}</p>}
          </div>

          {!loading ? (
            <div className="input-view">
              <input
                // className={`input btn ${loading && "loading"}`}
                // disabled={loading}
                className="input btn"
                onClick={handleLogin}
                type="button"
                value="Login"
              />
            </div>
          ) : (
            <div className="spinner-view">
              <div className="spinner-circle spinner" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
