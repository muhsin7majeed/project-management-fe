import React from "react";
import { render, screen } from "@testing-library/react";

import DarkModeToggle from "components/DarkModeToggle";

describe("Darkmode Component", () => {
  it("Should render darkmode toggle", () => {
    render(<DarkModeToggle />);

    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toBeInTheDocument();
  });
});
