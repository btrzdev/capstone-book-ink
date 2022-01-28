import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { User } from "../../types";

interface PerfilBodyProps {
  tattooist?: User;
}

export const PerfilBody = ({ tattooist }: PerfilBodyProps) => {
  return (
    <Flex flexDir="column">
      <Flex alignItems="center">
        <Flex flexDir="column" w="50%">
          <Heading fontSize="lg" textAlign="center">
            {tattooist?.name}
          </Heading>
          <Image w="160px" src={tattooist?.img} />
        </Flex>
        <Flex
          flexDir="column"
          h="100px"
          w="50%"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            bg="gray.400"
            color="gray.100"
            border="3px solid"
            borderColor="orange.800"
            w="80%"
          >
            Marcar horário
          </Button>
          <Button
            bg="orange.100"
            color="gray.100"
            mt="10px"
            border="3px solid"
            borderColor="orange.800"
            w="80%"
          >
            Ver Trabalhos
          </Button>
        </Flex>
      </Flex>
      <Flex flexDir="column" bg="brown">
        <Heading>Bio</Heading>
        <Flex>
          <Text bg="yellow.30" fontFamily="Alata">
            "{tattooist?.bio}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
