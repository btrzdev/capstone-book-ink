import {
  Badge,
  Box,
  Button,
  Checkbox,
  Flex,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTattooists } from "../../contexts/Tattooists.Context";
import { Sessions } from "../../types";
import { useAuth } from "../../contexts/Auth.Context";
import {
  FaBook,
  FaCalendar,
  FaCalendarAlt,
  FaEnvelope,
  FaPenAlt,
  FaRegCalendarAlt,
} from "react-icons/fa";

const bookingsSchema = yup.object().shape({
  accepted: yup.boolean(),
  message: yup.string(),
});

interface CardBookingProps {
  session: Sessions;
  handleUpdate: () => void;
}

export const CardBooking = ({ session, handleUpdate }: CardBookingProps) => {
  const [accepted, setAccepted] = useState<boolean>(true);
  const [pending, setPending] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [userId, setUserId] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const { submitResponse, loadSpecificUser } = useTattooists();
  const { user, removeSession } = useAuth();

  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm<Sessions>({
    resolver: yupResolver(bookingsSchema),
  });

  const handleRequest = (data: Sessions) => {
    setLoading(true);
    data.pending = false;
    data.client = session.client;
    data.userId = session.clientId;

    if (session.userId === user.id && user.isTattooists) {
      data.messageResponse = message;
    } else {
      data.messageRequest = message;
    }
    data.id = session.id;

    submitResponse(data)
      .then((_) => {
        handleUpdate();
        setLoading(false);
        toast({
          title: "Enviado",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      })
      .catch((err) => {
        setLoading(false);
        toast({
          title: "Algo deu errado no envio",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      });
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit(handleRequest)}
      p="6"
      border="2px solid"
      borderColor="orange.800"
      m="20px 0"
      fontFamily="Alata"
      w="90%"
      maxW="500px"
      boxShadow="5px 5px 8px #000000ae"
      borderRadius="5px"
      bg="orange.800"
    >
      <Flex
        p="5px"
        display="flex"
        bg="gray.100"
        borderRadius="2px"
        alignItems="center"
      >
        <Badge borderRadius="full" px="2" color="gray.100" bg="orange.300">
          New
        </Badge>

        <Box
          // mt="1"
          ml="10px"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          BOOKING REQUEST
        </Box>
      </Flex>

      {/* informações sobre o dia do evento e o que será feito */}
      <Flex
        flexDir="column"
        // border="1px solid"
        fontFamily="Philosopher"
        borderColor="gray.100"
        borderRadius="5px"
        p="10px"
        m="20px 0"
        color="gray.100"
        bg="#8d7e7e99"
      >
        <Flex alignItems="center" mb="10px" fontWeight="semibold">
          <FaPenAlt /> <Text ml="10px">{session.allEvents.title}</Text>
        </Flex>
        <Flex alignItems="center" mb="10px" fontWeight="semibold">
          <FaRegCalendarAlt />{" "}
          <Text ml="10px">
            {session.allEvents.start?.split(" ").slice(0, 4).join(" ")}
          </Text>
        </Flex>
        <Flex alignItems="center" mb="10px" fontWeight="semibold">
          <FaEnvelope /> <Text ml="10px">{session.client}</Text>
        </Flex>
      </Flex>

      <Flex flexDir="column" mb="20px">
        <Box color="gray.200">{session.messageRequest}</Box>
        {session.messageResponse && (
          <Box mt="10px">R: {session.messageResponse}</Box>
        )}
      </Flex>
      <Box>
        {user.isTattooists ? (
          <>
            <Textarea
              placeholder="Answer"
              bg="gray.100"
              {...register("messageResponse")}
              onChange={(e) => setMessage(e.target.value)}
              mb="10px"
              color="gray.100"
            />
            <Checkbox
              fontFamily="Alata"
              color="gray.800"
              // textShadow="2px 2px 4px #797979"
              fontWeight="700"
              colorScheme="green"
              {...register("accepted")}
              size="lg"
            >
              Accept
            </Checkbox>
          </>
        ) : (
          <>
            {session.pending && (
              <Textarea
                {...register("messageRequest")}
                onChange={(e) => setMessage(e.target.value)}
              />
            )}
          </>
        )}
      </Box>
      <Flex alignItems="center" mt="20px">
        {session.pending ? (
          <Button
            bg="orange.300"
            _hover={{ bg: "orange.600" }}
            color="gray.100"
            type="submit"
          >
            {user.isTattooists ? "Send response" : "Send request"}
          </Button>
        ) : (
          <Button
            onClick={() => removeSession(session.id)}
            isLoading={loading}
            bg="gray.800"
            color="gray.100"
            type="submit"
          >
            Cancel
          </Button>
        )}
      </Flex>
    </Box>
  );
};
