import { ProtectedRoute } from "./ProtectedRoute";
import { Route, Routes as RouterRoutes } from "react-router-dom";
import { Public } from "../modules/public/Public";
import { Dashboard } from "../modules/dashboard/Dashboard";
import { useAuth0 } from "@auth0/auth0-react";

export const Routes = (): JSX.Element => {
  const { isLoading } = useAuth0();
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <RouterRoutes>
          <Route path="/" element={<Public />} />
          <Route path="public" element={<Public />} />
          <Route element={<ProtectedRoute />}>
            <Route path="dashboard" element={<Dashboard path="1" />} />
          </Route>
        </RouterRoutes>
      )}
    </>
  );
};
