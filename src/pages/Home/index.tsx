import { NavBar } from "../../components/NavBar";
import { theme } from "../../style/theme";
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

export const Home = () => {
  return (
    <Flex
      bgColor={theme.colors.gray[300]}
      alignItems="center"
      h="100vh"
      flexDirection="column"
      p={0}
    >
      <Box p={0}>
        <NavBar></NavBar>
      </Box>
      <Box bgImage="">
        </Box>
    </Flex>
  );
};
