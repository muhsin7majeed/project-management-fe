import { PROJECT_STATUS_LIST } from "helpers/constants/project";
import { shape, string, oneOf } from "prop-types";

export const ProjectStatusType = oneOf(PROJECT_STATUS_LIST.map(({ value }) => value));

export const ProjectPropType = shape({
  id: string,
  name: string,
  status: ProjectStatusType,
});
