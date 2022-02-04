import {
  Divider,
  Flex,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Arrow from "../../assets/seta.png";

export const HomeHowItWorks = () => {
  return (
    <Flex
      w="100%"
      fontFamily="Alata"
      flexDir="column"
      alignItems="center"
      bg="background: #4c4343;
      background: linear-gradient(0deg,#38312d 20%, #4c4343 80%);
      background: -webkit-linear-gradient(-90deg,#38312d 20%,5F493F#aba394 80%);
      background: -moz-linear-gradient(-90deg,#38312d 20%, #5F493F 80%);"
    >
      <Divider border="2px" w="100%" />
      <Flex m="25px 0" alignItems="center" flexDir="column">
        <Text color="gray.800"></Text>

        <Heading color="gray.800">HOW IT WORKS?</Heading>
        <Image src={Arrow} />
        <Text fontSize="1.5rem" fontFamily="Alata">
          {" "}
        </Text>
      </Flex>
      <Flex
        fontSize={["1.3rem", "5rem"]}
        fontFamily="Philosopher"
        w="100%"
        color="gray.200"
        mb="50px"
        listStyleType="none"
        display="flex"
        flexDir="column"
        alignItems="center"
      >
        <Flex
          fontSize={["1.3rem", "1.75rem"]}
          m="15px 0px"
          textAlign={["center"]}
        >
          Get in touch with artists from your area or any where in the world!
        </Flex>
        <Flex
          fontSize={["1.3rem", "1.75rem"]}
          m="15px 0px"
          textAlign={["center"]}
        >
          Check their profile and work!
        </Flex>
        <Flex
          fontSize={["1.3rem", "1.75rem"]}
          m="15px 0px"
          textAlign={["center"]}
        >
          {" "}
          Find the artist you are looking for!{" "}
        </Flex>
        <Flex fontSize={["1.3rem", "1.75rem"]} textAlign={["center"]}>
          Schedule a Booking!{" "}
        </Flex>
      </Flex>
    </Flex>
  );
};
