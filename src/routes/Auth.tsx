import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Auth = () => {
  const { loginWithRedirect } = useAuth0();
  const location = useLocation();
  const state = location.state as { from: string };

  useEffect(() => {
    loginWithRedirect({
      appState: {
        returnTo: state.from,
      },
    });
  }, [state, loginWithRedirect]);
  return <>Redirecting to auth</>;
};
