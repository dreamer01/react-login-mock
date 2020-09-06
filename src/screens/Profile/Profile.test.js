import React from "react";
import { waitForElement } from "@testing-library/react";

import { render } from "../../utils/testing";

import Profile from "./index";

test("Render Test page", async () => {
  const { getByText } = render(<Profile />, { route: "/profile" });
  await waitForElement(() => getByText(/Leanne Graham/i));
});
