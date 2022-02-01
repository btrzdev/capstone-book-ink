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
  useBreakpointValue,
} from "@chakra-ui/react";

import Logo from "../../assets/LOGO.svg";
import {
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import { FaBook, FaHome, FaRegistered, FaUserAlt } from "react-icons/fa";
import { useAuth } from "../../contexts/Auth.Context";
import { IoMdSettings } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";

export const Links = ["Home", "Artists", "About"];

export const NavBarDash = () => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("@Bookink:user") || "{}");
  const { logout } = useAuth();

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex
      zIndex="2"
      w="100%"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex alignItems="center" w={["200px"]} ml="20px">
        <Image src={Logo}></Image>
      </Flex>

      {isWideVersion ? (
        <Flex fontFamily="Arapey">
          <Button
            bg="none"
            _hover={{
              borderBottom: "3px solid",
              borderColor: "orange.800",
            }}
            mr="10px"
            w="80px"
            borderRadius="0"
            onClick={() => history.push("/dashboard")}
          >
            ARTISTS
          </Button>
          <Button
            bg="none"
            _hover={{
              borderBottom: "3px solid",
              borderColor: "orange.800",
            }}
            mr="10px"
            w="80px"
            borderRadius="0"
            onClick={() => history.push("/bookings")}
          >
            BOOKINGS
          </Button>
          <Flex mr="20px">
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                variant="outline"
                bgImage={user.img}
                bgSize="contain"
                _active={{ bgImage: `${user.img}`, bgSize: "contain" }}
                _hover={{ bgImage: `${user.img}`, bgSize: "contain" }}
              />
              <MenuList
                display="flex"
                color="gray.100"
                bg="orange.800"
                flexDir="column"
              >
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
                  <IoMdSettings />
                  <Text ml="5px">Settings</Text>
                </Button>
                <Divider width="150px" m="0 auto" />
                <Button
                  m={2}
                  borderRadius={3}
                  fontFamily="Arapey"
                  fontSize={["lg", "2xl", "2xl", "2xl"]}
                  onClick={() => logout()}
                  _hover={{ bg: "orange.100" }}
                  bg="none"
                >
                  {" "}
                  <FaSignOutAlt />
                  <Text ml="5px">Logout</Text>
                </Button>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      ) : (
        <Flex mr="20px" color="gray.100" bg="orange.800">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
              _hover={{ bg: "orange.800" }}
              _active={{ bg: "orange.800" }}
            />
            <MenuList
              display="flex"
              flexDir="column"
              color="gray.100"
              bg="orange.800"
            >
              <Button
                m={2}
                borderRadius={3}
                fontFamily="Arapey"
                fontSize={["lg", "2xl", "2xl", "2xl"]}
                onClick={() => history.push("/dashboard")}
                _hover={{ bg: "orange.100" }}
                bg="none"
              >
                <FaUserAlt /> <Text ml="5px">Artists</Text>
              </Button>
              <Divider width="150px" m="0 auto" />
              <Button
                m={2}
                borderRadius={3}
                fontFamily="Arapey"
                fontSize={["lg", "2xl", "2xl", "2xl"]}
                onClick={() => history.push("/bookings")}
                _hover={{ bg: "orange.100" }}
                bg="none"
              >
                <FaBook /> <Text ml="5px">Bookings</Text>
              </Button>
              <Divider width="150px" m="0 auto" />
              <Button
                m={2}
                borderRadius={3}
                fontFamily="Arapey"
                fontSize={["lg", "2xl", "2xl", "2xl"]}
                onClick={() => history.push("/bookings")}
                _hover={{ bg: "orange.100" }}
                bg="none"
              >
                {" "}
                <IoMdSettings />
                <Text ml="5px">Settings</Text>
              </Button>
              <Divider width="150px" m="0 auto" />
              <Button
                m={2}
                borderRadius={3}
                fontFamily="Arapey"
                fontSize={["lg", "2xl", "2xl", "2xl"]}
                onClick={() => history.push("/bookings")}
                _hover={{ bg: "orange.100" }}
                bg="none"
              >
                {" "}
                <FaSignOutAlt />
                <Text ml="5px">Logout</Text>
              </Button>
            </MenuList>
          </Menu>
        </Flex>
      )}
    </Flex>
  );
};
