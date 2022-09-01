import { PROJECT_STATUS_MAP } from "helpers/constants/project";
import { PROJECT_FORM_SOURCE } from "pages/project/projects/projectForm/constants";
import { Client } from "types/client";

export type ProjectStatus = typeof PROJECT_STATUS_MAP[keyof typeof PROJECT_STATUS_MAP];

export interface Project {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  image?: string;
  client: Client;
}

export type SelectedProjects = {
  [key: string]: Project;
};

export interface ProjectData {
  projects: Project[];
}

export interface ProjectFormValue {
  name: string;
  description: string;
  status: ProjectStatus;
  client: string;
}

export type HandleProjectSelectionFunction = (project: Project) => void;

export interface ProjectFormSources {
  EDIT: "SOURCE_EDIT";
  CREATE: "SOURCE_CREATE";
}

export type ProjectFormSource = typeof PROJECT_FORM_SOURCE[keyof typeof PROJECT_FORM_SOURCE];

export interface ProjectDetailsData {
  project: Project;
}

export interface ProjectDetailsVariables {
  id: string;
}

export type ProjectDetailsRouteParams = {
  id?: string;
};

export interface DeleteProjectVariables {
  ids: string[];
}

export interface UpdateProjectVariables extends ProjectFormValue {
  id: string;
}

export type ProjectStatusOption = {
  label: string;
  value: ProjectStatus;
};

export interface ProjectStatusMap {
  PENDING: "Pending";
  IN_PROGRESS: "In Progress";
  PAUSED: "Paused";
  COMPLETED: "Completed";
}
