import { NavBar } from "../../components/NavBar";
import { theme } from "../../style/theme";

import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";

export const Home = () => {
  return (
    <VStack>
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
        <Box
          h="200px"
          w="100vw"
          m={0}
          bgColor={theme.colors.gray[100]}
          padding={12}
          backgroundImage="url('.././assets/TattooBg.svg')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
        >
          <Heading fontFamily="Philosopher" fontSize="4xl" textAlign="center">
            We connect clients with tattooists and reensure your booking
          </Heading>
        </Box>
        <Text fontSize={theme.fontSizes.lg} fontFamily="Arapey">
          A fantastic solution for tattoo booking
        </Text>

        <Text m={5} fontFamily="Arapey" color={theme.colors.gray[800]}>
          HOW IT WORKS
        </Text>
      </Flex>
    </VStack>
  );
};
