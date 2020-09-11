import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render as rtlRender } from "@testing-library/react";

function render(ui, { route = "/", ...renderOptions } = {}) {
  if (route !== "/login")
    window.localStorage.setItem(
      "@test:auth",
      JSON.stringify({ isLogged: true })
    );
  const history = createMemoryHistory();
  history.push(route);

  function Wrapper({ children }) {
    return <Router history={history}>{children}</Router>;
  }
  return {
    ...rtlRender(ui, {
      wrapper: Wrapper,
      ...renderOptions,
    }),
  };
}

export { render };
