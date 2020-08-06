import React from "react";
import { render } from "@testing-library/react";
import App from "./index";

test("renders login page", () => {
  const { getByText, getAllByPlaceholderText } = render(<App />);
  expect(getByText(/Sign in/i)).toBeInTheDocument();

  // Two Input box should be present
  const inputElements = getAllByPlaceholderText(/Enter/i);
  expect(inputElements[0]).toBeInTheDocument();
  expect(inputElements[1]).toBeInTheDocument();
});
