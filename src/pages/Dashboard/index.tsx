import {
  Button,
  Flex,
  Heading,
  Input,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useAuth } from "../../contexts/Auth.Context";
import { useTattooists } from "../../contexts/Tattooists.Context";
import { DashboardList } from "./DashboardList";
import { HeaderDashboard } from "./HeaderDashboard";
import { SearchIcon } from "@chakra-ui/icons";
import { FaSearch } from "react-icons/fa";
export const Dashboard = () => {
  const { logout } = useAuth();
  const { loadTattooists, tattooists } = useTattooists();

  useEffect(() => {
    loadTattooists();
  }, []);

  return (
    <Flex
      w="100%"
      bg="gray.300"
      minH="100vh"
      flexDir="column"
      alignItems="center"
    >
      <Flex>
        <HeaderDashboard />
      </Flex>
      <Flex alignItems="right">
        <InputGroup marginBottom="10px">
          <InputRightElement
            children={<FaSearch color="green.500" />}
            pointerEvents="none"
          />
          <Input w="20vw" type="text" placeholder="Search" variant="filled" />
        </InputGroup>
      </Flex>

      <DashboardList tattooists={tattooists} />
    </Flex>
  );
};
