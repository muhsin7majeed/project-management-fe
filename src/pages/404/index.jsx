import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <Box textAlign="center" py={10} px={6}>
        <Heading display="inline-block" as="h2" size="2xl">
          404
        </Heading>

        <Text fontSize="18px" mt={3} mb={2}>
          Page Not Found
        </Text>

        <Text color={"gray.500"} mb={6}>
          The page you're looking for does not seem to exist
        </Text>

        <Button variant="solid">
          <Link to="/">Go to Home</Link>
        </Button>
      </Box>
    </>
  );
}

export default PageNotFound;
