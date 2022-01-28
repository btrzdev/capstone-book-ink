import { Flex, Image, Box } from "@chakra-ui/react";

import img from "../../assets/tattoo-bg.svg";

export const LoginHeader = () => {
  return (
    <Flex h="100vh" w="100%" bgGradient="linear(to-t, #ABA394, #686255)">
      <Box w="300px" h="100vh" bgImage={img} id="box-test"></Box>
    </Flex>
  );
};
