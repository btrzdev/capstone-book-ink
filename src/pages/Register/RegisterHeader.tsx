import { Center, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { FiShoppingBag } from "react-icons/fi";

export const RegisterHeader = () => {
  return (
    <VStack w="100vw" maxW="377px" m="0" display="flex">
      <Flex w="90%" m="50px 0px 10px 0">
        <Flex fontSize={["2xl"]} alignItems="flex-end">
          <Heading display="flex" alignItems="flex-end">
            Burguer
          </Heading>
          <Heading
            h="100%"
            m="0px 0px 5px 5px"
            color="#EB5757"
            fontSize={["md"]}
            fontWeight="700"
            display="flex"
            alignItems="flex-end"
          >
            Kenzie
          </Heading>
        </Flex>
      </Flex>
      <Flex
        border="1px"
        borderColor="gray.100"
        borderRadius="5px"
        w="90%"
        h="95px"
        alignItems="center"
        justifyContent="center"
        boxShadow=" rgba(149, 157, 165, 0.2) 0px 8px 24px"
      >
        <Center
          bg="green.200"
          color="green.800"
          w="60px"
          h="60px"
          borderRadius="5px"
        >
          <FiShoppingBag />
        </Center>
        <Text fontSize="14px" w="200px" color="gray.300" ml="5px">
          A vida é como um sanduíche, é preciso recheá-la com os{" "}
          <strong>melhores </strong>
          ingredientes.
        </Text>
      </Flex>
    </VStack>
  );
};
