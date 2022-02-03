import {
  Button,
  Flex,
  Heading,
  Input,
  InputRightElement,
  InputGroup,
  Divider,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/Auth.Context";
import { useTattooists } from "../../contexts/Tattooists.Context";
import { DashboardList } from "./DashboardList";
import { FaSearch } from "react-icons/fa";
import { NavBarDash } from "../../components/NavBar/NavbarDash";

export const Dashboard = () => {
  const { loadTattooists, tattooists, setTattooists } = useTattooists();
  const { userSessions, loadSessions, user } = useAuth();



  useEffect(() => {
    loadSessions(user.id);
    loadTattooists();
  }, []);

  interface CommentsProps {
    comment: string;
    id: number;
    name: string;
    rate: number;
    userId: number;
  }
  const [notFound, setNotFound] = useState(false);

  function showTattooists(input: string) {
    const filtered = tattooists.filter((tattoist) =>
      tattoist.name.toLowerCase().includes(input.toLowerCase())
    );
    {
      filtered.length > 0 ? setTattooists(filtered) : setNotFound(true);
    }
  }

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
        <InputGroup marginBottom="20px">
          <InputRightElement
            children={<FaSearch color="green.500" />}
            pointerEvents="none"
          />
          <Input
            w="30vw"
            type="text"
            placeholder="Search"
            variant="filled"
            onChange={(e) => showTattooists(e.target.value)}
          />
        </InputGroup>
      </Flex>

      {notFound === true ? null : <DashboardList tattooists={tattooists} />}
    </Flex>
  );
};
