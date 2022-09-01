import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

interface PropTypes {
  children: ReactNode;
}

function GoBackLink({ children }: PropTypes) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  return (
    <Box display={"inline-block"} cursor={"pointer"} onClick={handleClick}>
      {children}
    </Box>
  );
}

GoBackLink.defaultProps = {
  children: <ArrowBackIcon />,
};

export default GoBackLink;
