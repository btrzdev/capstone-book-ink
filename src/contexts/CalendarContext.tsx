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
import { api } from "../services/api";
import { Sessions, Event } from "../types/index";

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
interface CalendarProviderProps {
  children: ReactNode;
}
interface CalendarContextData {
  allEvents: Event[];
  submitEvent: (data: Sessions) => Promise<void>;
}
const CalendarContext = createContext<CalendarContextData>(
  {} as CalendarContextData
);

const context = useContext(CalendarContext);

const [event, setEvent] = useState<Event>({} as Event);
const [allEvents, setAllEvents] = useState<Event[]>([] as Event[]);

const CalendarProvider = ({ children }: CalendarProviderProps) => {
  const submitEvent = useCallback(async (data: Sessions) => {
    const token = localStorage.getItem("@Bookink:accessToken") || "[]";
    await api
      .post(`/sessions`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <CalendarContext.Provider
      value={{
        allEvents,
        submitEvent,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export { CalendarProvider };
