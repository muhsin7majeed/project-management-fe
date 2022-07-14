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
import ClientInfo from "./ClientInfo";

const PROJECT_DETAILS = {
  data: {
    project: {
      id: "2",
      image:
        "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080",
      name: "Project Two",
      status: "Paused",
      description:
        "Project Two Description. Project Two Description. Project Two Description. Project Two Description. Project Two Description. Project Two Description.",
      client: {
        id: "2",
        name: "Shen",
        email: "shen@lol.com",
      },
    },
  },
};

export function ProjectDetais() {
  const {
    data: { project },
  } = PROJECT_DETAILS;

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 10 }} py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={"md"}
            alt={"project image"}
            src={
              "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080"
            }
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>

        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}>
              <GoBackLink /> {project.name}
            </Heading>

            <Text color={useColorModeValue("gray.900", "gray.400")} fontWeight={300} fontSize={"2xl"}>
              {project.status}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={<StackDivider borderColor={useColorModeValue("gray.200", "gray.600")} />}
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={"lg"}>{project.description}</Text>
            </VStack>

            <ClientInfo client={project.client} />
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
