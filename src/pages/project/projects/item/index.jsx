import { Link } from "react-router-dom";
import { AtSignIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Stat, StatLabel, StatNumber, useColorModeValue } from "@chakra-ui/react";

import { ProjectPropType } from "Types/Project";
import ProjectStatus from "components/badges/ProjectStatus";

function ProjectItem({ project }) {
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

        <Box my={"auto"} color={buttonContainerColorMode} alignContent={"center"}>
          <Link to={`/project/${project.id}`}>
            <Button>View</Button>
          </Link>
        </Box>
      </Flex>
    </Stat>
  );
}

ProjectItem.propTypes = ProjectPropType;

export default ProjectItem;
