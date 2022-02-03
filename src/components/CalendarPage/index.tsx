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

interface Props {
  localizer: DateLocalizer;
}

export const calendarPage = () => {
  const { allEvents, submitEvent } = useCalendar();
  const [eventData, setEventData] = useState<Event[]>(allEvents.map((e) => e));

  return (
    <Flex>
      <Heading>Calendar</Heading>
      <Heading>Add new Event </Heading>
      <Flex>
        <Input
          type="text"
          placeholder="Add Title"
          style={{ width: "20%", marginRight: "100px" }}
          value={allEvents.map((e) => e.title)}
          onChange={(e) => console.log(eventData)}
        />
      </Flex>
      <Button onClick={() => submitEvent}> Booking a tattoo </Button>

      <DatePicker
        placeholderText="End Date"
        selected={new Date()}
        name="end"
        onChange={(date) => console.log(date)}
      />
      <Calendar
        localizer={localizer}
        events={allEvents}
        style={{ height: 500, margin: "50px" }}
        startAccessor={(events: Event) => {
          return events.start;
        }}
      />
    </Flex>
  );
};
