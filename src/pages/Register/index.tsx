import { Flex, Box, Text, Link } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../contexts/Auth.Context";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { RegisterForm } from "./RegisterForm";
import img from "../../assets/tattoo-vector-black.png";
import { NavBarHome } from "../../components/NavBar/NavBarHome";

const signInSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "Mínimo de 6 caracteres"),
  name: yup.string().required("Nome obrigatório"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Senhas diferentes"),
  img: yup.string(),
  bio: yup.string(),
  isTattooists: yup.boolean(),
});

export interface SignUpData {
  email: string;
  password: string;
  name: string;
  img?: string;
  bio?: string;
  confirm_password?: string;
  isTattooists: boolean;
}

export const Register = () => {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const history = useHistory();
  const { register: registerUser } = useAuth();

  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm<SignUpData>({
    resolver: yupResolver(signInSchema),
  });

  const handleSignUp = (data: SignUpData) => {
    setLoading(true);
    delete data.confirm_password;

    registerUser(data)
      .then((_) => {
        history.push("/login");
        setLoading(false);
        toast({
          title: "Conta Registrada com sucesso.",
          description: "Tente realizar o Login",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  return (
    <Flex
      bgGradient="linear(to-t, #686255,#ABA394)"
      alignItems={["center", "center", "right", "right"]}
      minHeight="100vh"
      w="100%"
      justifyContent={["center", "center", "right", "right"]}
      flexDir="column"
    >
      <NavBarHome />
      <Flex
        flexDir={["column", "column", "column", "column"]}
        alignItems="center"
        w="100%"
        bgImage={img}
        backgroundPosition="-30vw"
        backgroundSize={["70%", "70%", "70%", "80%"]}
        backgroundRepeat={["repeat", "50%", "no-repeat", "no-repeat"]}
        minHeight="100vh"
      >
        <Flex
          alignItems={["center", "center", "right", "right"]}
          justifyContent={["center", "center", "right", "right"]}
        >
          <Box
            position={["initial", "initial", "relative", "relative"]}
            left={["0", "0", "20vw", "25vw"]}
          >
            <RegisterForm
              errors={errors}
              handleSignUp={handleSubmit(handleSignUp)}
              loading={loading}
              register={register}
            />
            <Flex paddingLeft={8} mb="20px" paddingTop={0}>
              <Text
                fontFamily="Alata"
                color="gray.100"
                textShadow="2px 2px 4px #000000"
              >
                Already have an account?{" "}
              </Text>
              <Link
                paddingLeft={1}
                fontWeight="bold"
                onClick={() => history.push("/login")}
              >
                {" "}
                Login{" "}
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
