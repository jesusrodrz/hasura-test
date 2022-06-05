import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { HASURA_SCHEMA } from "../../constant";

const httpLink = createHttpLink({
  uri: HASURA_SCHEMA,
});

export const getApolloLink = (getToken: () => Promise<string>): ApolloLink => {
  const authLink = setContext(async (_, { headers }) => {
    const token = await getToken();
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : undefined,
      },
    };
  });

  return authLink.concat(httpLink);
};

export const client = new ApolloClient({
  cache: new InMemoryCache(),
});
