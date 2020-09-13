import React from "react";
import { waitFor } from "@testing-library/react";

import { render } from "../../utils/testing";

import Profile from "./index";

test("Render Profile page", async () => {
  const { getByText } = render(<Profile />, { route: "/profile" });
  await waitFor(() => getByText(/Leanne Graham/i));
});
