import React from "react";
import { Badge } from "@chakra-ui/react";

import { PROJECT_STATUS_MAP } from "helpers/constants/project";
import { ProjectStatus as ProjectStatusType } from "types/project";

const VARIANT_MAP = {
  [PROJECT_STATUS_MAP.IN_PROGRESS]: "purple",
  [PROJECT_STATUS_MAP.PAUSED]: "red",
  [PROJECT_STATUS_MAP.COMPLETED]: "green",
  [PROJECT_STATUS_MAP.PENDING]: "gray",
} as const;

interface PropTypes {
  status: ProjectStatusType;
}

function ProjectStatus({ status }: PropTypes) {
  return <Badge colorScheme={VARIANT_MAP[status]}>{status}</Badge>;
}

export default ProjectStatus;
