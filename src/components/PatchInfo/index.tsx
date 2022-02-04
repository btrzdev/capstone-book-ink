import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { Patched } from "../../types";
import { api } from "../../services/api";

const patchSchema = yup.object().shape({
  email: yup.string().required("E-mail required").email("E-mail invalid"),
  name: yup.string().required("Name required"),
});

export const PatchInfo = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [id, setId] = useState<number>(0);

  const [token, setToken] = useState<string>("");
  useEffect(() => {
    const info = JSON.parse(localStorage.getItem("@Bookink:user") || "{}");
    setEmail(info.email);
    setName(info.name);
    setId(info.id);
    setToken(localStorage.getItem("@Bookink:accessToken") || "");
  }, []);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm<Patched>({
    resolver: yupResolver(patchSchema),
  });

  const handlePatch = (data: Patched) => {
    api
      .patch(`/users/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast({
          title: "information successfully changed",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
        onClose();
      })
      .catch((err) => {
        toast({
          title: { err },
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      });
  };

  return (
    <>
      <Button
        m={2}
        borderRadius={3}
        _focus={{ shadow: "none" }}
        fontFamily="Arapey"
        fontSize={["lg", "2xl", "2xl", "2xl"]}
        onClick={onOpen}
        _hover={{ bg: "orange.100" }}
        bg="none"
      >
        {" "}
        <IoMdSettings />
        <Text ml="5px">SETTINGS</Text>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent fontFamily="Alata" w="90%" bg="gray.100">
          <ModalHeader></ModalHeader>
          <ModalCloseButton _focus={{ shadow: "none" }} bg="orange.700" />
          <form onSubmit={handleSubmit(handlePatch)}>
            <ModalBody>
              <Text>E-mail</Text>
              <Input
                value={email}
                {...register("email")}
                onChange={(evt) => setEmail(evt.target.value)}
                bg="gray.300"
                _focus={{ bg: "white" }}
              />
              <Text>Name</Text>
              <Input
                value={name}
                {...register("name")}
                onChange={(evt) => setName(evt.target.value)}
                bg="gray.300"
                _focus={{ bg: "white" }}
              />
            </ModalBody>

            <ModalFooter>
              <Button
                m={2}
                _focus={{ shadow: "none" }}
                borderRadius={3}
                fontFamily="Arapey"
                fontSize={["lg", "2xl", "2xl", "2xl"]}
                _hover={{ bg: "orange.100" }}
                onClick={onClose}
                bg="gray.300"
              >
                Close
              </Button>
              <Button
                m={2}
                _focus={{ shadow: "none" }}
                borderRadius={3}
                fontFamily="Arapey"
                fontSize={["lg", "2xl", "2xl", "2xl"]}
                _hover={{ bg: "orange.100" }}
                type="submit"
                bg="orange.700"
                color="gray.100"
              >
                Edit
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};
