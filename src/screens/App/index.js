import React, { useState } from "react";

import validate from "../../utils/validate";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Input from "../../components/Input";
import logoSrc from "../../assets/logo.svg";
import "./app.css";

function App() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleEmail = (e) => {
    const { type, value } = e.target;
    setEmail(value);
    setEmailError(validate({ type, value }));
  };

  const handlePassword = (e) => {
    const { type, value } = e.target;
    setPassword(value);
    setPasswordError(validate({ type, value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
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
          setSuccess("User Logged In."); // Navigate To Home Page
        })
        .catch((error) => {
          setLoading(false);
          console.error(error);
        });
    }
  };

  return (
    <Layout title="Login">
      <form className="login-view" onSubmit={handleLogin}>
        <img className="logo-login" src={logoSrc} alt="Dev World Logo" />
        <h3>Sign In</h3>
        <p>Use your Dev World Account</p>
        {success && <p className="success">{success}</p>}
        <Input
          type="email"
          name="email"
          autoComplete="username"
          value={email}
          placeholder="Enter Your Email"
          onChange={handleEmail}
          error={emailError}
          data-testid="email"
        />

        <Input
          type="password"
          name="password"
          autoComplete="current-password"
          value={password}
          placeholder="Enter Your Password"
          onChange={handlePassword}
          error={passwordError}
          data-testid="password"
        />

        <Button
          loading={loading}
          title={loading ? "Logging" : "Login"}
          onClick={handleLogin}
        />
      </form>
    </Layout>
  );
}

export default App;
