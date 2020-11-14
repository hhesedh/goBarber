import React from "react";
import Button from "../../components/Button";
import { useAuth } from "../../hooks/auth";

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <>
      <h1>DashBoard</h1>
      <Button
        onClick={(event) => {
          event.preventDefault();
          signOut();
        }}
      >
        Deslogar
      </Button>
    </>
  );
};

export default Dashboard;
