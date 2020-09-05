import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";
import App from "./screens/App";
import About from "./screens/About";
import Login from "./screens/Login";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="//*" element={<App />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
