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
import { FaHome, FaUserAlt } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";

export const Links = ["Home", "Artists", "About"];

export const NavBarHome = () => {
  const history = useHistory();

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
      <Flex ml="10px">
        <Image src={Logo} w="350px" />
      </Flex>
      <Flex
        alignItems="center"
        w={["200px"]}
        ml="20px"
        onClick={() => history.push("/")}
        cursor="pointer"
      ></Flex>

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
            fontSize={["1.4rem"]}
            borderRadius="0"
            onClick={() => history.push("/")}
          >
            HOME
          </Button>
          <Button
            bg="none"
            _hover={{
              borderBottom: "3px solid",
              borderColor: "orange.800",
            }}
            mr="10px"
            w="80px"
            fontSize={["1.4rem"]}
            borderRadius="0"
            onClick={() => history.push("/login")}
          >
            LOGIN
          </Button>
          <Button
            _hover={{
              border: "2px solid",
              borderColor: "orange.700",
              bg: "gray.100",
              color: "orange.700",
            }}
            mr="10px"
            w="100px"
            fontSize={["1.4rem"]}
            color="gray.100"
            bg="orange.700"
            borderRadius="3px"
            onClick={() => history.push("/register")}
          >
            REGISTER
          </Button>
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
              color="gray.100"
              bg="orange.800"
              display="flex"
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
                <FaHome />
                <Text ml="5px">HOME</Text>
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
                <FaUserAlt />
                <Text ml="5px">LOGIN</Text>
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
                <IoMdPersonAdd />
                <Text ml="5px">REGISTER</Text>
              </Button>
            </MenuList>
          </Menu>
        </Flex>
      )}
    </Flex>
  );
};
