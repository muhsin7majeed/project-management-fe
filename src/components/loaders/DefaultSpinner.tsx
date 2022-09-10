import React from "react";
import { Center, Spinner } from "@chakra-ui/react";

function DefaultSpinner() {
  return (
    <Center data-testid="loader-spinner">
      <Spinner size="md" />
    </Center>
  );
}

export default DefaultSpinner;
