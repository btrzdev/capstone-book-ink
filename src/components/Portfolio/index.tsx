import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface Port {
  img: string;
  userId: number;
  id: number;
}

export const Portfolio = () => {
  const [portfolio, setPortifolio] = useState<Port[]>([] as Port[]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [numberId, setNumberId] = useState<number>(() => {
    const { id } = JSON.parse(
      localStorage.getItem("@Bookink:tattooistInfo") || "{}"
    );

    return id;
  });

  useEffect(() => {
    api
      .get(`/portifolio/${numberId}`)
      .then((response) => setPortifolio([...response.data]));
  }, []);

  return (
    <>
      <Button
        onClick={onOpen}
        bg="orange.100"
        color="gray.100"
        mt="10px"
        border="3px solid"
        borderColor="orange.800"
        h="50px"
        w={["80%", "80%", "100%", "200px"]}
        display="flex"
        textShadow="2px 2px 4px #000000"
      >
        Portfolio
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent fontFamily="Alata" w="90%" bg="gray.100">
          <ModalHeader></ModalHeader>
          <ModalCloseButton bg="orange.700" />
          <ModalBody>
            {portfolio.map((image, index) => (
              <Image
                width="80vh"
                src={image.img}
                key={index}
                alt={`tattoo ${image.id}`}
              />
            ))}
          </ModalBody>
          <ModalFooter>
            <Button
              m={2}
              borderRadius={3}
              fontFamily="Arapey"
              fontSize={["lg", "2xl", "2xl", "2xl"]}
              _hover={{ bg: "orange.100" }}
              onClick={onClose}
              bg="gray.300"
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
