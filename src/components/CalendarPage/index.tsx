import { Calendar, dateFnsLocalizer, DateLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import * as dateFns from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Flex } from "@chakra-ui/react";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

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

interface CalendarProviderProps {
  allEvents: Event[];
  children: ReactNode;
  // startAcessor: Function | string;
  // endAcessor: Function | string;
  // style: string;
  selected: Object;
}

interface Event {
  title: string;
  allDay: boolean;
  start: Date;
  end: Date;
}
const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2022, 0, 0),
    end: new Date(2022, 0, 0),
  },
  {
    title: "Vacation",
    allDay: false,
    start: new Date(2022, 0, 7),
    end: new Date(2022, 0, 24),
  },
  {
    title: "Conference",
    allDay: false,
    start: new Date(2022, 2, 2),
    end: new Date(2021, 2, 12),
  },
];

export function CalendarPage() {
  // const [dateLanded, setDateLanded] = useState<Date>(
  //   dateFns.parse("08/04/2021", "MM/dd/yyyy", new Date())
  // );

  // const [dateDisplayed, setDateDisplayed] = useState<Date>(dateLanded);

  const [event, setEvent] = useState<Event>({} as Event);
  const [allEvents, setAllEvents] = useState<Event[]>([] as Event[]);
  const [startDate, setStartDate] = useState(new Date());

  function handleEvents() {
    // if (event.start === event.end) {
    //   setAllEvents([...allEvents, { ...event, allDay: true }]);
    // } else {
    setAllEvents([...allEvents, event]);
    // }
    // setEvent({} as Event);
  }

  let formats = {
    timeGutterFormat: "HH:mm",
  };

  return (
    <Flex>
      <div className="App">
        <h1>Tattoist Calendar</h1>
        <h2>Booking a tattoo session! </h2>
        <div>
          <input
            type="text"
            placeholder="Your name + body part tattoo"
            style={{ width: "20%", marginRight: "100px" }}
            value={event.title}
            onChange={(e) => setEvent({ ...event, title: e.target.value })}
          />
        </div>

        <DatePicker
          placeholderText="Choose a session day "
          selected={event.start}
          onChange={(start: Date) => setEvent({ ...event, start, end: start })}
          name="start"
        />

        <Button onClick={handleEvents}>Adicionar</Button>
        <Calendar
          localizer={localizer}
          events={allEvents}
          style={{ height: 500, margin: "50px" }}
          showMultiDayTimes={true}
          formats={formats}
          startAccessor={"start"}
          endAccessor={"end"}
          defaultView={"month"}
          selectable={true}
        />
      </div>
    </Flex>
  );
}
