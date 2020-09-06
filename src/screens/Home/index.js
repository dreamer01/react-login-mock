import React from "react";

import Layout from "../../components/Layout";

function Home() {
  return (
    <Layout title="Home">
      <div className="container-page">
        <h1>Testing</h1>
        <p>
          I have been avoiding writing test for long time into my development
          experience, why because I thought them to be waste of time, redundant
          and not valuable. Turns out I was <b>One Hundred %</b> wrong about
          that. I got to know the real benefits that test cases add to your
          project once I started writing them.
        </p>
        <p>
          Test cases not only ensure that the piece of code you have written is
          correct but they help you understand what as a user a outcome you are
          looking for the code you have written. They give you confidence that
          when it comes to refactoring you are not missing on the feature that
          were running successfully previously.
        </p>
        <br />
      </div>
    </Layout>
  );
}

export default Home;
