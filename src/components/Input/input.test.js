import React from "react";
import { render } from "@testing-library/react";
import user from "@testing-library/user-event";

import Input from "./index";

const onChange = jest.fn();

test("render input component", () => {
  const { asFragment, getByRole, getByTestId, rerender } = render(
    <Input onChange={onChange} />
  );
  expect(asFragment()).toMatchSnapshot();
  expect(getByRole("textbox")).toBeInTheDocument();

  rerender(<Input error="Invalid" onChange={onChange} />);
  expect(getByRole("textbox")).toHaveClass("input-error");
  expect(getByTestId("error-message")).toBeInTheDocument();
});

test("render with default props", () => {
  const { getByRole } = render(<Input />);
  user.type(getByRole("textbox"), "abc");
});
