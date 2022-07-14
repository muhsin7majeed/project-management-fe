import { ApolloClient, InMemoryCache } from "@apollo/client";
import { CONSTANT_URI } from "helpers/constants";

export const client = new ApolloClient({
  uri: CONSTANT_URI,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      notifyOnNetworkStatusChange: true,
    },
  },
});
