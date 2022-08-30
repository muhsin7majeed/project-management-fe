import { Formik, Field } from "formik";
import PropTypes from "prop-types";
import { Box, Button, FormControl, FormLabel, Input, Text, Textarea } from "@chakra-ui/react";

import FieldErrorMessage from "components/FieldErrorMessage";
import { GET_PROJECT_SCHEMA } from "./projectForm.yup";
import SelectStatus from "./SelectStatus";
import SelectClient from "./SelectClient";
import { PROJECT_FORM_SOURCE_EDIT } from "./constants";

function ProjectForm({ initialValues, handleSubmit, loading, source }) {
  function getValidationSchema() {
    return GET_PROJECT_SCHEMA(source);
  }

  return (
    <Box>
      <Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={getValidationSchema}>
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

              {source !== PROJECT_FORM_SOURCE_EDIT && (
                <FormControl mb={3} isInvalid={errors.client}>
                  <FormLabel>Owner *</FormLabel>

                  <SelectClient
                    value={values.client}
                    onChange={({ target }) => setFieldValue("client", target.value)}
                  />
                  <FieldErrorMessage name="client" />
                </FormControl>
              )}

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
  source: PropTypes.oneOf([PROJECT_FORM_SOURCE_EDIT]),

  initialValues: PropTypes.shape({
    name: PropTypes.string,
    client: PropTypes.string,
    status: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default ProjectForm;
