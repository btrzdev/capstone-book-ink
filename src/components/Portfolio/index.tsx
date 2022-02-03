import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface Port {
  src: string;
  userId: number;
  id: number;
}

export const Portfolio = () => {
  const [portfolio, setPortifolio] = useState<Port[]>([] as Port[]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    const info = JSON.parse(localStorage.getItem("@Bookink:user") || "{}");
    api
      .get(`/portifolio/${info.id}`)
      .then((response) => console.log([...response.data]));
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
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {portfolio.map((image) => (
              <img src={image.src} alt={`tattoo ${image.id}`} />
            ))}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
