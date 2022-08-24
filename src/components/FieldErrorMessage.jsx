import PropTypes from "prop-types";
import { ErrorMessage } from "formik";
import { FormErrorMessage } from "@chakra-ui/react";

function FieldErrorMessage({ name }) {
  return <ErrorMessage component={FormErrorMessage} name={name} />;
}

FieldErrorMessage.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FieldErrorMessage;
