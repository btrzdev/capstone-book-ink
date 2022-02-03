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
import { Sessions, Event } from "../../types";

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

export const calendarPage = ({ session }: Sessions) => {
  return (
    <Flex>
      <DatePicker
      
      
      
      />

    </Flex>
  );
};
