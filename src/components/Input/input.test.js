import React from "react";
import { render, cleanup } from "@testing-library/react";

import Input from "./index";

test("render input component", () => {
  const { asFragment, getByRole, getByTestId, rerender } = render(
    <Input onChange={() => {}} />
  );
  expect(asFragment()).toMatchSnapshot();
  expect(getByRole("textbox")).toBeInTheDocument();

  rerender(<Input error="Invalid" onChange={() => {}} />);
  expect(getByRole("textbox")).toHaveClass("input-error");
  expect(getByTestId("error-message")).toBeInTheDocument();
});

// test("on change event by input", () => {
//   const { getByRole } = render(<Input onChange={() => {}} />);
// });
