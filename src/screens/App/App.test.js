import React from "react";
import user from "@testing-library/user-event";

import { render } from "../../utils/testing";
import App from "./index";

test("App page renders home when signed in", async () => {
  const { getByRole, getByTestId, findByRole } = render(<App />, {
    route: "/",
  });
  expect(getByRole("heading")).toHaveTextContent(/testing/i);

  user.click(getByTestId("nav-profile"));
  await findByRole("heading", { name: /Leanne Graham/i });
});
