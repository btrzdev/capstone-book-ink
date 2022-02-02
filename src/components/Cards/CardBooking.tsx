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
} from "@chakra-ui/react";
import { useState } from "react";
import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import { BookingData } from "../../pages/Bookings";
import { Sessions } from "../../types";

interface CardBookingProps {
  session: Sessions;
  handleRequest: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<BookingData>;
  loading: boolean;
}

export const CardBooking = ({
  session,
  handleRequest,
  errors,
  register,
  loading,
}: CardBookingProps) => {
  const [accepted, setAccepted] = useState<boolean>(true);
  const [pending, setPending] = useState<boolean>(false);
  const [messageRes, setMessageReq] = useState<string>("");
  const [userId, setUserId] = useState<number>(0);

  return (
    <Box
      as="form"
      onSubmit={handleRequest}
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
        <Input {...register("message")} onChange={(e) => e.target.value} />
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
