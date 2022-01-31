import { NavBar } from "../../components/NavBar";
import { theme } from "../../style/theme";
import tattooImg from "/home/vitor/MEGA/1_Estudos/ka/q2/CAPSTONE/capstone-book-ink/src/assets/background-tattoo.jpg";
import { Box, Flex, Image, Heading, Text, VStack } from "@chakra-ui/react";

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
        <Box p={0} zIndex="1">
          <NavBar />
        </Box>

        <Flex bg="blue" w="100%">
          <Heading ml="20px" fontSize="6rem" fontFamily="Arapey">
            BOOKINK
          </Heading>
        </Flex>

        <Flex borderTop="solid 20px" borderColor="white">
          <Image src={tattooImg} top="0" zIndex="0" filter="grayscale(100%)" />
        </Flex>
        <Box
          h={["300px", "300px", "400px", "400px"]}
          w="100vw"
          m={0}
          bgColor={theme.colors.gray[100]}
          padding={20}
        >
          <Heading
            fontFamily="Philosopher"
            fontSize={["3xl", "4xl", "5xl", "6xl"]}
            textAlign="center"
          >
            We connect clients with tattooists and reensure your booking
          </Heading>
        </Box>
        <Text
          m={8}
          fontSize={["2xl", "2xl", "3xl", "3xl"]}
          fontFamily="Arapey"
          justifyContent="center"
          textAlign="center"
        >
          A fantastic solution for tattoo booking
        </Text>

        <Text
          m={5}
          fontSize={["2xl", "2xl", "3xl", "3xl"]}
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
