import React from "react";

import Layout from "../../components/Layout";

function About() {
  return (
    <Layout title="About">
      <div className="container-page">
        <h1>About</h1>
        <strong>
          The project is bootstrapped with CRA. Create React App is official
          starter pack from React team.
        </strong>
        <h2>Project Structure</h2>
        <pre>
          src |-- assets |-- components |-- screens |-- index.js |-- utils
        </pre>
        <h2>Testing</h2>
        Testing Unit test cases are written using - React Testing Library &
        Jest.
      </div>
    </Layout>
  );
}

export default About;
