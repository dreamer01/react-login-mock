import React from "react";

import { render } from "../../utils/testing";
import About from "./index";

test("renders About Page", () => {
  const { getByRole } = render(<About />, { route: "/about" });
  expect(getByRole("heading", { name: /about/i })).toBeInTheDocument();
});
