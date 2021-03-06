import {
  Button,
  Heading,
  VStack,
  Flex,
  Checkbox,
  Textarea,
} from "@chakra-ui/react";
import { Input } from "../../components/Input";
import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import { SignUpData } from ".";
import { FaEnvelope, FaFileImage, FaLock, FaUser } from "react-icons/fa";

interface LoginFormProps {
  handleSignUp: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<SignUpData>;
  loading: boolean;
}

export const RegisterForm = ({
  handleSignUp,
  errors,
  register,
  loading,
}: LoginFormProps) => {
  return (
    <VStack maxW="500px" display="flex" padding="0">
      <Flex
        onSubmit={handleSignUp}
        as="form"
        w="100%"
        m="20px 0px 0px 0"
        padding="0"
        flexDir="column"
        borderColor="gray.100"
        borderRadius="5px"
        fontFamily="Alata"
      >
        <Heading
          display="flex"
          color="gray.100"
          fontFamily="Alata"
          justifyContent="space-between"
          alignItems="center"
          textShadow="2px 2px 4px #000000"
          size="lg"
          m="0px 0px 20px 0"
        >
          {" "}
          Subscribe now to BookInk!
        </Heading>
        <VStack m="10px 0px 20px 0px" spacing="5">
          <Flex w="90%">
            <Input
              placeholder="Your name"
              type="text"
              error={errors.name}
              icon={FaUser}
              {...register("name")}
            />
          </Flex>
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
              type="text"
              placeholder="Profile image link"
              error={errors.img}
              icon={FaFileImage}
              {...register("img")}
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
          <Flex w="90%">
            <Input
              type="password"
              placeholder="Confirm your password"
              error={errors.confirm_password}
              icon={FaLock}
              {...register("confirm_password")}
            />
          </Flex>
          <Flex w="90%">
            <Textarea
              type="text"
              color="gray.100"
              fontFamily="Alata"
              bgColor="orange.700"
              placeholder="Decribe yourself in a few words"
              {...register("bio")}
            />
          </Flex>

          <Flex w="90%">
            <Checkbox
              fontFamily="Alata"
              color="gray.100"
              textShadow="2px 2px 4px #000000"
              error={errors.isTattoists}
              {...register("isTattooists")}
            >
              Are you tattooist?
            </Checkbox>
          </Flex>
          <Button
            _focus={{ shadow: "none" }}
            isLoading={loading}
            bg="orange.700"
            w="91%"
            color="gray.100"
            h="60px"
            borderRadius="2px"
            _hover={{
              filter: "brightness(80%)",
            }}
            type="submit"
          >
            Sign Up
          </Button>
        </VStack>
      </Flex>
    </VStack>
  );
};
