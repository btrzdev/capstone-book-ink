import { Heading, Flex, ListItem, UnorderedList } from "@chakra-ui/react";
import {} from "@chakra-ui/react";
import { CalendarPage } from "../../components/CalendarPage";
import { NavBarDash } from "../../components/NavBar/NavbarDash";
import { useAuth } from "../../contexts/Auth.Context";
import React, { useState } from "react";

export const Bookings = () => {
  return (
    <Flex>
      <CalendarPage />
    </Flex>
  );
};
