import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Flex,
  Image,
  Button,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  Text,
  Divider,
  useBreakpointValue,
} from "@chakra-ui/react";

import Logo from "../../assets/LOGO.svg";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FaBook, FaUserAlt } from "react-icons/fa";
import { useAuth } from "../../contexts/Auth.Context";

import { FaSignOutAlt } from "react-icons/fa";
import { PatchInfo } from "../PatchInfo";
import imgNotFound from "../../assets/v.jpeg";
export const Links = ["Home", "Artists", "About"];

export const NavBarDash = () => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("@Bookink:user") || "{}");
  const { logout, userSessions } = useAuth();

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
      <Flex
        alignItems="center"
        onClick={() => history.push("/")}
        w={["200px"]}
        ml="20px"
        cursor="pointer"
      >
        <Image src={Logo}></Image>
      </Flex>

      {isWideVersion ? (
        <Flex fontFamily="Arapey">
          <Button
            _focus={{ shadow: "none" }}
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
            _focus={{ shadow: "none" }}
            _hover={{
              borderBottom: "3px solid",
              borderColor: "orange.800",
            }}
            mr="10px"
            w="80px"
            borderRadius="0"
            onClick={() => history.push("/bookings")}
          >
            {userSessions.length > 0 && (
              <Text
                position="absolute"
                mb="20px"
                ml="70px"
                bg="orange.300"
                borderRadius="full"
                padding="1px 5px"
                color="gray.100"
              >
                {userSessions.length}
              </Text>
            )}
            BOOKINGS
          </Button>
          <Flex mr="20px">
            <Menu>
              <MenuButton
                _focus={{ shadow: "none" }}
                as={IconButton}
                aria-label="Options"
                variant="outline"
                bgImage={user.img ? user.img : imgNotFound}
                bgSize="contain"
                _active={{
                  bgImage: `${user.img ? user.img : imgNotFound}`,
                  bgSize: "contain",
                }}
                _hover={{
                  bgImage: `${user.img ? user.img : imgNotFound}`,
                  bgSize: "contain",
                }}
              />
              <MenuList
                display="flex"
                color="gray.100"
                bg="orange.800"
                flexDir="column"
              >
                <PatchInfo />
                <Divider width="150px" m="0 auto" />
                <Button
                  m={2}
                  _focus={{ shadow: "none" }}
                  borderRadius={3}
                  fontFamily="Arapey"
                  fontSize={["lg", "2xl", "2xl", "2xl"]}
                  onClick={() => logout()}
                  _hover={{ bg: "orange.100" }}
                  bg="none"
                >
                  {" "}
                  <FaSignOutAlt />
                  <Text ml="5px">LOGOUT</Text>
                </Button>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      ) : (
        <Flex mr="20px" color="gray.100" bg="orange.800">
          <Menu>
            <MenuButton
              _focus={{ shadow: "none" }}
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
                _focus={{ shadow: "none" }}
                borderRadius={3}
                fontFamily="Arapey"
                fontSize={["lg", "2xl", "2xl", "2xl"]}
                onClick={() => history.push("/dashboard")}
                _hover={{ bg: "orange.100" }}
                bg="none"
              >
                <FaUserAlt /> <Text ml="5px">ARTISTS</Text>
              </Button>
              <Divider width="150px" m="0 auto" />
              <Button
                m={2}
                _focus={{ shadow: "none" }}
                borderRadius={3}
                fontFamily="Arapey"
                fontSize={["lg", "2xl", "2xl", "2xl"]}
                onClick={() => history.push("/bookings")}
                _hover={{ bg: "orange.100" }}
                bg="none"
              >
                <FaBook /> <Text ml="5px">BOOKINGS</Text>
              </Button>
              <Divider width="150px" m="0 auto" />
              <PatchInfo />
              <Divider width="150px" m="0 auto" />
              <Button
                m={2}
                _focus={{ shadow: "none" }}
                borderRadius={3}
                fontFamily="Philosopher"
                fontSize={["lg", "2xl", "2xl", "2xl"]}
                onClick={() => logout()}
                _hover={{ bg: "orange.100" }}
                bg="none"
              >
                {" "}
                <FaSignOutAlt />
                <Text ml="5px">LOGOUT</Text>
              </Button>
            </MenuList>
          </Menu>
        </Flex>
      )}
    </Flex>
  );
};
