import { AtSignIcon, EmailIcon } from "@chakra-ui/icons";
import { Box, List, ListItem, Text, useColorModeValue } from "@chakra-ui/react";

import { ClientPropType } from "types";

function ClientInfo({ client }) {
  return (
    <Box>
      <Text
        fontSize={{ base: "16px", lg: "18px" }}
        color={useColorModeValue("yellow.500", "yellow.300")}
        fontWeight={"500"}
        textTransform={"uppercase"}
        mb={"4"}
      >
        Client Details
      </Text>

      <List spacing={2}>
        <ListItem>
          <Text as={"span"} fontWeight={"bold"}>
            <AtSignIcon /> Name:
          </Text>{" "}
          {client.name}
        </ListItem>

        <ListItem>
          <Text as={"span"} fontWeight={"bold"}>
            <EmailIcon /> Email:
          </Text>{" "}
          {client.email}
        </ListItem>
      </List>
    </Box>
  );
}

ClientInfo.propTypes = ClientPropType;

export default ClientInfo;
