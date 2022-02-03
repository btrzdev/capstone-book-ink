import { Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import imgComments1 from "../../assets/comment1.jpeg";
import imgComments2 from "../../assets/comment2.jpeg";
import imgComments3 from "../../assets/comment3.png";
import imgComments4 from "../../assets/comment4.jpg";

export const HomeComments = () => {
  return (
    <Flex
      w="100%"
      mt="50px"
      fontFamily="Alata"
      flexDir="column"
      alignItems="center"
    >
      <Flex mb="50px" alignItems="center" flexDir="column">
        <Text color="orange.800"> RECOMMENDED BY USERS </Text>
        <Divider border="2px" w="200px" />
        <Heading color="orange.800">COMMENTS</Heading>
        <Divider border="2px" w="200px" />
      </Flex>

      <Flex
        alignItems="center"
        w="90%"
        flexDir={["column", "column", "row", "row"]}
        padding="5px"
      >
        <Flex
          alignItems={["center", "center", "flex-start", "flex-start"]}
          w="90%"
          flexDir={["column", "column", "column-reverse", "column-reverse"]}
          padding="5px"
        >
          <Heading fontSize="1rem" fontFamily="Alata">
            Isabella Guimarães
          </Heading>
          <Image
            w="100px"
            h="100px"
            m="10px 0"
            borderRadius="full"
            src={imgComments1}
          />
          <Text textAlign={["center", "center", "left", "left"]} w="90%">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ullam
            aliquid, eos quidem sequi a in ratione incidunt eligendi et. Quae
            quas quaerat explicabo et tempore quos eveniet saepe facere.
          </Text>
        </Flex>

        <Flex
          alignItems={["center", "center", "flex-end", "flex-end"]}
          w="90%"
          flexDir={["column", "column", "column-reverse", "column-reverse"]}
          padding="5px"
        >
          <Heading fontSize="1rem" fontFamily="Alata">
            Reinaldo Ribeiro
          </Heading>
          <Image
            w="100px"
            h="100px"
            m="10px 0"
            borderRadius="full"
            src={imgComments2}
          />
          <Text textAlign={["center", "center", "right", "right"]} w="90%">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ullam
            aliquid, eos quidem sequi a in ratione incidunt eligendi et. Quae
            quas quaerat explicabo et tempore quos eveniet saepe facere.
          </Text>
        </Flex>
      </Flex>
      <Flex
        alignItems="center"
        w="90%"
        flexDir={["column", "column", "row", "row"]}
        padding="5px"
      >
        <Flex
          alignItems={["center", "center", "flex-start", "flex-start"]}
          w="90%"
          flexDir={["column", "column", "column-reverse", "column-reverse"]}
          padding="5px"
        >
          <Heading fontSize="1rem" fontFamily="Alata">
            Amanda Duppont
          </Heading>
          <Image
            w="100px"
            h="100px"
            m="10px 0"
            borderRadius="full"
            src={imgComments3}
          />
          <Text textAlign={["center", "center", "left", "left"]} w="90%">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ullam
            aliquid, eos quidem sequi a in ratione incidunt eligendi et. Quae
            quas quaerat explicabo et tempore quos eveniet saepe facere.
          </Text>
        </Flex>

        <Flex
          alignItems={["center", "center", "flex-end", "flex-end"]}
          w="90%"
          flexDir={["column", "column", "column-reverse", "column-reverse"]}
          padding="5px"
        >
          <Heading fontSize="1rem" fontFamily="Alata">
            Jorge da Silva
          </Heading>
          <Image
            style={{ filter:  "sepia(0.4) grayscale(0.1)"}}
            w="100px"
            h="100px"
            m="10px 0"
            borderRadius="full"
            src={imgComments4}
          />
          <Text textAlign={["center", "center", "right", "right"]} w="90%">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ullam
            aliquid, eos quidem sequi a in ratione incidunt eligendi et. Quae
            quas quaerat explicabo et tempore quos eveniet saepe facere.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
