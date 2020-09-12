import React, { useState, useCallback, useEffect } from "react";
import { Navigate } from "react-router-dom";

import validate from "../../utils/validate";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Loader from "../../components/Loader";
import Input from "../../components/Input";
import logoSrc from "../../assets/logo.svg";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [fetching, setFetching] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const authState = window.localStorage.getItem("@test:auth");
    if (authState) {
      const { isLogged } = JSON.parse(authState);
      if (isLogged) setIsLogged(true);
    }
    setLoading(false);
  }, []);

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
    // After validation make login Request
    else {
      setFetching(true);
      fetch("http://www.mocky.io/v2/5d9d9219310000153650e30b", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
        .then((res) => res.json())
        .then((data) => {
          setFetching(false);
          window.localStorage.setItem(
            "@test:auth",
            JSON.stringify({ isLogged: true })
          );
          setIsLogged(true);
        })
        .catch((error) => {
          setFetching(false);
          setShowError(true);
          console.error(error);
        });
    }
  };

  if (loading)
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  if (isLogged) return <Navigate to="/" replace={true} />;
  return (
    <Layout title="Login">
      <form className="login-view" onSubmit={handleLogin}>
        <img className="logo-login" src={logoSrc} alt="Dev World Logo" />
        <h3>Sign In</h3>
        <p>Use your Dev World Account</p>
        {showError && <p className="error">Login Failed</p>}
        <Input
          type="email"
          name="email"
          value={email}
          placeholder="Enter Your Email"
          onChange={handleEmail}
          error={emailError}
          data-testid="email"
        />

        <Input
          type="password"
          name="password"
          value={password}
          placeholder="Enter Your Password"
          onChange={handlePassword}
          error={passwordError}
          data-testid="password"
        />

        <Button
          loading={fetching}
          title={fetching ? "Logging..." : "Login"}
          onClick={handleLogin}
        />
      </form>
    </Layout>
  );
}

export default Login;
