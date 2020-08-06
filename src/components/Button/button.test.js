import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "./index";

const onClick = jest.fn();

test("render button component", () => {
  const { asFragment, getByText, getByRole, rerender } = render(
    <Button title="Button" onClick={onClick} />
  );
  expect(asFragment()).toMatchSnapshot();
  expect(getByText("Button")).toBeInTheDocument();

  userEvent.click(getByRole("button"));
  expect(onClick).toHaveBeenCalledTimes(1);

  rerender(<Button title="Button" loading={true} onClick={() => {}} />);
  expect(getByText("Button")).toHaveClass("loading");
  expect(getByText("Button")).toBeDisabled();
});
