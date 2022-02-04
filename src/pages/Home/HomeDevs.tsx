import { Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import imgVitor from "../../assets/vitor.jpeg";
import imgBea from "../../assets/bea.jpeg";
import imgLuiz from "../../assets/luiz.png";
import imgJoao from "../../assets/joao.jpeg";

export const HomeDevs = () => {
  return (
    <Flex
      w="100%"
      mt="20px"
      fontFamily="Alata"
      flexDir="column"
      alignItems="center"
    >
      <Flex mt="25px" mb="25px" alignItems="center" flexDir="column">
        <Text color="orange.800">THE</Text>
        <Divider border="2px" w="200px" />
        <Heading color="orange.800">DEVELOPERS</Heading>
        <Divider border="2px" w="200px" />
        <Text color="orange.800" fontSize="1.5rem" fontFamily="Alata">
          {" "}
        </Text>
      </Flex>

      <Flex
        alignItems="center"
        w="90%"
        flexDir={["column", "column", "row", "row"]}
        padding="5px"
        mb="20px"
      >
        <Flex
          alignItems={["center", "center", "flex-start", "flex-start"]}
          w="90%"
          flexDir={["column", "column", "column-reverse", "column-reverse"]}
          padding="5px"
        >
          <Heading color="orange.800" fontSize="1rem" fontFamily="Alata">
            PO - Vitor Soares
          </Heading>
          <Image
            w="100px"
            h="100px"
            m="10px 0"
            borderRadius="full"
            src={imgVitor}
          />
          <Text
            color="orange.800"
            textAlign={["center", "center", "left", "left"]}
            w="90%"
          >
            O objetivo nesse momento é me capacitar, e assim estou, e trabalhar
            em uma empresa que tenha como valores a colaboração e não a
            competitividade, a harmonia e não a desunião, a fraternidade e não a
            descomunhão.
          </Text>
        </Flex>

        <Flex
          alignItems={["center", "center", "flex-end", "flex-end"]}
          w="90%"
          flexDir={["column", "column", "column-reverse", "column-reverse"]}
          padding="5px"
        >
          <Heading color="orange.800" fontSize="1rem" fontFamily="Alata">
            SM - Luiz Pombo
          </Heading>
          <Image
            w="100px"
            h="100px"
            m="10px 0"
            borderRadius="full"
            src={imgLuiz}
          />
          <Text
            color="orange.800"
            textAlign={["center", "center", "right", "right"]}
            w="90%"
          >
            A programação começou a fazer parte da minha vida em 2020, desde
            então, diariamente estou aprimorando minhas competências e
            habilidades. Hoje trazemos esse projeto para demonstrar como a
            tecnologia pode automatizar e facilitar a vida do trabalhador.
          </Text>
        </Flex>
      </Flex>
      <Flex
        alignItems="center"
        w="90%"
        flexDir={["column", "column", "row", "row"]}
        padding="5px"
        mb="20px"
      >
        <Flex
          alignItems={["center", "center", "flex-start", "flex-start"]}
          w="90%"
          flexDir={["column", "column", "column-reverse", "column-reverse"]}
          padding="5px"
        >
          <Heading color="orange.800" fontSize="1rem" fontFamily="Alata">
            QA - João Pedro
          </Heading>
          <Image
            w="100px"
            h="100px"
            m="10px 0"
            borderRadius="full"
            src={imgJoao}
          />
          <Text
            color="orange.800"
            textAlign={["center", "center", "left", "left"]}
            w="90%"
          >
            Apaixonado por tecnologia e pela capacidade que ela tem de mudar a
            nossa vida. Eu busco criar soluções para construir uma realidade
            melhor para todos.
          </Text>
        </Flex>

        <Flex
          alignItems={["center", "center", "flex-end", "flex-end"]}
          w="90%"
          flexDir={["column", "column", "column-reverse", "column-reverse"]}
          padding="5px"
        >
          <Heading color="orange.800" fontSize="1rem" fontFamily="Alata">
            TL - Beatriz Silva
          </Heading>
          <Image
            w="100px"
            h="100px"
            m="10px 0"
            borderRadius="full"
            src={imgBea}
          />
          <Text
            color="orange.800"
            textAlign={["center", "center", "right", "right"]}
            w="90%"
          >
            A minha relação com a tecnologia está diretamente atrelada a ideia
            de resolução de problemas e facilitação do cotidiano. O
            desenvolvimento dessa aplicação traz preocupações reais e a
            aplicação dos conceitos na prática.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
