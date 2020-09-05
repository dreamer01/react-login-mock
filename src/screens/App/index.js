import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "../../components/Layout";
import Loader from "../../components/Loader";
import NotFound from "../NotFound";
import Profile from "../Profile";
import Home from "../Home";

function App() {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const authState = window.localStorage.getItem("@test:auth");
    if (authState) {
      const { isLogged } = JSON.parse(authState);
      if (isLogged) setAuthenticated(true);
    }
    setLoading(false);
  }, []);

  if (loading)
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  if (!authenticated) return <Navigate to="login" replace={true} />;
  else
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
}

export default App;
