import { Flex, Heading, Image, useToast, Box } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Input } from "../../components/Input";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/Auth.Context";
import { LoginForm } from "./LoginForm";
import { LoginHeader } from "./LoginHeader";
import img from "../../assets/tattoo-vector-black.png";
import imgLogo from "../../assets/LOGO.svg";

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
        reset();
      });
  };

  return (
    <Flex
      bgGradient="linear(to-t, #ABA394, #686255)"
      alignItems="center"
      w="100vw"
      height={["auto", "auto", "100vh", "100vh"]}
    >
      <Flex
        flexDirection={["column-reverse", "column-reverse", "row", "row"]}
        alignItems="center"
        justifyContent="right"
        bgGradient="linear(to-t, #ABA394, #686255)"
        bgImage={img}
        backgroundPosition="left"
        backgroundSize="80%"
        backgroundRepeat="no-repeat"
        w={["100%", "100%", "70%", "70%"]}
        h="100vh"
      >
        <Flex justifyContent="left" flexDirection="column">
          <LoginForm
            errors={errors}
            handleSignIn={handleSubmit(handleSignIn)}
            loading={loading}
            register={register}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
