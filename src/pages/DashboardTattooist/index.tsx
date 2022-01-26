import { Button, Heading } from "@chakra-ui/react";
import { useAuth } from "../../contexts/Auth.Context";

export const DashboardTattooist = () => {
  const { logout } = useAuth();
  return (
    <Heading>
      DashboardTattoist
      <Button onClick={logout}>Sair</Button>
    </Heading>
  );
};
