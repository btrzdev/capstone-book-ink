import { Calendar, dateFnsLocalizer, DateLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@chakra-ui/react";
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
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

interface Props {
  localizer: DateLocalizer;
}

interface CalendarProviderProps {
  allEvents: Event[];
  children: ReactNode;
  startAcessor: Function | string;
  endAcessor: Function | string;
  style: string;
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
  const [event, setEvent] = useState<Event>({} as Event);
  const [allEvents, setAllEvents] = useState<Event[]>([] as Event[]);

  function handleEvents() {
    setAllEvents([...allEvents, event]);
  }

  // function(event: Event){
  //   const objEvent = {...event}
  //   setEvent(objEvent.start)
  //   return

  // }

  return (
    <div className="App">
      <h1>Calendar</h1>
      <h2>Add new Event </h2>
      <div>
        <input
          type="text"
          placeholder="Add Title"
          style={{ width: "20%", marginRight: "100px" }}
          value={event.title}
          onChange={(e) => setEvent({ ...event, title: e.target.value })}
        />
      </div>
      <button style={{ marginTop: "10px" }} onClick={handleEvents}>
        {" "}
        AddEvent
      </button>
      <DatePicker
        placeholderText="Start Date"
        selected={event.start}
        onChange={(e) => setEvent({ ...event })}
        name="start"
      />
      <DatePicker
        placeholderText="End Date"
        selected={event.end}
        name="end"
        onChange={(end) => setEvent({ ...event })}
      />
      <Calendar
        localizer={localizer}
        events={events}
        style={{ height: 500, margin: "50px" }}
        startAccessor={(events: Event) => {
          return events.start;
        }}
        // // endAcessor={(events: Event) => { return events.end }}
      />
      <Button onClick={handleEvents}>Adicionar</Button>
    </div>
  );
}
