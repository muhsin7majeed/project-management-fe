import { SyntheticEvent } from "react";
import { ProjectStatusMap, ProjectStatusOption } from "types/project";

/**
 *
 * @param {Event} event - Pass is event from event handlers
 */
export function stopPropagation(event: SyntheticEvent): void {
  if (event?.stopPropagation) event.stopPropagation();
}

/**
 *
 * @param statusMap PROJECT_STATUS_MAP - Object of project status constants
 */
export function flattenProjectStatusMap(statusMap: ProjectStatusMap): ProjectStatusOption[] {
  const statusList = [];

  for (const status in statusMap) {
    const value = statusMap[status as keyof ProjectStatusMap];

    statusList.push({
      label: value,
      value: value,
    });
  }

  return statusList;
}
