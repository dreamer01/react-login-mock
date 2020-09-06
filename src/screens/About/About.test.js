import React from "react";

import { render } from "../../utils/testing";
import About from "./index";

test("renders About Page", () => {
  const { getByText } = render(<About />, { route: "/about" });
  expect(getByText(/Project Structure/i)).toBeInTheDocument();
});
