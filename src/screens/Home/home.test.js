import React from "react";
import { render } from "@testing-library/react";

import Home from "./index";

test("Home page renders", () => {
  render(<Home />);
});
