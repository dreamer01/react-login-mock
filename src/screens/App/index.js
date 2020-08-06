import React from "react";

import validate from "../../utils/validate";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Input from "../../components/Input";
import logoSrc from "../../assets/logo.png";
import "./app.css";

function App() {
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

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
          // Navigate To Home Page
        })
        .catch((error) => {
          setLoading(false);
          console.error(error);
        });
    }
  };

  return (
    <Layout title="Accounts">
      <form className="login-view" onSubmit={handleLogin}>
        <img className="logo-login" src={logoSrc} alt="Healthify Logo" />
        <h3>Sign In</h3>
        <p>Use your HealthifyMe Account</p>

        <Input
          type="email"
          name="email"
          autoComplete="username"
          value={email}
          placeholder="Enter Your Email"
          onChange={handleEmail}
          error={emailError}
        />

        <Input
          type="password"
          name="password"
          autoComplete="current-password"
          value={password}
          placeholder="Enter Your Password"
          onChange={handlePassword}
          error={passwordError}
        />

        <Button loading={loading} title="Login" onClick={handleLogin} />
      </form>
    </Layout>
  );
}

export default App;
