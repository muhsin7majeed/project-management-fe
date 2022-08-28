import { Box, Center, Heading } from "@chakra-ui/react";

function AboutLanding() {
  return (
    <Box>
      <Heading fontSize={"4xl"} py={10} fontWeight={"bold"}>
        About
      </Heading>

      <Box>
        <Center>This is an about page</Center>
      </Box>
    </Box>
  );
}

export default AboutLanding;
