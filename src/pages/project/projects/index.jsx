import { useQuery } from "@apollo/client";
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
  Center,
} from "@chakra-ui/react";
import DefaultSpinner from "components/loaders/DefaultSpinner";
import SomethingWentWrong from "components/SomethingWentWrong";
import { Link } from "react-router-dom";
import { GET_PROJECTS } from "../queries";

function Projects() {
  const { data, loading, error, refetch, networkStatus } = useQuery(GET_PROJECTS);

  console.log({ data, loading, networkStatus });

  return (
    <>
      <Box pt={5}>
        <Heading fontSize={"4xl"} py={10} fontWeight={"bold"}>
          Projects
        </Heading>

        {loading && <DefaultSpinner />}
        {/* <SomethingWentWrong onClick={handleRefetch} /> */}

        {error && <SomethingWentWrong onClick={refetch} />}

        {data?.projects?.length === 0 && <Center>No Projects Found</Center>}

        {data?.projects?.length && (
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
            {data.projects.map((project) => (
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
        )}
      </Box>
    </>
  );
}

export default Projects;
