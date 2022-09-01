import React from "react";
import { AtSignIcon, EmailIcon } from "@chakra-ui/icons";
import { Box, List, ListItem, Text, useColorModeValue } from "@chakra-ui/react";

import { Client } from "types/client";

interface PropTypes {
  client: Client;
}

function ClientInfo({ client }: PropTypes) {
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

export default ClientInfo;
