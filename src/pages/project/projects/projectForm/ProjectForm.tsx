import React from "react";
import { Formik, Field } from "formik";
import { Box, Button, FormControl, FormLabel, Input, Text, Textarea } from "@chakra-ui/react";

import FieldErrorMessage from "components/FieldErrorMessage";
import { ProjectFormSource, ProjectFormValue } from "types/project";

import { getProjectSchema } from "./projectForm.yup";
import { PROJECT_FORM_SOURCE } from "./constants";
import SelectStatus from "./SelectStatus";
import SelectClient from "./SelectClient";

interface PropTypes {
  initialValues: ProjectFormValue;
  loading: boolean;
  source?: ProjectFormSource;
  handleSubmit: (project: ProjectFormValue) => void;
}

function ProjectForm({ initialValues, handleSubmit, loading, source }: PropTypes) {
  function getValidationSchema() {
    return getProjectSchema(source);
  }

  return (
    <Box>
      <Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={getValidationSchema}>
        {({ values, errors, handleSubmit, handleReset, setFieldValue }) => {
          return (
            <form onSubmit={handleSubmit}>
              <FormControl mb={3} isInvalid={Boolean(errors.name)}>
                <FormLabel>Name *</FormLabel>

                <Field as={Input} name="name" type="text" />
                <FieldErrorMessage name="name" />
              </FormControl>

              <FormControl mb={3} isInvalid={Boolean(errors.status)}>
                <FormLabel>Status *</FormLabel>

                <SelectStatus value={values.status} onChange={({ target }) => setFieldValue("status", target.value)} />
                <FieldErrorMessage name="status" />
              </FormControl>

              {source !== PROJECT_FORM_SOURCE.EDIT && (
                <FormControl mb={3} isInvalid={Boolean(errors.client)}>
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

export default ProjectForm;
