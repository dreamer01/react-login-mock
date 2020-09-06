import React from "react";
import userEvent from "@testing-library/user-event";
import { waitForElement, act } from "@testing-library/react";

import { render } from "../../utils/testing";

import Login from "./index";

test("renders login page", () => {
  const { getByText, getAllByPlaceholderText } = render(<Login />, {
    route: "/login",
  });
  expect(getByText(/Sign in/i)).toBeInTheDocument();

  // Two Input box should be present
  const inputElements = getAllByPlaceholderText(/Enter/i);
  expect(inputElements[0]).toBeInTheDocument();
  expect(inputElements[1]).toBeInTheDocument();
});

test("on submit, with no input data login request is not called", async () => {
  const { getByRole, getByTestId } = render(<Login />, { route: "/login" });
  userEvent.click(getByRole("button"));

  const emailInput = getByTestId("email");
  const passwordInput = getByTestId("password");

  expect(emailInput).toHaveClass("input-error");
  expect(passwordInput).toHaveClass("input-error");
});

test("on submit, with invalid input data login request is not called", async () => {
  const userData = { email: "test#mail.com", password: "password" };
  const { getByTestId } = render(<Login />, { route: "/login" });

  const emailInput = getByTestId("email");
  const passwordInput = getByTestId("password");

  userEvent.type(emailInput, userData.email);
  userEvent.type(passwordInput, userData.password);

  expect(emailInput).toHaveClass("input-error");
  expect(passwordInput).toHaveClass("input-error");
});

test("on submit, with valid input data login request happens", async () => {
  const userData = { email: "test@mail.com", password: "asdASD" };
  const { getByRole, getByText, getByTestId } = render(<Login />, {
    route: "/login",
  });

  const emailInput = getByTestId("email");
  const passwordInput = getByTestId("password");

  userEvent.type(emailInput, userData.email);
  userEvent.type(passwordInput, userData.password);

  userEvent.click(getByRole("button"));
  await act(async () => {
    await waitForElement(() => getByText(/Logging/i));
  });
});
