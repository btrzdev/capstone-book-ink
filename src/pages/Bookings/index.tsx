import { Flex, ListItem, UnorderedList } from "@chakra-ui/react";
import { CardBooking } from "../../components/Cards/CardBooking";
import { NavBarDash } from "../../components/NavBar/NavbarDash";
import { useAuth } from "../../contexts/Auth.Context";
import React, { useEffect, useState } from "react";

export const Bookings = () => {
  const { userSessions, loadSessions, user } = useAuth();
  const [update, setUpdate] = useState<boolean>(false);

  useEffect(() => {
    loadSessions(user.id);
  }, [update]);

  const handleUpdate = () => {
    setUpdate(!update);
  };
  console.log(userSessions);
  return (
    <Flex
      w="100%"
      minH="100vh"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-t, #686255,#ABA394)"
    >
      <NavBarDash />
      <UnorderedList
        m="0"
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        alignItems="center"
      >
        {React.Children.toArray(
          userSessions.map((session) => (
            <ListItem
              display="flex"
              justifyContent="center"
              listStyleType="none"
            >
              <CardBooking handleUpdate={handleUpdate} session={session} />
            </ListItem>
          ))
        )}
      </UnorderedList>
    </Flex>
  );
};
