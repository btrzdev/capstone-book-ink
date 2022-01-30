import { ReactNode } from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Spacer,
  Link,
  Image,
  Button,
} from "@chakra-ui/react";

import Logo from "../../assets/LOGO.svg";
import { theme } from "../../style/theme";
import { useAuth } from "../../contexts/Auth.Context";

export const Links = ["Home", "Artists", "About"];

export const HeaderDashboard = () => {
  const history = useHistory();
  const { logout } = useAuth();

  return (
    <Flex
      m={8}
      h={10}
      w="90vw"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box m={2} w="400px">
        <Image m={0} boxSize="300px" src={Logo}></Image>
      </Box>

      <Box w="300px" display="flex">
        <Link m={2} fontSize="2xl" fontFamily="Arapey" padding="4px">
          {" "}
          About
        </Link>
        <Button
          m={2}
          borderRadius={3}
          bgColor={theme.colors.gray[800]}
          color={theme.colors.gray[100]}
          fontFamily="Philosopher"
          fontSize="2xl"
          onClick={logout}
          _hover={{ bg: "#443407" }}
        >
          {" "}
          Logout
        </Button>
      </Box>
    </Flex>
  );
};
