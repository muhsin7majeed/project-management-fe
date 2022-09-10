import { GET_PROJECTS } from "apollo/queries/project";

export const PROJECT_MOCKS = {
  GET_PROJECTS_ERR: {
    request: {
      query: GET_PROJECTS,
    },

    error: new Error("No Projects Found"),
  },

  GET_PROJECTS_NONE: {
    request: {
      query: GET_PROJECTS,
    },

    result: {
      data: {
        projects: [],
      },
    },
  },
};
