import React from "react";
import user from "@testing-library/user-event";

import { render } from "../../utils/testing";
import Header from "./index";

let originalLocalStorage = {};

test("renders header component", () => {
  const { asFragment, getByAltText, getByText, getByTestId } = render(
    <Header title="Title" />
  );
  expect(asFragment()).toMatchSnapshot();
  expect(getByAltText(/logo/i)).toBeInTheDocument();
  expect(getByText("Title")).toBeInTheDocument();
  expect(getByTestId("header-title")).toBeInTheDocument();
});

test("renders header component with nav links", () => {
  const { getByTestId } = render(<Header title="Title" />);
  expect(getByTestId("nav-about")).toBeInTheDocument();
  expect(getByTestId("nav-logout")).toBeInTheDocument();
});

describe("local storage", () => {
  Storage.prototype.removeItem = jest.fn(() => {});

  test("renders header component on logout clear localStorage", () => {
    localStorage.setItem("test:auth", JSON.stringify({ isLogged: true }));
    const { getByTestId } = render(<Header title="Title" />);
    user.click(getByTestId("nav-logout"));
    expect(localStorage.removeItem).toHaveBeenCalledWith("@test:auth");
  });
});
