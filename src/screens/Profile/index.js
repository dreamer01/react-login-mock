import React, { useEffect, useState } from "react";

import Layout from "../../components/Layout";
import Loader from "../../components/Loader";

function Profile() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users?id=1")
      .then((res) => {
        if (res.status >= 200 && res.status <= 300) return res.json();
        else throw new Error("Request Failed ", res.status);
      })
      .then((data) => {
        setData(data[0]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <Layout title="Profile">
      {error && <p className="error">{JSON.stringify(data)}</p>}
      {loading ? (
        <Loader />
      ) : (
        <div className="container-page">
          <h2>{data.name}</h2>
          <p>{data.email}</p>
          <code>{JSON.stringify(data.address)}</code>
        </div>
      )}
    </Layout>
  );
}

export default Profile;
