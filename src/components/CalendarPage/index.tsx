import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAuth } from "../../contexts/Auth.Context";
import {
  Flex,
  Button,
  Heading,
  Input,
  Textarea,
  Text,
  Box,
} from "@chakra-ui/react";

import { useState } from "react";

import { api } from "../../services/api";

export const CalendarPage = () => {
  const { user, accessToken } = useAuth();

  const [title, setTitle] = useState<string>("");
  const [allDay, setAllDay] = useState<boolean>(true);
  const [start, setStart] = useState<string | undefined>("");
  const [userId, setUserId] = useState<number>(() => {
    const response = JSON.parse(
      localStorage.getItem("@Bookink:tattooistInfo") || "{}"
    );
    const { id } = response;
    return id;
  });

  const [messageRequest, setMessageRequest] = useState<string>("");

  const handleSubmit = () => {
    const data = {
      allEvents: {
        title: title,
        allDay: allDay,
        start: start,
      },
      accepted: false,
      pending: true,
      client: user.email,
      clientId: user.id,
      userId: userId,
      messageRequest: messageRequest,
      messageResponse: "",
    };
    api
      .post("/sessions", data, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <Flex w="100%" h={"auto"} flexDirection="column">
      <Heading fontFamily="Alata">Request your booking!</Heading>

      <Input
        type="text"
        w="100%"
        placeholder="Add title"
        bg="gray.300"
        m="20px 0 10px 0"
        onChange={(e) => setTitle(e.target.value)}
      />

      <Textarea
        bg="gray.300"
        placeholder="Send your message"
        onChange={(e) => setMessageRequest(e.target.value)}
      />

      <Flex
        justifyContent="space-around"
        alignItems="center"
        paddingBottom="10px"
        m="20px 0 0 0"
      >
        <Text>Select date </Text>
        <Box position="relative">
          <DatePicker
            placeholderText="Choose a session day "
            selected={new Date()}
            name="start"
            onChange={(date) => {
              setStart(String(date?.toUTCString()));
            }}
          />
        </Box>
      </Flex>
      <Flex justifyContent="end">
        <Button
          w="100px"
          m="20px 0"
          onClick={handleSubmit}
          bg="orange.700"
          color="gray.100"
          _hover={{ bg: "orange.600" }}
        >
          {" "}
          Booking{" "}
        </Button>
      </Flex>
    </Flex>
  );
};
