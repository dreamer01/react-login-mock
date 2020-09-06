import React from "react";

import { render } from "../../utils/testing";

import App from "./index";

test("App page empty when user not signed in", () => {
  const { queryByRole } = render(<App />, { route: "/" });
  expect(queryByRole("heading")).toBeNull();
});

test("App page renders home when signed in", () => {
  window.localStorage.setItem("@test:auth", JSON.stringify({ isLogged: true }));
  const { getByRole } = render(<App />, { route: "/" });
  expect(getByRole("heading")).toHaveTextContent(/testing/i);
});
