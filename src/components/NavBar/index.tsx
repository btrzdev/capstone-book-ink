import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Link,
  IconButton,
  Image,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";

import { CloseIcon } from "@chakra-ui/icons";
import Logo from "../../assets/LOGO.svg";
import { theme } from "../../style/theme";

export const Links = ["Home", "Artists", "About"];

export const NavBar = () => {
  return (
    <Flex m={10} h={10} alignItems="center" justifyContent="space-evenly">
      <Box m={10}>
        <Image m={0} boxSize="300px" src={Logo} ></Image>
      </Box>
      <Box ml={80} justifyContent="space-between" display="flex">
        <Link m={2} fontSize="lg" fontFamily="Arapey" padding="4px">
          {" "}
          About
        </Link>
        <Button
          m={2}
          borderRadius={3}
          bgColor={theme.colors.gray[800]}
          color={theme.colors.gray[100]}
          fontFamily="Philosopher"
          fontSize="md"
          _hover={{ bg: "#443407" }}
        >
          {" "}
          SIGN UP
        </Button>
      </Box>
    </Flex>
  );
};
