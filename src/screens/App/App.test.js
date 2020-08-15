import React from "react";
import userEvent from "@testing-library/user-event";
import { render, waitForElement } from "@testing-library/react";

import App from "./index";

test("renders login page", () => {
  const { getByText, getAllByPlaceholderText } = render(<App />);
  expect(getByText(/Sign in/i)).toBeInTheDocument();

  // Two Input box should be present
  const inputElements = getAllByPlaceholderText(/Enter/i);
  expect(inputElements[0]).toBeInTheDocument();
  expect(inputElements[1]).toBeInTheDocument();
});

test("on submit, login request happens", async () => {
  const userData = { email: "test@mail.com", password: "asdASD" };
  const { getByRole, getByText, getByTestId } = render(<App />);

  const emailInput = getByTestId("email");
  const passwordInput = getByTestId("password");

  userEvent.type(emailInput, userData.email);
  userEvent.type(passwordInput, userData.password);

  userEvent.click(getByRole("button"));

  await waitForElement(() => getByText(/User Logged In/i));
});
