import { Link as RouterLink } from "react-router-dom";
import { AtSignIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Link, Stat, StatLabel, StatNumber, useColorModeValue } from "@chakra-ui/react";

import { ProjectPropType } from "Types/Project";
import ProjectStatus from "components/badges/ProjectStatus";
import ProjectDeleteContainer from "pages/project/projects/actions/delete";

function ProjectItem({ project, onProjectDeletion }) {
  const containerColorMode = useColorModeValue("gray.800", "gray.500");
  const buttonContainerColorMode = useColorModeValue("gray.800", "gray.200");

  return (
    <Stat
      key={project.id}
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={containerColorMode}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
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

        <Box my={"auto"} color={buttonContainerColorMode} display="flex" flexDirection="column" alignItems="center">
          <Link as={RouterLink} to={`/project/${project.id}`} style={{ textDecoration: "none" }} width="100%">
            <Button colorScheme="teal" rightIcon={<InfoOutlineIcon />} width="100%" variant="outline">
              View
            </Button>
          </Link>

          <ProjectDeleteContainer project={project} onProjectDeletion={onProjectDeletion} />
        </Box>
      </Flex>
    </Stat>
  );
}

ProjectItem.propTypes = ProjectPropType.isRequired;

export default ProjectItem;
