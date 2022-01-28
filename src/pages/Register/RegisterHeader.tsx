import { Center, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { FiShoppingBag } from "react-icons/fi";

export const RegisterHeader = () => {
  return (
    <VStack w="100vw" maxW="377px" m="0" display="flex">
      <Flex w="90%" m="50px 0px 10px 0">
        <Flex bgColor="red" fontSize={["2xl"]} alignItems="flex-end">
          <Heading display="flex" alignItems="flex-end">
            TattooStamp
          </Heading>
        </Flex>
      </Flex>
    </VStack>
  );
};
