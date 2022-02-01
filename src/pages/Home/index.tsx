import { NavBar } from "../../components/NavBar";
import { theme } from "../../style/theme";
// import tattooImg from "/home/vitor/MEGA/1_Estudos/ka/q2/CAPSTONE/capstone-book-ink/src/assets/background-tattoo.jpg";
import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  VStack,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { HomeDevs } from "./HomeDevs";
import { HomeComments } from "./HomeComments";
import { HomeHowItWorks } from "./HomeHowItWorks";

export const Home = () => {
  return (
    <Flex
      alignItems="center"
      minH="100vh"
      flexDirection="column"
      p={0}
      bg="gray.300"
    >
      <NavBar />

      <Flex
        w="100%"
        m={["50px 0px", "0px"]}
        justifyContent={["center"]}
        flexDir="column"
        alignItems="center"
      >
        <Heading
          fontSize={["3rem", "4rem"]}
          fontFamily="Arapey"
          w="100%"
          justifyContent="center"
          display="flex"
        >
          TATTO
        </Heading>
        <Heading
          fontSize={["2rem", "3rem"]}
          fontFamily="Arapey"
          w="100%"
          display="flex"
          justifyContent="center"
          mb={["90px", "80px"]}
        >
          - ARTIST -
        </Heading>
        <Flex
          boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.5) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
          borderTop="solid 20px"
          w="100%"
          borderColor="rgba(255,255,255,0.3)"
        >
          {/* <Image src={tattooImg} top="0" zIndex="0" filter="grayscale(100%)" /> */}
        </Flex>

        <Flex
          p="30px 10px"
          w="100%"
          h="400px"
          bg="orange.700"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
        >
          <Heading
            fontSize={["2rem", "3rem"]}
            fontFamily="Arapey"
            w={["100%", "100%", "70%"]}
            textAlign="center"
          >
            A fantastic solution for tattoo booking
          </Heading>
          <Text mt="20px" fontSize="1.5rem" fontFamily="Alata">
            {" "}
            * * *
          </Text>
          <Heading
            // ml="20px"
            fontSize={["1.3rem", "2.5rem"]}
            fontFamily="Arapey"
            w="100%"
            display="flex"
            color="gray.200"
            textAlign="center"
            justifyContent="center"
          >
            We connect clients with tattooists and reensure your booking
          </Heading>
        </Flex>
      </Flex>
      <HomeDevs />
      <HomeHowItWorks />
      <HomeComments />
    </Flex>
  );
};
