import { Button, Flex, FormControl, FormLabel, Heading, Stack, useColorModeValue } from "@chakra-ui/react";
import { Formik, Field } from "formik";

function CreateProject() {
  const wrapperBgColorMode = useColorModeValue("gray.50", "gray.800");
  const contentBgColorMode = useColorModeValue("white", "gray.700");

  function handleSubmit(values) {
    console.log(values);
  }

  const initialValues = {};

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={wrapperBgColorMode}>
      <Stack spacing={4} w={"full"} maxW={"md"} bg={contentBgColorMode} rounded={"xl"} boxShadow={"lg"} p={6} my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
          User Profile Edit
        </Heading>

        <Formik onSubmit={handleSubmit}>
          {({ values, errors, handleSubmit, handleReset }) => {
            <>
              <FormControl id="userName" isRequired>
                <FormLabel>User name</FormLabel>
                <Field placeholder="UserName" _placeholder={{ color: "gray.500" }} type="text" />
              </FormControl>

              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Field placeholder="your-email@example.com" _placeholder={{ color: "gray.500" }} type="email" />
              </FormControl>

              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Field placeholder="password" _placeholder={{ color: "gray.500" }} type="password" />
              </FormControl>

              <Stack spacing={6} direction={["column", "row"]}>
                <Button
                  bg={"red.400"}
                  color={"white"}
                  w="full"
                  _hover={{
                    bg: "red.500",
                  }}
                >
                  Cancel
                </Button>

                <Button
                  bg={"blue.400"}
                  color={"white"}
                  w="full"
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Submit
                </Button>
              </Stack>
            </>;
          }}
        </Formik>
      </Stack>
    </Flex>
  );
}

export default CreateProject;
