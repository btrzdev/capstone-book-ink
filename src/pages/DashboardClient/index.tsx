import { Button, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useAuth } from "../../contexts/Auth.Context";
import { useTattooists } from "../../contexts/Tattooists.Context";
import { DashboardList } from "./DashboardList";

export const DashboardClient = () => {
  const { logout } = useAuth();
  const { allTattooists, tattooists } = useTattooists();
  useEffect(() => {
    allTattooists();
  }, []);

  console.log("aqui", tattooists);
  return (
    <Heading>
      DashboardClient
      <Button onClick={logout}>Sair</Button>
      <DashboardList tattooists={tattooists} />
    </Heading>
  );
};
