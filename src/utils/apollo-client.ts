import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GRAPH_URL } from "@/common/constants";

const client = new ApolloClient({
  uri: GRAPH_URL,
  cache: new InMemoryCache(),
});

export default client;
