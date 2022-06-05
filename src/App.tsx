import { PropsWithChildren } from "react";
import {
  Auth0Provider,
  AppState,
  Auth0ProviderOptions,
} from "@auth0/auth0-react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import {
  AUTH0_AUDIENCE,
  AUTH0_CLIENT_ID,
  AUTH0_DOMAIN,
  AUTH0_SCOPE,
} from "./constant";
import { ApolloProvider } from "./shared/apollo/ApolloProvider";
import { Routes } from "./routes/Routes";
const Auth0ProviderWithRedirectCallback = ({
  children,
  ...props
}: PropsWithChildren<Auth0ProviderOptions>) => {
  const navigate = useNavigate();

  const onRedirectCallback = (appState?: AppState) => {
    navigate((appState && appState.returnTo) || window.location.pathname);
  };

  return (
    <Auth0Provider onRedirectCallback={onRedirectCallback} {...props}>
      {children}
    </Auth0Provider>
  );
};

console.log(AUTH0_DOMAIN, AUTH0_CLIENT_ID, AUTH0_AUDIENCE, AUTH0_SCOPE);

function App() {
  return (
    <BrowserRouter>
      <Auth0ProviderWithRedirectCallback
        domain={AUTH0_DOMAIN}
        clientId={AUTH0_CLIENT_ID}
        redirectUri={window.location.origin}
        audience={AUTH0_AUDIENCE}
        scope={AUTH0_SCOPE}
      >
        <ApolloProvider>
          <Routes />
        </ApolloProvider>
      </Auth0ProviderWithRedirectCallback>
    </BrowserRouter>
  );
}

export default App;
