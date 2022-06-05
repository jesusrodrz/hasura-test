import { Link } from "react-router-dom";

export const Public = () => {
  return (
    <>
      <h1>Public</h1>
      <p>
        this is a Public route <Link to="/dashboard">Go to Dashboard</Link>{" "}
        <Link to="/dashboard2">Go to Dashboard 2</Link>
      </p>
    </>
  );
};
