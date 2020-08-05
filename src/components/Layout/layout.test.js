import React from "react";
import { render } from "@testing-library/react";
import Layout from "./index";

test("renders layout component", () => {
  const { asFragment, getByRole } = render(<Layout />);
  expect(asFragment()).toMatchSnapshot();
  expect(getByRole("banner")).toBeInTheDocument();
});
