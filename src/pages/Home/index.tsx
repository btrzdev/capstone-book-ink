import tattooImg from "../../assets/background-tattoo.jpg";
import { Flex, Image, Heading, Text } from "@chakra-ui/react";
import { HomeDevs } from "./HomeDevs";
import { HomeComments } from "./HomeComments";
import { HomeHowItWorks } from "./HomeHowItWorks";
import { NavBarHome } from "../../components/NavBar/NavBarHome";
import { motion } from "framer-motion";
import Art from "../../assets/needle.png";

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Flex
        alignItems="center"
        minH="100vh"
        flexDirection="column"
        p={0}
        bgGradient="linear(to-t, #686255,#ABA394)"
        w="100%"
      >
        <NavBarHome />

        <Flex
          w="100%"
          m={["50px 0px", "0px"]}
          justifyContent={["center"]}
          flexDir="column"
          alignItems="center"
        >
          <Flex
            boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.5) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
            w="100%"
            mt={["50px"]}
            borderColor="rgba(255,255,255,0.3)"
            flexDir={["column", "column", "column", "row"]}
          >
            <Image
              src={tattooImg}
              top="0"
              zIndex="0"
              w={["100%", "100%", "100%", "50%"]}
              filter="grayscale(100%)"
            />
            <Flex
              p="30px 10px"
              w={["100%", "100%", "100%", "50%"]}
              bg="orange.800"
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
                <Image
                  src={Art}
                  mb="15px"
                  mt="10px"
                  style={{ filter: "invert(0.1)" }}
                  height="100px"
                />
              </Text>
              <Heading
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
        </Flex>
        <HomeDevs />
        <HomeHowItWorks />
        <HomeComments />
      </Flex>
    </motion.div>
  );
};
