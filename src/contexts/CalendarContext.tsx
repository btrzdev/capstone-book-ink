import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

import { api } from "../services/api";
import { User } from "../types/index";

interface CalendarProviderProps {
  events: Event[];
  children: ReactNode;
  startAcessor: Date;
  endAcessor: Date;
}

interface Event {
  title: string;
  allDay: boolean;
  start: Date;
  end: Date;
  selected: Object;
}

interface CalendarContextData {
  events: Event[];
  loadTattooists: () => void;
  loadSpecificEvent: (id: number) => User;
}

const CalendarContext = createContext<CalendarContextData>(
  {} as CalendarContextData
);

// const CalendarProvider = ({ children }: CalendarProviderProps) => {
//   const [allEvents, setAllEvents] = useState<Event[]>(() => {});

//   return (
//     <CalendarContext.Provider value={{}}>{children}</CalendarContext.Provider>
//   );
// };

// export { CalendarProvider };
