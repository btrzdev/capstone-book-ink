import { Flex, Input, InputRightElement, InputGroup } from "@chakra-ui/react";
import { useEffect } from "react";
import { useTattooists } from "../../contexts/Tattooists.Context";
import { DashboardList } from "./DashboardList";
import { FaSearch } from "react-icons/fa";
import { NavBarDash } from "../../components/NavBar/NavbarDash";
import { useAuth } from "../../contexts/Auth.Context";

export const Dashboard = () => {
  const { loadTattooists, tattooists } = useTattooists();
  const { userSessions } = useAuth();

  useEffect(() => {
    loadTattooists();
  }, []);

  return (
    <Flex
      w="100%"
      minH="100vh"
      flexDir="column"
      alignItems="center"
      bgGradient="linear(to-t, #686255,#ABA394)"
    >
      <NavBarDash />
      <Flex alignItems="right" zIndex="1">
        <InputGroup marginBottom="10px">
          <InputRightElement
            children={<FaSearch color="green.500" />}
            pointerEvents="none"
          />
          <Input w="30vw" type="text" placeholder="Search" variant="filled" />
        </InputGroup>
      </Flex>

      <DashboardList tattooists={tattooists} />
    </Flex>
  );
};
