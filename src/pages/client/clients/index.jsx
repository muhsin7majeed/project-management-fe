import { Avatar, Box, Center, Heading, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";

function Clients() {
  const CLIENTS_LIST = [
    {
      id: "1",
      name: "Ashe",
      email: "ashe@lol.com",
      avatar: "",
    },
    {
      id: "2",
      name: "Shen",
      email: "shen@lol.com",
      avatar: "",
    },
    {
      id: "3",
      name: "Yasuo",
      email: "yasuo@lol.com",
      avatar: "",
    },
  ];

  return (
    <Box>
      <Heading fontSize={"4xl"} py={10} fontWeight={"bold"}>
        Clients
      </Heading>

      <SimpleGrid minChildWidth="320px" spacing="40px">
        {CLIENTS_LIST.map((client) => (
          <Box key={client.id}>
            <Center py={6}>
              <Box
                w={"full"}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"lg"}
                rounded={"lg"}
                p={6}
                textAlign={"center"}
              >
                <Avatar size={"xl"} src={client.avatar} alt={"Avatar Alt"} mb={4} name={client.name} pos={"relative"} />

                <Heading fontSize={"2xl"} fontFamily={"body"}>
                  {client.name}
                </Heading>

                <Text fontWeight={600} color={"gray.500"} mb={4}>
                  {client.email}
                </Text>

                <Text textAlign={"center"} color={useColorModeValue("gray.700", "gray.400")} px={3}>
                  {client.bio}
                </Text>
              </Box>
            </Center>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Clients;
