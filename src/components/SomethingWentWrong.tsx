import React, { ReactNode } from "react";
import { CloseIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";

import { RegularFunction } from "types/common";

interface PropTypes {
  message?: string;
  icon?: ReactNode;
  buttonText?: string;
  onClick?: RegularFunction;
}

function SomethingWentWrong({ message, icon, buttonText, onClick }: PropTypes) {
  function handleOnClick() {
    if (onClick) onClick();
  }

  return (
    <Box textAlign="center" py={10} px={6}>
      <Box display="inline-block">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bg={"red.500"}
          rounded={"50px"}
          w={"55px"}
          h={"55px"}
          textAlign="center"
        >
          {icon}
        </Flex>
      </Box>

      <Heading as="h2" size="xl" mt={6} mb={2}>
        {message}
      </Heading>

      {buttonText && <Button onClick={handleOnClick}>{buttonText}</Button>}
    </Box>
  );
}

SomethingWentWrong.defaultProps = {
  message: "Something went wrong, please try again",
  icon: <CloseIcon boxSize={"20px"} color={"white"} />,
};

export default SomethingWentWrong;
