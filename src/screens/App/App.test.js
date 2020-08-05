import React from "react";
import { render } from "@testing-library/react";
import App from "./index";

test("renders login page", () => {
  const { getByText } = render(<App />);
  expect(getByText(/Sign in/i)).toBeInTheDocument();
});
