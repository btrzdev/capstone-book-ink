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
import { Sessions, User } from "../types/index";
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

interface Event {
  title: string;
  allDay: boolean;
  start: Date;
  end: Date;
}

interface SessionEvent {

}

//POST Event{} para guardar o agendamento //
//GET para renderizar o agendamento no calendário //
//DELETE para cancelar o agendamento //
//PATCH para editar //


interface CalendarContextData {
    
  allEvents: Event[];
 
  loadEvents: () => Promise<void>;
  
  submitEvent:() => {}
}
const CalendarContext = createContext<CalendarContextData>(
  {} as CalendarContextData
);

const context = useContext(CalendarContext);

const [event, setEvent] = useState<Event>({} as Event);
const [allEvents, setAllEvents] = useState<Event[]>([] as Event[]);

const CalendarProvider = ({ children }: CalendarProviderProps) => {




//   function submitEvent(data: CalendarContextData) {
//     setAllEvents([...allEvents, event]);
//   }

 function submitEvent(data: Event) {
    const response = await api.post("/sessions", data);

    
  }, []);
 }



  const [allEvents, setAllEvents] = useState<Event[]>(() => {
    const allEvents = JSON.parse(
      localStorage.getItem("@Bookink:sessions") || "[]"
    );

    if (allEvents) {
      return allEvents;
    }

    return [] as Event[];
  });

  const loadEvents = useCallback(async () => {
    const response = await api.get("/sessions");

    localStorage.setItem(
      "@Bookink:sessions",
      JSON.stringify([...response.data])
    );
    setAllEvents([...response.data]);
  }, []);

  const submitComment = useCallback(async (data: Object) => {
    const response = await api.post("/sessions", data);

    loadEvents();
  }, []);

//   const submitResponse = useCallback(async (data: Sessions) => {
//     const token = localStorage.getItem("@Bookink:accessToken") || "[]";

    
//     await api
//       .patch(`/sessions/${data.id}`, data, {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((res) => console.log(res.data))
//       .catch((err) => console.log(err));

//     loadEvents();
//   }, []);

  return (
    <CalendarContext.Provider
      value={{
        allEvents,
        loadEvents,
        submitEvent,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export { CalendarProvider };
