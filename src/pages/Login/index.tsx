import { Flex, Heading, Image, useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Input } from "../../components/Input";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/Auth.Context";
import { LoginForm } from "./LoginForm";
import { LoginHeader } from "./LoginHeader";

const signInSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
});

export interface LoginData {
  email: string;
  password: string;
}

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const history = useHistory();
  const { login } = useAuth();

  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm<LoginData>({
    resolver: yupResolver(signInSchema),
  });

  const handleSignIn = (data: LoginData) => {
    setLoading(true);
    login(data)
      .then((response) => {
        history.push("/dashboard");
        setLoading(false);
      })
      .catch((err) => {
        toast({
          title: "Conta não encontrada.",
          description:
            " - Registre-se ou confira os campos se estão incorretos",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        setLoading(false);
        reset();
      });
  };

  return (
    <Flex
      bgGradient="white"
      alignItems="center"
      bg="blue"
      height={["auto", "auto", "100vh", "100vh"]}
    >
      <Flex w="30%" display={["none", "none", "flex", "flex"]}>
        <LoginHeader />
      </Flex>
      <Flex
        flexDirection={["column-reverse", "column-reverse", "row", "row"]}
        alignItems="center"
        justifyContent="center"
        bgGradient="linear(to-t, #ABA394, #686255)"
        w={["100%", "100%", "70%", "70%"]}
        h="100vh"
      >
        <LoginForm
          errors={errors}
          handleSignIn={handleSubmit(handleSignIn)}
          loading={loading}
          register={register}
        />
      </Flex>
    </Flex>
  );
};
