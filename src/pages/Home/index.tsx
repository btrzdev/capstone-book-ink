import { NavBar } from "../../components/NavBar";
import { theme } from "../../style/theme";
import tattooImg from "../../assets/TattooBg.svg";
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
          h="400px"
          w="100vw"
          m={0}
          bgColor={theme.colors.gray[100]}
          padding={20}
          backgroundImage={tattooImg}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        >
          <Heading fontFamily="Philosopher" fontSize="6xl" textAlign="center">
            We connect clients with tattooists and reensure your booking
          </Heading>
        </Box>
        <Text m={8} fontSize="3xl" fontFamily="Arapey">
          A fantastic solution for tattoo booking
        </Text>

        <Text
          m={5}
          fontSize="3xl"
          textAlign="center"
          fontFamily="Arapey"
          color={theme.colors.gray[800]}
        >
          HOW IT WORKS
        </Text>
      </Flex>
    </VStack>
  );
};
