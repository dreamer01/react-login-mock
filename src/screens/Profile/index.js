import React, { useEffect, useState } from "react";

import Layout from "../../components/Layout";
import Loader from "../../components/Loader";

function Profile() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users?id=1")
      .then((res) => res.json())
      .then((data) => setData(data[0]))
      .catch((error) => setError(error));
    setLoading(false);
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
