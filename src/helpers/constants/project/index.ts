import { flattenProjectStatusMap } from "helpers/utils";
import { ProjectStatusMap, ProjectStatusOption } from "types/project";

export const PROJECT_STATUS_MAP: ProjectStatusMap = {
  PENDING: "Pending",
  IN_PROGRESS: "In Progress",
  PAUSED: "Paused",
  COMPLETED: "Completed",
} as const;

export const PROJECT_STATUS_LIST: ProjectStatusOption[] = flattenProjectStatusMap(PROJECT_STATUS_MAP);
