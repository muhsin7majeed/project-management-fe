import { node } from "prop-types";
import { useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

function GoBackLink({ children }) {
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

GoBackLink.propTypes = {
  children: node,
};

GoBackLink.defaultProps = {
  children: <ArrowBackIcon />,
};

export default GoBackLink;
