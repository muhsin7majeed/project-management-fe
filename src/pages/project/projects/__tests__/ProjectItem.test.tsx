import React from "react";
import { screen } from "@testing-library/react";

import { PROJECT_STATUS_MAP } from "helpers/constants/project";
import { render } from "components/test-utils";
import ProjectItem from "../item";
import ProjectStatus from "components/badges/ProjectStatus";

describe("Project Item", () => {
  const commonProps = {
    project: {
      id: "id",
      name: "project-name",
      description: "description",
      status: PROJECT_STATUS_MAP.PENDING,
      client: {
        id: "id",
        name: "client name",
        email: "client@email.com",
      },
    },
    selectedProjects: {},
    handleProjectSelection: jest.fn(),
    onProjectDeletion: jest.fn(),
    onProjectUpdate: jest.fn(),
  };

  it("Should render client name", () => {
    render(<ProjectItem {...commonProps} />);

    expect(screen.getByText(commonProps.project.client.name)).toBeInTheDocument();
  });

  it("Should render project name", () => {
    render(<ProjectItem {...commonProps} />);

    expect(screen.getByText(commonProps.project.name)).toBeInTheDocument();
  });

  it("Should render Status", () => {
    render(<ProjectItem {...commonProps} />);

    expect(screen.getByText(PROJECT_STATUS_MAP.PENDING)).toBeInTheDocument();
  });

  describe("Status", () => {
    it("Should render purple color for In Progress", () => {
      render(<ProjectStatus status={PROJECT_STATUS_MAP.IN_PROGRESS} />);

      expect(screen.getByTestId("purple")).toBeInTheDocument();
    });

    it("Should render red color for Paused", () => {
      render(<ProjectStatus status={PROJECT_STATUS_MAP.PAUSED} />);

      expect(screen.getByTestId("red")).toBeInTheDocument();
    });

    it("Should render green color for Completed", () => {
      render(<ProjectStatus status={PROJECT_STATUS_MAP.COMPLETED} />);

      expect(screen.getByTestId("green")).toBeInTheDocument();
    });

    it("Should render gray color for Pending", () => {
      render(<ProjectStatus status={PROJECT_STATUS_MAP.PENDING} />);

      expect(screen.getByTestId("gray")).toBeInTheDocument();
    });
  });

  describe("Action Buttons", () => {
    it("Should render View button", () => {
      render(<ProjectItem {...commonProps} />);

      expect(screen.getByText("View")).toBeInTheDocument();
    });

    it("Should render Edit button", () => {
      render(<ProjectItem {...commonProps} />);

      expect(screen.getByText("Edit")).toBeInTheDocument();
    });

    it("Should render Delete button", () => {
      render(<ProjectItem {...commonProps} />);

      expect(screen.getByText("Delete")).toBeInTheDocument();
    });
  });
});
