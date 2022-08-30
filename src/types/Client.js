import { shape, string } from "prop-types";

export const ClientPropType = shape({
  id: string,
  name: string,
  email: string,
}).isRequired;
