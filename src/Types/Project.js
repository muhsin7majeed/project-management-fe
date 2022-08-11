import { shape, string } from "prop-types";

export const ProjectPropType = shape({
  id: string,
  name: string,
  status: string,
}).isRequired;
