import React, { ChangeEventHandler, ReactNode } from "react";
import { useQuery } from "@apollo/client";
import { Box, Select, Text } from "@chakra-ui/react";

import { GET_CLIENTS } from "apollo/queries/project";
import { ClientData } from "types/client";
import DefaultSpinner from "components/loaders/DefaultSpinner";

interface WrapperPropType {
  children: ReactNode;
}

interface PropTypes {
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

function Wrapper({ children }: WrapperPropType) {
  return (
    <Box boxShadow="xs" p="3" rounded="md">
      {children}
    </Box>
  );
}

function SelectClient({ value, onChange }: PropTypes) {
  const { data, loading, error, refetch } = useQuery<ClientData>(GET_CLIENTS);

  if (loading) {
    return (
      <Wrapper>
        <DefaultSpinner />
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper>
        <Text opacity={0.5} onClick={() => refetch()} cursor="pointer" _hover={{ opacity: 1 }}>
          Failed to load clients, click to reload.
        </Text>
      </Wrapper>
    );
  }

  if (data?.clients?.length === 0) {
    return (
      <Wrapper>
        <Text opacity={0.5}>Create a client first!</Text>;
      </Wrapper>
    );
  }

  return (
    <>
      <Select placeholder="Select client" onChange={onChange} value={value}>
        {data?.clients.map((client) => (
          <option key={client.id} value={client.id}>
            {client.name}
          </option>
        ))}
      </Select>
    </>
  );
}

export default SelectClient;
