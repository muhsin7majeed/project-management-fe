import React from "react";
import { screen } from "@testing-library/react";

import Projects from "pages/project/projects";
import { render } from "components/test-utils";
import { PROJECT_MOCKS } from "apollo/mocks/project";

describe("Projects Listing", () => {
  it("Should render Projects title", () => {
    render(<Projects />);

    const headingElement = screen.getByRole("heading");

    expect(headingElement.textContent).toBe("Projects");
  });

  it("Should render Projects loading", () => {
    render(<Projects />);

    const headingElement = screen.getByTestId("loader-spinner");

    expect(headingElement).toBeInTheDocument();
  });

  it("Should render Error when GET failes", async () => {
    render(<Projects />, {
      mockData: [PROJECT_MOCKS.GET_PROJECTS_ERR],
    });

    const headingElement = await screen.findByText("Something went wrong, please try again");

    expect(headingElement).toBeInTheDocument();
  });

  it("Should render 'No Projects Found' when projects are empty", async () => {
    render(<Projects />, {
      mockData: [PROJECT_MOCKS.GET_PROJECTS_NONE],
    });

    const headingElement = await screen.findByText("No Projects Found");

    expect(headingElement).toBeInTheDocument();
  });
});
