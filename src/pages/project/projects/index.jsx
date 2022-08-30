import { useState } from "react";
import { useQuery } from "@apollo/client";
import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Heading, SimpleGrid } from "@chakra-ui/react";

import { GET_PROJECTS } from "apollo/queries/project";
import DefaultSpinner from "components/loaders/DefaultSpinner";
import SomethingWentWrong from "components/SomethingWentWrong";

import ProjectCreateContainer from "./create";
import ProjectItem from "./item";
import ProjectDeleteContainer from "./actions/delete";
import { flattenSelectedProjects } from "./utils";

function Projects() {
  const [selectedProjects, setSelectedProjects] = useState({});
  const { data, loading, error, refetch } = useQuery(GET_PROJECTS);

  function refreshList() {
    refetch();
  }

  function handleProjectSelection(project) {
    setSelectedProjects((prevSelected) => {
      const existing = prevSelected[project.id];

      return {
        ...prevSelected,

        [project.id]: existing ? null : project,
      };
    });
  }

  return (
    <>
      <Box pt={5}>
        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
          <Heading fontSize={"4xl"} py={10} fontWeight={"bold"}>
            Projects
          </Heading>

          <Box display="flex">
            <ProjectDeleteContainer
              projects={flattenSelectedProjects(selectedProjects)}
              onProjectDeletion={refreshList}
            >
              <Button mr={2} colorScheme="red" rightIcon={<DeleteIcon />}>
                Delete
              </Button>
            </ProjectDeleteContainer>

            <ProjectCreateContainer onProjectCreation={refreshList} />
          </Box>
        </Box>

        {loading && <DefaultSpinner />}

        {error && <SomethingWentWrong onClick={refetch} />}

        {data?.projects?.length === 0 && <Center>No Projects Found</Center>}

        {Boolean(data?.projects?.length) && (
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
            {data.projects.map((project) => (
              <ProjectItem
                key={project.id}
                project={project}
                onProjectDeletion={refreshList}
                handleProjectSelection={handleProjectSelection}
                selectedProjects={selectedProjects}
              />
            ))}
          </SimpleGrid>
        )}
      </Box>
    </>
  );
}

export default Projects;
