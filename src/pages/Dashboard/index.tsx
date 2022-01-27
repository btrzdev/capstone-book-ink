import { Button, Flex, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useAuth } from "../../contexts/Auth.Context";
import { useTattooists } from "../../contexts/Tattooists.Context";
import { DashboardList } from "./DashboardList";

export const Dashboard = () => {
  const { logout } = useAuth();
  const { loadTattooists, tattooists } = useTattooists();
  useEffect(() => {
    loadTattooists();
  }, []);

  return (
    <Flex flexDir="column" w="100vw" bg="blue" alignItems="center">
      Dashboard
      <Button onClick={logout}>Sair</Button>
      <DashboardList tattooists={tattooists} />
    </Flex>
  );
};
