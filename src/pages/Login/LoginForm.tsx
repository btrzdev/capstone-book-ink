import { Button, Heading, VStack, Text, Flex, Link } from "@chakra-ui/react";
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
import { theme } from "../../style/theme";

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
  const history = useHistory();

  return (
    <VStack w="100vw" maxW="377px" height="600px" m="0" display="flex">
      <Flex
        onSubmit={handleSignIn}
        as="form"
        w="100%"
        m="20px 0px 10px 0"
        flexDir="column"
        boxShadow=" rgba(149, 157, 165, 0.2) 0px 8px 24px"
      >
        <Heading color={theme.colors.gray[100]} size="lg" m="30px 0px 0px 18px">
          {" "}
          Login
        </Heading>
        <VStack mt="6" spacing="5">
          <Flex w="90%">
            <Input
              placeholder="Your email"
              type="email"
              error={errors.email}
              icon={FaEnvelope}
              {...register("email")}
            />
          </Flex>
          <Flex w="90%">
            <Input
              type="password"
              placeholder="Your password"
              error={errors.password}
              icon={FaLock}
              {...register("password")}
            />
          </Flex>
        </VStack>
        <VStack m="10px 0px 20px 0px" spacing="5">
          <Button
            isLoading={loading}
            bg={theme.colors.orange[700]}
            w="91%"
            color={theme.colors.gray[100]}
            h="60px"
            borderRadius="2px"
            _hover={{
              filter: "brightness(80%)",
            }}
            type="submit"
          >
            Sign in
          </Button>
          <Link
            onClick={() => history.push("/register")}
            fontSize="14px"
            color={theme.colors.gray[100]}
            w="70%"
            textShadow="2px 2px 4px #000000"
            textAlign="center"
          >
            or create an account{" "}
          </Link>
        </VStack>
      </Flex>
    </VStack>
  );
};
