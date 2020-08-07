import React from "react";
import { render, waitForElement, fireEvent, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./index";

test("renders login page", () => {
  const { getByText, getAllByPlaceholderText } = render(<App />);
  expect(getByText(/Sign in/i)).toBeInTheDocument();

  // Two Input box should be present
  const inputElements = getAllByPlaceholderText(/Enter/i);
  expect(inputElements[0]).toBeInTheDocument();
  expect(inputElements[1]).toBeInTheDocument();
});

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ result: "success" }),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

test("on submit, login request happens", async () => {
  const userData = { email: "test@mail.com", password: "asdASD" };
  const { getByRole, getByText, getByTestId } = render(<App />);

  const emailInput = getByTestId("email");
  const passwordInput = getByTestId("password");

  act(() => {
    fireEvent.change(emailInput, { target: { value: userData.email } });
  });
  act(() => {
    fireEvent.change(passwordInput, { target: { value: userData.password } });
  });

  fireEvent.click(getByRole("button"));

  await waitForElement(() => getByText(/User Logged In/i));

  expect(fetch).toHaveBeenCalledWith(
    "http://www.mocky.io/v2/5d9d9219310000153650e30b",
    expect.objectContaining({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
  );

  expect(window.fetch).toHaveBeenCalledTimes(1);

  global.fetch.mockRestore();
});
