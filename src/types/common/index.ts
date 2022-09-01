import { ROUTE_PATHS } from "helpers/constants";

export type RegularFunction = () => void;

type LinkTo = typeof ROUTE_PATHS[keyof typeof ROUTE_PATHS];

export interface NavLinkItem {
  id: number;
  name: string;
  linkTo: LinkTo;
}
