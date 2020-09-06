import React from "react";

import { render } from "../../utils/testing";
import Home from "./index";

test("renders Home page", () => {
  const { getByRole } = render(<Home />, { route: "/" });
  expect(getByRole("heading")).toHaveTextContent(/testing/i);
});
