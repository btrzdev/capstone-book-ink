import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAuth } from "../../contexts/Auth.Context";
import { Flex, Button, Heading, Input, Textarea } from "@chakra-ui/react";

import React, { useState } from "react";

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

  console.log("userId", accessToken);
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
    <Flex w={"auto"} h={"auto"} flexDirection="column">
      <Heading>Calendar</Heading>
      <Heading>Add new Event </Heading>

      <Input
        type="text"
        placeholder="Add Title"
        style={{ width: "20%", marginRight: "100px" }}
        onChange={(e) => setTitle(e.target.value)}
      />

      <DatePicker
        placeholderText="Choose a session day "
        selected={new Date()}
        name="start"
        onChange={(date) => {
          setStart(String(date?.toUTCString()));
        }}
      />

      <Textarea onChange={(e) => setMessageRequest(e.target.value)} />

      <Button onClick={handleSubmit}> Booking a tattoo </Button>
    </Flex>
  );
};
