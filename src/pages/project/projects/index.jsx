import { useQuery } from "@apollo/client";
import { Box, Center, Heading, SimpleGrid } from "@chakra-ui/react";

import { GET_PROJECTS } from "apollo/queries/project";
import DefaultSpinner from "components/loaders/DefaultSpinner";
import SomethingWentWrong from "components/SomethingWentWrong";

import ProjectCreateContainer from "./create";
import ProjectItem from "./item";

function Projects() {
  const { data, loading, error, refetch } = useQuery(GET_PROJECTS);

  function onProjectCreation() {
    refetch();
  }

  return (
    <>
      <Box pt={5}>
        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
          <Heading fontSize={"4xl"} py={10} fontWeight={"bold"}>
            Projects
          </Heading>

          <ProjectCreateContainer onProjectCreation={onProjectCreation} />
        </Box>

        {loading && <DefaultSpinner />}

        {error && <SomethingWentWrong onClick={refetch} />}

        {data?.projects?.length === 0 && <Center>No Projects Found</Center>}

        {Boolean(data?.projects?.length) && (
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
            {data.projects.map((project) => (
              <ProjectItem key={project.id} project={project} />
            ))}
          </SimpleGrid>
        )}
      </Box>
    </>
  );
}

export default Projects;
