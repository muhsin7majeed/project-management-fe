import PropTypes from "prop-types";
import { Box, Select, Text } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import { GET_CLIENTS } from "pages/client/queries";
import DefaultSpinner from "components/loaders/DefaultSpinner";

function Wrapper({ children }) {
  return (
    <Box boxShadow="xs" p="3" rounded="md">
      {children}
    </Box>
  );
}

function SelectClient({ value, onChange }) {
  const { data, loading, error, refetch } = useQuery(GET_CLIENTS);

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
        {data.clients.map((client) => (
          <option key={client.id} value={client.id}>
            {client.name}
          </option>
        ))}
      </Select>
    </>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

SelectClient.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectClient;
