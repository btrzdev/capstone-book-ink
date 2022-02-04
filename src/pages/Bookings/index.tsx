import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Flex,
  Image,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { CardBooking } from "../../components/Cards/CardBooking";
import { NavBarDash } from "../../components/NavBar/NavbarDash";
import { useAuth } from "../../contexts/Auth.Context";
import notSessions from "../../assets/notSessions.svg";
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

  return (
    <Flex
      w="100%"
      minH="100vh"
      flexDir="column"
      alignItems="center"
      bgGradient="linear(to-t, #686255,#ABA394)"
    >
      <NavBarDash />
      {userSessions.length > 0 ? (
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
      ) : (
        <Flex flexDir="column" alignItems="center" w="100%">
          <Alert
            status="info"
            bg="orange.800"
            borderRadius="5px"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="200px"
            display="flex"
          >
            <AlertIcon boxSize="40px" mr={0} color="gray.100" />
            <AlertTitle
              mt={4}
              mb={1}
              lineHeight="50px"
              fontSize="3rem"
              color="gray.100"
            >
              No bookings
            </AlertTitle>

            <AlertDescription maxWidth="sm" color="gray.100">
              You don't have any booking
            </AlertDescription>
          </Alert>
          <Image w={["510px"]} h={["510px"]} src={notSessions} />
        </Flex>
      )}
    </Flex>
  );
};
