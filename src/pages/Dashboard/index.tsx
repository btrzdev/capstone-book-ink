import {
  Button,
  Flex,
  Heading,
  Input,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/Auth.Context";
import { useTattooists } from "../../contexts/Tattooists.Context";
import { DashboardList } from "./DashboardList";
import { HeaderDashboard } from "./HeaderDashboard";
import { SearchIcon } from "@chakra-ui/icons";
import { FaSearch } from "react-icons/fa";
import { NavBarDash } from "../../components/NavBar/NavbarDash";
import { StringSchema } from "yup";
import { User } from "../../types";
import { boolean } from "yup/lib/locale";

export const Dashboard = () => {
  const { logout } = useAuth();
  const { loadTattooists, tattooists, setTattooists } = useTattooists();

  useEffect(() => {
    loadTattooists();
  }, []);

  interface CommentsProps {
    comment: string;
    id: number;
    name: string;
    rate: number;
    userId: number;
  }

  const [input, setInput] = useState("");

  function showTattooists(input: string) {
    const filtered = tattooists.filter((tattoist) =>
      tattoist.name.toLowerCase().includes(input)
    );
    setTattooists([...filtered]);
  }

  return (
    <Flex
      w="100%"
      // bg="gray.300"
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
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            onClick={() => {
              console.log("oi");
              showTattooists(input);
            }}
          />
        </InputGroup>
      </Flex>

      <DashboardList tattooists={tattooists} />
    </Flex>
  );
};
