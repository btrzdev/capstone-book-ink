import { Calendar, dateFnsLocalizer, DateLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import * as dateFns from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { Sessions, Event } from "../../types";
import { useTattooists } from "../../contexts/Tattooists.Context";
import { useAuth } from "../../contexts/Auth.Context";
import { useCalendar } from "../../contexts/CalendarContext";
import {
  Box,
  Flex,
  Link,
  Image,
  Button,
  Heading,
  Input,
} from "@chakra-ui/react";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

const localizer = dateFnsLocalizer({
  format: dateFns.format,
  parse: dateFns.parse,
  startOfWeek: dateFns.startOfWeek,
  getDay: dateFns.getDay,
  locales: { "en-US": require("date-fns/locale/en-US") },
});

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

interface Props {
  localizer: DateLocalizer;
}

export const CalendarPage = () => {
  // const { allEvents, submitEvent } = useCalendar();
  // console.log(allEvents);
  // const [eventData, setEventData] = useState<Event[]>(allEvents.map((e) => e));
  let formats = {
    timeGutterFormat: "HH:mm",
  };

  const { userSessions } = useAuth();
  console.log(userSessions);

  return (
    <Flex w={"auto"} h={"auto"} flexDirection="column">
      {/* <Heading>Calendar</Heading>
      <Heading>Add new Event </Heading>

      <Input
        type="text"
        placeholder="Add Title"
        style={{ width: "20%", marginRight: "100px" }}
        value={userSessions.allEvents.}
      />

      <DatePicker
        placeholderText="Choose a session day "
        selected={new Date()}
        name="end"
        onChange={(date) => console.log(date)}
      />
      <Button onClick={() => submitEvent}> Booking a tattoo </Button>
      <Calendar
        localizer={localizer}
        events={allEvents}
        style={{ height: "100vh", margin: "50px" }}
        startAccessor={"start"}
        endAccessor={"end"}
        showMultiDayTimes={true}
        formats={formats}
        defaultView={"month"}
        selectable={true}
      /> */}
    </Flex>
  );
};
