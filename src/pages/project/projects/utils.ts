import { Project, SelectedProjects } from "types/project";

/**
 * @param projects - Object with selected projects
 * @returns - Array of objects
 */
export function flattenSelectedProjects(projects: SelectedProjects) {
  const projectsList = [];

  for (const project in projects) {
    if (projects[project]) projectsList.push(projects[project]);
  }

  return projectsList;
}

/**
 * @param prevSelected React setState callback params eg: `setState(prev => prev)`
 * @param project Actual project that is selected or unselected
 * @returns Updated collection of selected projects
 */
export function setSelectedProjectsCallback(prevSelected: SelectedProjects, project: Project): SelectedProjects {
  const existing = prevSelected[project.id];

  const mappedProjects = { ...prevSelected };

  if (existing) {
    delete mappedProjects[project.id];
  } else {
    mappedProjects[project.id] = project;
  }

  return mappedProjects;
}
