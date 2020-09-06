import React from "react";

import { render } from "../../utils/testing";
import NotFound from "./index";

test("renders NotFound page", () => {
  const { getByRole } = render(<NotFound />, { route: "/test" });
  expect(getByRole("heading")).toHaveTextContent(/not found/i);
});
