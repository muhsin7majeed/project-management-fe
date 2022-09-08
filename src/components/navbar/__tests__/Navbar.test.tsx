import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "../index";

describe("Navbar", () => {
  it("Should render title 'Project Manager'", () => {
    render(<Navbar />, {
      wrapper: BrowserRouter,
    });

    const headerElement = screen.getByRole("heading");

    expect(headerElement).toHaveTextContent("Project Manager");
  });

  it("Should render Nav Items", () => {
    render(<Navbar />, {
      wrapper: BrowserRouter,
    });

    const aboutNavElement = screen.getByText("About");
    const projectsNavElement = screen.getByText("Projects");

    expect(aboutNavElement).toBeInTheDocument();
    expect(projectsNavElement).toBeInTheDocument();
  });

  it("Should have bold style on active navlink", () => {
    render(<Navbar />, {
      wrapper: BrowserRouter,
    });

    const aboutNavElement = screen.getByText("About");
    const projectsNavElement = screen.getByText("Projects");

    fireEvent.click(aboutNavElement);
    expect(aboutNavElement).toHaveClass("active");

    fireEvent.click(projectsNavElement);
    expect(projectsNavElement).toHaveClass("active");
  });
});
