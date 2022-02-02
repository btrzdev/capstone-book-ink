import { Flex, ListItem, UnorderedList } from "@chakra-ui/react";
import { CardBooking } from "../../components/Cards/CardBooking";
import { NavBarDash } from "../../components/NavBar/NavbarDash";
import { useAuth } from "../../contexts/Auth.Context";
import React, { useEffect, useState } from "react";

export const Bookings = () => {
  const { userSessions, loadSessions, user } = useAuth();

  useEffect(() => {
    loadSessions(user.id);
  }, [userSessions]);

  return (
    <Flex
      w="100%"
      minH="100vh"
      flexDir="column"
      alignItems="center"
      bgGradient="linear(to-t, #686255,#ABA394)"
    >
      <NavBarDash />
      <UnorderedList m="0">
        {React.Children.toArray(
          userSessions.map((session) => (
            <ListItem listStyleType="none">
              <CardBooking session={session} />
            </ListItem>
          ))
        )}
      </UnorderedList>
    </Flex>
  );
};
