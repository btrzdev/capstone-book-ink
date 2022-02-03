import {
  Divider,
  Flex,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import imgVitor from "../../assets/vitor.jpeg";
import imgBea from "../../assets/bea.jpeg";
import imgLuiz from "../../assets/luiz.png";
import imgJoao from "../../assets/joao.jpeg";

export const HomeHowItWorks = () => {
  return (
    <Flex
      w="100%"
      fontFamily="Alata"
      flexDir="column"
      alignItems="center"
      bg="orange.800"
    >
      <Divider border="2px" w="100%" />
      <Flex m="25px 0" alignItems="center" flexDir="column">
        <Text color="gray.800"></Text>

        <Heading color="gray.800">HOW IT WORKS?</Heading>

        <Text fontSize="1.5rem" fontFamily="Alata">
          {" "}
        </Text>
      </Flex>
      <UnorderedList
        fontSize={["1.3rem", "5rem"]}
        fontFamily="Arapey"
        w="90%"
        color="gray.200"
        mb="50px"
      >
        <ListItem fontSize={["1.3rem", "2rem"]}>
          Get in touch with artists from your area or any where in the world
        </ListItem>
        <ListItem fontSize={["1.3rem", "2rem"]}>
          Check their profile and work
        </ListItem>
        <ListItem fontSize={["1.3rem", "2rem"]}>
          {" "}
          Find the artist you are looking for{" "}
        </ListItem>
        <ListItem fontSize={["1.3rem", "2.4rem"]}>Make a BookInk!</ListItem>
      </UnorderedList>
    </Flex>
  );
};
