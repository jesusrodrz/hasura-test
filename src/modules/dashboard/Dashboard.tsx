import { useQuery } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import { UserListDocument } from "../../shared/types/generated";

export const Dashboard = ({ path }: { path: string }) => {
  const { logout } = useAuth0();

  const { data } = useQuery(UserListDocument);
  return (
    <>
      <h1>dashboard {path}</h1>

      <p>
        <button
          onClick={() => {
            logout();
          }}
        >
          logout
        </button>
      </p>
      <p>{data?.users && JSON.stringify(data, null, 2)}</p>
    </>
  );
};
