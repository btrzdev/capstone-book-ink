import { Flex, Box, Image, Text, Link } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../contexts/Auth.Context";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { RegisterForm } from "./RegisterForm";
import { RegisterHeader } from "./RegisterHeader";
import img from "../../assets/tattoo-vector-black.png";
import { NavBar } from "../../components/NavBar";
import Logo from "../../assets/LOGO.svg";
import { FaHome } from "react-icons/fa";

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
    console.log(data);
    delete data.confirm_password;

    registerUser(data)
      .then((_) => {
        history.push("/login");
        setLoading(false);
        toast({
          title: "Your account created sucessfully",
          description: "Try login in",
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
      bgGradient="linear(to-t, #ABA394, #686255)"
      alignItens={["center", "center", "right", "right"]}
      minHeight="100vh"
      w="100vw"
      justifyContent={["center", "center", "right", "right"]}
    >
      <Flex
        flexDir={["column", "column", "column", "column"]}
        alignItems="center"
        w="100vw"
        bgImage={img}
        backgroundPosition="-30vw"
        backgroundSize={["70%", "70%", "70%", "80%"]}
        backgroundRepeat={["repeat", "50%", "no-repeat", "no-repeat"]}
        minHeight="100vh"
      >
        <Flex
          w="100vw"
          alignItems={["center", "center", "right", "right"]}
          justifyContent={["center", "center", "right", "right"]}
        >
          <Image src={Logo} />
        </Flex>
        <Flex
          alignItems={["center", "center", "right", "right"]}
          justifyContent={["center", "center", "right", "right"]}
        >
          <Box
            position={["initial", "initial", "initial", "relative"]}
            left="15vw"
            top="-10vh"
          >
            <RegisterForm
              errors={errors}
              handleSignUp={handleSubmit(handleSignUp)}
              loading={loading}
              register={register}
            />
            <Flex paddingLeft={8} paddingTop={0}>
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
