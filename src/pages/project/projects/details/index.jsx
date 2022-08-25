import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import GoBackLink from "components/GoBackLink";
import DefaultSpinner from "components/loaders/DefaultSpinner";
import NotFound from "components/NotFound";
import SomethingWentWrong from "components/SomethingWentWrong";
import ClientInfo from "./ClientInfo";
import { GET_PROJECT_DETAILS } from "apollo/queries/project";

import placeholder_image from "assets/images/placeholder_image.jpg";

function ProjectDetais() {
  const params = useParams();
  const projectStatusColorMode = useColorModeValue("gray.900", "gray.400");
  const deviderColorMode = useColorModeValue("gray.200", "gray.600");

  const { data, loading, refetch, error } = useQuery(GET_PROJECT_DETAILS, {
    variables: {
      id: params.id,
    },
  });

  return (
    <Container maxW={"7xl"}>
      {loading && <DefaultSpinner />}

      {error && <SomethingWentWrong onClick={refetch} />}

      {data?.project === null && (
        <NotFound title="Project Not Found" description="The project you're looking for does not seem to exist" />
      )}

      {data?.project && (
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 10 }} py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={"md"}
              alt={"project image"}
              src={data.project.image || placeholder_image}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "500px" }}
            />
          </Flex>

          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}>
                <GoBackLink /> {data.project.name}
              </Heading>

              <Text color={projectStatusColorMode} fontWeight={300} fontSize={"2xl"}>
                {data.project.status}
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={<StackDivider borderColor={deviderColorMode} />}
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text fontSize={"lg"}>{data.project.description}</Text>
              </VStack>

              <ClientInfo client={data.project.client} />
            </Stack>
          </Stack>
        </SimpleGrid>
      )}
    </Container>
  );
}

export default ProjectDetais;
