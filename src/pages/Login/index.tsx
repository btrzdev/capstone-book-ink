import { Flex, Heading, Image, useToast, Box } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Input } from "../../components/Input";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/Auth.Context";
import { LoginForm } from "./LoginForm";
import img from "../../assets/tattoo-vector-black.png";
import imgLogo from "../../assets/LOGO.svg";
import { NavBar } from "../../components/NavBar";
import { NavBarHome } from "../../components/NavBar/NavBarHome";

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
        setLoading(false);
        history.push("/dashboard");
      })
      .catch((err) => {
        setLoading(false);
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
      bgGradient="linear(to-t, #686255,#ABA394)"
      alignItems="center"
      w="100%"
      minHeight="100vh"
      height={["auto", "auto", "100vh", "100vh"]}
      flexDir="column"
    >
      <NavBarHome />
      <Flex
        flexDirection={["column-reverse", "column-reverse", "row", "row"]}
        alignItems="center"
        justifyContent="right"
        paddingRight="20vw"
        bgImage={img}
        backgroundPosition="-30vw"
        backgroundSize={["70%", "70%", "70%", "80%"]}
        backgroundRepeat={["repeat", "50%", "no-repeat", "no-repeat"]}
        minHeight="100vh"
        w={["100%", "100%", "100%", "100%"]}
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
