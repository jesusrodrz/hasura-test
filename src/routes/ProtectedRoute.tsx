import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { Outlet, RouteProps } from "react-router-dom";

export const ProtectedRoute = ({ children }: RouteProps): JSX.Element => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect({
        appState: {
          returnTo: `${window.location.pathname}${window.location.search}`,
        },
      }).catch((err) => console.log(err));
    }
  }, [loginWithRedirect, isLoading, isAuthenticated]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!isAuthenticated) {
    return <div>Not Authenticated</div>;
  }

  return children ? <>{children}</> : <Outlet />;
};
