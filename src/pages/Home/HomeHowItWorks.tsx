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
      <Flex m="50px 0" alignItems="center" flexDir="column">
        <Text color="gray.800">who were the devs</Text>
        <Divider border="2px" w="200px" />
        <Heading color="gray.800">HOW IT WORKS</Heading>
        <Divider border="2px" w="200px" />
        <Text fontSize="1.5rem" fontFamily="Alata">
          {" "}
          * * *
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
          select the tattoo artist
        </ListItem>
        <ListItem fontSize={["1.3rem", "2rem"]}>
          see your general information
        </ListItem>
        <ListItem fontSize={["1.3rem", "2rem"]}>did you like it?</ListItem>
        <ListItem fontSize={["1.3rem", "2rem"]}>
          make an appointment with him
        </ListItem>
      </UnorderedList>
    </Flex>
  );
};
