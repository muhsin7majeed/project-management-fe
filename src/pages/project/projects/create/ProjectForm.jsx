import { Formik, Field } from "formik";
import * as YUP from "yup";
import { Box, Button, FormControl, FormLabel, Input, Text, Textarea } from "@chakra-ui/react";

import FieldErrorMessage from "components/FieldErrorMessage";
import SelectStatus from "./SelectStatus";
import SelectClient from "./SelectClient";

const PROJECT_SCHEMA = YUP.object().shape({
  name: YUP.string().required("Name is required"),
  client: YUP.string().required("Owner is required"),
  status: YUP.string().required("Status is required"),
  description: YUP.string(),
});

function ProjectForm() {
  function handleSubmit(values) {
    console.log(values);
  }

  const initialValues = {
    name: "",
    client: "",
    status: "Pending",
    description: "",
  };

  return (
    <Box>
      <Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={PROJECT_SCHEMA}>
        {({ values, errors, handleSubmit, handleReset, setFieldValue }) => {
          return (
            <form onSubmit={handleSubmit}>
              <FormControl mb={3} isInvalid={errors.name}>
                <FormLabel>Name *</FormLabel>

                <Field as={Input} name="name" type="text" />
                <FieldErrorMessage name="name" />
              </FormControl>

              <FormControl mb={3} isInvalid={errors.status}>
                <FormLabel>Status *</FormLabel>

                <SelectStatus value={values.status} onChange={({ target }) => setFieldValue("status", target.value)} />
                <FieldErrorMessage name="status" />
              </FormControl>

              <FormControl mb={3} isInvalid={errors.client}>
                <FormLabel>Owner *</FormLabel>

                <SelectClient value={values.client} onChange={({ target }) => setFieldValue("client", target.value)} />
                <FieldErrorMessage name="client" />
              </FormControl>

              <FormControl mb={3}>
                <FormLabel>Description</FormLabel>
                <Field as={Textarea} name="description" />
              </FormControl>

              <Button width={"100%"} mt={3} type="submit">
                Submit
              </Button>

              <Text align={"center"} cursor={"pointer"} mt={2} onClick={handleReset}>
                Reset form?
              </Text>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
}

export default ProjectForm;
