import { Flex } from "@chakra-ui/react";
import { Input } from "./components/Input";

export const App = () => {
  return (
    <Flex>
      <h1>App</h1>
      <Input name="exemplo" />
    </Flex>
  );
};
