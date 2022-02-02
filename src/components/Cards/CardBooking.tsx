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
  const [messageRes, setMessageReq] = useState<string>("");
  const [userId, setUserId] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const { submitResponse, loadSpecificUser } = useTattooists();

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
    data.messageRequest = session.messageRequest;
    // loadSpecificUser(session.clientId).then((res) => (data.userId = res));
    data.messageRequest = session.messageRequest;
    data.id = session.id;
    // console.log(data);
    // data.userId = numberId;

    // console.log(data);
    submitResponse(data)
      .then((_) => {
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
    <Box
      as="form"
      onSubmit={handleSubmit(handleRequest)}
      p="6"
      border="2px solid"
      borderColor="orange.800"
      m="20px 0"
      fontFamily="Alata"
    >
      <Box display="flex" alignItems="baseline">
        <Badge borderRadius="full" px="2" color="gray.100" bg="orange.300">
          New
        </Badge>
        <Box
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
          ml="2"
        >
          as
        </Box>
      </Box>

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
      <Box>{session.messageRequest}</Box>
      <Box>
        <Textarea
          {...register("messageResponse")}
          onChange={(e) => setMessageReq(e.target.value)}
        />
        <Checkbox
          fontFamily="Alata"
          color="gray.100"
          textShadow="2px 2px 4px #000000"
          colorScheme="green"
          // bg="orange.300"
          {...register("accepted")}
        >
          You accept?
        </Checkbox>
      </Box>
      <Button isLoading={loading} type="submit" mt="20px">
        Send
      </Button>
    </Box>
  );
};
