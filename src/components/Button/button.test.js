import React from "react";
import { render, cleanup, getByRole } from "@testing-library/react";

import Button from "./index";

test("render button component", () => {
  const { asFragment, getByText, rerender } = render(
    <Button title="Button" onClick={() => {}} />
  );
  expect(asFragment()).toMatchSnapshot();
  expect(getByText("Button")).toBeInTheDocument();

  rerender(<Button title="Button" loading={true} onClick={() => {}} />);
  expect(getByText("Button")).toHaveClass("loading");
  expect(getByText("Button")).toBeDisabled();
});

afterEach(cleanup);
