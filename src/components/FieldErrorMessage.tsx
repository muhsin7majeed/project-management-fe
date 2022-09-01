import React from "react";
import { ErrorMessage } from "formik";
import { FormErrorMessage } from "@chakra-ui/react";

interface PropTypes {
  name: string;
}

function FieldErrorMessage({ name }: PropTypes) {
  return <ErrorMessage component={FormErrorMessage} name={name} />;
}

export default FieldErrorMessage;
