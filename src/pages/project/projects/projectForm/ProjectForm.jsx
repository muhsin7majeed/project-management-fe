import { Formik, Field } from "formik";
import PropTypes from "prop-types";
import { Box, Button, FormControl, FormLabel, Input, Text, Textarea } from "@chakra-ui/react";

import FieldErrorMessage from "components/FieldErrorMessage";
import { PROJECT_SCHEMA } from "./projectForm.yup";
import SelectStatus from "../create/SelectStatus";
import SelectClient from "../create/SelectClient";

function ProjectForm({ initialValues, handleSubmit, loading }) {
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

              <Button width={"100%"} mt={3} type="submit" isLoading={loading} loadingText="Loading..">
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

ProjectForm.propTypes = {
  loading: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,

  initialValues: PropTypes.shape({
    name: PropTypes.string,
    client: PropTypes.string,
    status: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default ProjectForm;
