import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const PROJECTS = [
  {
    id: 1,
    name: "Project One",
    status: "Completed",
  },
  {
    id: 2,
    name: "Project Two",
    status: "In Progress",
  },
  {
    id: 3,
    name: "Project Three",
    status: "Started",
  },
];

function Projects() {
  return (
    <>
      <Box pt={5}>
        <Heading fontSize={"4xl"} py={10} fontWeight={"bold"}>
          Projects
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          {PROJECTS.map((project) => (
            <Stat
              key={project.id}
              px={{ base: 2, md: 4 }}
              py={"5"}
              shadow={"xl"}
              border={"1px solid"}
              borderColor={useColorModeValue("gray.800", "gray.500")}
              rounded={"lg"}
            >
              <Flex justifyContent={"space-between"}>
                <Box pl={{ base: 2, md: 4 }}>
                  <StatLabel fontWeight={"medium"}>{project.status}</StatLabel>

                  <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
                    {project.name}
                  </StatNumber>
                </Box>

                <Box my={"auto"} color={useColorModeValue("gray.800", "gray.200")} alignContent={"center"}>
                  <Link to={`/project/${project.id}`}>
                    <Button>View</Button>
                  </Link>
                </Box>
              </Flex>
            </Stat>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}

export default Projects;
