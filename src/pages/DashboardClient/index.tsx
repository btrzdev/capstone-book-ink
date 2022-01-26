import { Button, Heading } from "@chakra-ui/react";
import { useAuth } from "../../contexts/Auth.Context";

export const DashboardClient = () => {
  const { logout } = useAuth();
  return (
    <Heading>
      DashboardClient
      <Button onClick={logout}>Sair</Button>
    </Heading>
  );
};
