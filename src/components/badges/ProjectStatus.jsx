import { Badge } from "@chakra-ui/react";

import { ProjectStatusType } from "Types/Project";
import { PROJECT_STATUS_MAP } from "helpers/constants/project";

const VARIANT_MAP = {
  [PROJECT_STATUS_MAP.IN_PROGRESS]: "purple",
  [PROJECT_STATUS_MAP.PAUSED]: "red",
  [PROJECT_STATUS_MAP.COMPLETED]: "green",
  [PROJECT_STATUS_MAP.PENDING]: "gray",
};

function ProjectStatus({ status }) {
  return <Badge colorScheme={VARIANT_MAP[status]}>{status}</Badge>;
}

ProjectStatus.propTypes = {
  status: ProjectStatusType.isRequired,
};

export default ProjectStatus;
