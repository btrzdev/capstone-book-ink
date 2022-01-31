import { Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import imgVitor from "../../assets/vitor.jpeg";
import imgBea from "../../assets/bea.jpeg";
import imgLuiz from "../../assets/luiz.png";
import imgJoao from "../../assets/joao.jpeg";

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
        <Text color="orange.800">who commented</Text>
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
            SM - Luiz Pombo
          </Heading>
          <Image
            w="100px"
            h="100px"
            m="10px 0"
            borderRadius="full"
            src={imgLuiz}
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
            PO - Vitor Soares
          </Heading>
          <Image
            w="100px"
            h="100px"
            m="10px 0"
            borderRadius="full"
            src={imgVitor}
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
            QA - João Pedro
          </Heading>
          <Image
            w="100px"
            h="100px"
            m="10px 0"
            borderRadius="full"
            src={imgJoao}
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
            TL - Beatriz Silva
          </Heading>
          <Image
            w="100px"
            h="100px"
            m="10px 0"
            borderRadius="full"
            src={imgBea}
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
