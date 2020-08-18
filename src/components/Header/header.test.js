import React from "react";
import { render } from "@testing-library/react";
import Header from "./index";

test("renders header component", () => {
  const { asFragment, getByAltText, getByText, getByTestId } = render(
    <Header title="Title" />
  );
  expect(asFragment()).toMatchSnapshot();
  expect(getByAltText(/logo/i)).toBeInTheDocument();
  expect(getByText("Title")).toBeInTheDocument();
  // expect(getByTestId("header-title")).toBeInTheDocument();
});
