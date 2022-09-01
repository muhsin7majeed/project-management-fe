import React from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface NotFoundType {
  statusCode: number;
  title: string;
  description: string;
  btnText: string;
}

function NotFound({ statusCode, title, description, btnText }: NotFoundType) {
  return (
    <>
      <Box textAlign="center" py={10} px={6}>
        <Heading display="inline-block" as="h2" size="2xl">
          {statusCode}
        </Heading>

        <Text fontSize="18px" mt={3} mb={2}>
          {title}
        </Text>

        <Text color={"gray.500"} mb={6}>
          {description}
        </Text>

        <Link to="/">
          <Button variant="solid">{btnText}</Button>
        </Link>
      </Box>
    </>
  );
}

NotFound.defaultProps = {
  statusCode: 404,
  title: "Page Not Found",
  description: "The page you're looking for does not seem to exist",
  btnText: "Go Home",
};

export default NotFound;
