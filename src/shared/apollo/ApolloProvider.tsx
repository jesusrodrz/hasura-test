import { PropsWithChildren, useEffect } from "react";
import { ApolloProvider as Apollo } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import { client, getApolloLink } from "./client";

export function ApolloProvider({
  children,
}: PropsWithChildren<{}>): JSX.Element {
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    (async () => {
      const link = getApolloLink(getAccessTokenSilently);

      client.setLink(link);
    })();
  }, [getAccessTokenSilently]);
  return <Apollo client={client}>{children}</Apollo>;
}
