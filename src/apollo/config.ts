import { ApolloClient, InMemoryCache } from "@apollo/client";
import { CONSTANT_URI } from "helpers/constants";

export const APOLLO_CLIENT = new ApolloClient({
  uri: CONSTANT_URI,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      notifyOnNetworkStatusChange: true,
    },
  },
});
