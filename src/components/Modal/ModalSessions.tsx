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

import { CalendarPage } from "../CalendarPage";

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
      <ModalContent fontFamily="Alata" bg="gray.100">
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <CalendarPage />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
