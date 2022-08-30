/**
 *
 * @param {{[String]: ProjectPropType}} projects - Object with selected projects
 * @returns {Array<ProjectPropType>} - Array of objects
 */
export function flattenSelectedProjects(projects) {
  const projectsList = [];

  for (let project in projects) {
    if (projects[project]) projectsList.push(projects[project]);
  }

  return projectsList;
}
