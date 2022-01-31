import { ReactNode } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Spacer,
  Image,
  Button,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Text,
  Divider,
} from "@chakra-ui/react";

import Logo from "../../assets/LOGO.svg";
import {
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import { FaHome, FaRegistered, FaUserAlt } from "react-icons/fa";

export const Links = ["Home", "Artists", "About"];

export const NavBar = () => {
  const history = useHistory();

  return (
    <Flex
      zIndex="1"
      w="100%"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex alignItems="center" w={["200px"]} ml="20px">
        <Image src={Logo}></Image>
      </Flex>

      <Flex mr="20px">
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList display="flex" flexDir="column">
            <Button
              m={2}
              borderRadius={3}
              fontFamily="Arapey"
              fontSize={["lg", "2xl", "2xl", "2xl"]}
              onClick={() => history.push("/")}
              _hover={{ bg: "orange.100" }}
              bg="none"
            >
              {" "}
              HOME
            </Button>
            <Divider width="150px" m="0 auto" />
            <Button
              m={2}
              borderRadius={3}
              fontFamily="Arapey"
              fontSize={["lg", "2xl", "2xl", "2xl"]}
              onClick={() => history.push("/login")}
              _hover={{ bg: "orange.100" }}
              bg="none"
            >
              {" "}
              LOGIN
            </Button>
            <Divider width="150px" m="0 auto" />
            <Button
              m={2}
              borderRadius={3}
              fontFamily="Arapey"
              fontSize={["lg", "2xl", "2xl", "2xl"]}
              onClick={() => history.push("/register")}
              _hover={{ bg: "orange.100" }}
              bg="none"
            >
              {" "}
              REGISTER
            </Button>
          </MenuList>
        </Menu>
      </Flex>
      {/* <Box display="flex" bg="violet">
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
          fontSize={["lg", "2xl", "2xl", "2xl"]}
          onClick={() => history.push("/register")}
          _hover={{ bg: "#443407" }}
        >
          {" "}
          SIGN UP
        </Button>
      </Box> */}
    </Flex>
  );
};
