import {
  Badge,
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTattooists } from "../../contexts/Tattooists.Context";
import { Sessions } from "../../types";
import { useAuth } from "../../contexts/Auth.Context";

const bookingsSchema = yup.object().shape({
  accepted: yup.boolean(),
  message: yup.string(),
});

interface BookingData {
  data: Sessions;
}

interface CardBookingProps {
  session: Sessions;
}

export const CardBooking = ({ session }: CardBookingProps) => {
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
    data.date = session.date;
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
    >
      <Flex display="flex" alignItems="baseline">
        <Badge borderRadius="full" px="2" color="gray.100" bg="orange.300">
          New
        </Badge>
      </Flex>

      <Box
        mt="1"
        mb="20px"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        isTruncated
      >
        BOOKING REQUEST
      </Box>

      <Box fontWeight="semibold">{session.date}</Box>
      <Box fontWeight="semibold">{session.client}</Box>
      <Flex flexDir="column">
        <Box>{session.messageRequest}</Box>
        {session.messageResponse && (
          <Box mt="10px">R: {session.messageResponse}</Box>
        )}
      </Flex>
      <Box>
        {user.isTattooists ? (
          <>
            <Textarea
              {...register("messageResponse")}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Checkbox
              fontFamily="Alata"
              color="gray.100"
              textShadow="2px 2px 4px #000000"
              colorScheme="green"
              {...register("accepted")}
            >
              You accept?
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
          <Button type="submit">Send</Button>
        ) : (
          <Button
            onClick={() => removeSession(session.id)}
            isLoading={loading}
            type="submit"
          >
            Remove
          </Button>
        )}
      </Flex>
    </Box>
  );
};
