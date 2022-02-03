import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

interface ModalSessionsProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const ModalSessions = ({
  isOpen,
  onOpen,
  onClose,
}: ModalSessionsProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Get in touch with the artist!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Your message here</Text>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
