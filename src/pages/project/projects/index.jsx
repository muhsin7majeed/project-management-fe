import { useQuery } from "@apollo/client";
import { Box, Center, Heading, SimpleGrid } from "@chakra-ui/react";

import DefaultSpinner from "components/loaders/DefaultSpinner";
import SomethingWentWrong from "components/SomethingWentWrong";
import { GET_PROJECTS } from "../queries";
import ProjectItem from "../item/item";

function Projects() {
  const { data, loading, error, refetch } = useQuery(GET_PROJECTS);

  return (
    <>
      <Box pt={5}>
        <Heading fontSize={"4xl"} py={10} fontWeight={"bold"}>
          Projects
        </Heading>

        {loading && <DefaultSpinner />}

        {error && <SomethingWentWrong onClick={refetch} />}

        {!data?.projects?.length && <Center>No Projects Found</Center>}

        {data?.projects?.length && (
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
