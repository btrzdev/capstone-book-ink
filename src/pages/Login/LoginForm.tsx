import { Button, Heading, VStack, Text, Flex } from "@chakra-ui/react";
import { Input } from "../../components/Input";
import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import { LoginData } from ".";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useAuth } from "../../contexts/Auth.Context";
import { useHistory } from "react-router-dom";

interface LoginFormProps {
  handleSignIn: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<LoginData>;
  loading: boolean;
}

export const LoginForm = ({
  handleSignIn,
  errors,
  register,
  loading,
}: LoginFormProps) => {
  const { login } = useAuth();
  const history = useHistory();

  return (
    <VStack w="100vw" maxW="377px" m="0" display="flex">
      <Flex
        onSubmit={handleSignIn}
        as="form"
        w="90%"
        m="20px 0px 10px 0"
        flexDir="column"
        border="1px"
        borderColor="gray.100"
        borderRadius="5px"
        boxShadow=" rgba(149, 157, 165, 0.2) 0px 8px 24px"
      >
        <Heading size="lg" m="30px 0px 0px 18px">
          {" "}
          Entrar
        </Heading>
        <VStack mt="6" spacing="5">
          <Flex w="90%">
            <Input
              placeholder="Digite seu email"
              type="email"
              error={errors.email}
              icon={FaEnvelope}
              {...register("email")}
            />
          </Flex>
          <Flex w="90%">
            <Input
              type="password"
              placeholder="Digite sua senha"
              error={errors.password}
              icon={FaLock}
              {...register("password")}
            />
          </Flex>
        </VStack>
        <VStack m="10px 0px 20px 0px" spacing="5">
          <Button
            isLoading={loading}
            bg="green.800"
            w="91%"
            color="white"
            h="60px"
            borderRadius="8px"
            _hover={{
              filter: "brightness(80%)",
            }}
            type="submit"
          >
            Login
          </Button>
          <Text fontSize="14px" color="gray.400" w="70%" textAlign="center">
            Crie sua conta e marque sua sessão de tattoo!{" "}
          </Text>
          <Button
            bg="gray.100"
            w="91%"
            color="gray.300"
            h="60px"
            borderRadius="8px"
            onClick={() => history.push("/register")}
            _hover={{
              background: "gray.200",
            }}
          >
            Cadastrar
          </Button>
        </VStack>
      </Flex>
    </VStack>
  );
};
