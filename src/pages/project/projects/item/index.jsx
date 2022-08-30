import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import { AtSignIcon, DeleteIcon, EditIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import { Box, Button, Checkbox, Flex, Link, Stat, StatLabel, StatNumber, useColorModeValue } from "@chakra-ui/react";

import { ProjectPropType } from "types";
import { stopPropagation } from "helpers/utils";
import ProjectStatus from "components/badges/ProjectStatus";
import ProjectDeleteContainer from "pages/project/projects/actions/delete";
import ProjectEditContainer from "../edit";

function ProjectItem({ project, onProjectDeletion, handleProjectSelection, selectedProjects, onProjectUpdate }) {
  const containerColorMode = useColorModeValue("gray.800", "gray.500");
  const containerBGColorMode = useColorModeValue("gray.200", "gray.500");
  const buttonContainerColorMode = useColorModeValue("gray.800", "gray.200");

  function onProjectSelection() {
    handleProjectSelection(project);
  }

  function isProjectSelected() {
    const existing = selectedProjects[project.id];

    return Boolean(existing);
  }

  return (
    <Stat
      key={project.id}
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={containerColorMode}
      rounded={"lg"}
      onClick={onProjectSelection}
      bgColor={isProjectSelected() ? containerBGColorMode : ""}
      cursor="pointer"
    >
      <Flex justifyContent={"space-between"}>
        <Box flexGrow={1}>
          <Checkbox isChecked={isProjectSelected()} onChange={onProjectSelection} />
        </Box>

        <Box pl={{ base: 2, md: 4 }} flexGrow={4}>
          <Box mb={3} mt={-3}>
            <ProjectStatus status={project.status} />
          </Box>

          <StatLabel fontWeight={"medium"}>
            <AtSignIcon mr={1} />
            {project.client?.name}
          </StatLabel>

          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {project.name}
          </StatNumber>
        </Box>

        <Box color={buttonContainerColorMode} flexGrow={1} onClick={stopPropagation}>
          <Link
            as={RouterLink}
            to={`/project/${project.id}`}
            style={{ textDecoration: "none" }}
            display="block"
            width="100%"
          >
            <Button colorScheme="teal" size="sm" rightIcon={<InfoOutlineIcon />} variant="outline" width="100%">
              View
            </Button>
          </Link>

          <ProjectEditContainer project={project} onProjectUpdate={onProjectUpdate}>
            <Button mt={2} width="100%" size="sm" rightIcon={<EditIcon />}>
              Edit
            </Button>
          </ProjectEditContainer>

          <ProjectDeleteContainer projects={[project]} onProjectDeletion={onProjectDeletion}>
            <Button mt={2} width="100%" size="sm" colorScheme="red" rightIcon={<DeleteIcon />}>
              Delete
            </Button>
          </ProjectDeleteContainer>
        </Box>
      </Flex>
    </Stat>
  );
}

ProjectItem.propTypes = {
  project: ProjectPropType.isRequired,
  onProjectDeletion: PropTypes.func,
  onProjectUpdate: PropTypes.func,
  handleProjectSelection: PropTypes.func,
  selectedProjects: PropTypes.shape({
    [PropTypes.string]: ProjectPropType,
  }),
};

export default ProjectItem;
