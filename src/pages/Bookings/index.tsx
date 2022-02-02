import {
  Flex,
  Heading,
  ListItem,
  UnorderedList,
  useToast,
} from "@chakra-ui/react";
import { CardBooking } from "../../components/Cards/CardBooking";
import { NavBarDash } from "../../components/NavBar/NavbarDash";
import { useAuth } from "../../contexts/Auth.Context";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Sessions } from "../../types";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const bookingsSchema = yup.object().shape({
  accepted: yup.boolean(),
  message: yup.string(),
});

export interface BookingData {
  accepted: boolean;
  message: string;
}

export const Bookings = () => {
  const { userSessions } = useAuth();
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm<BookingData>({
    resolver: yupResolver(bookingsSchema),
  });

  const handleRequest = (data: BookingData) => {
    setLoading(true);
    console.log(data);

    // registerUser(data)
    //   .then((_) => {
    //     history.push("/login");
    //     setLoading(false);
    //     toast({
    //       title: "Conta Registrada com sucesso.",
    //       description: "Tente realizar o Login",
    //       status: "success",
    //       duration: 2000,
    //       isClosable: true,
    //       position: "top",
    //     });
    //   })
    //   .catch((err) => {
    //     setLoading(false);
    //   });
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
      <UnorderedList m="0">
        {React.Children.toArray(
          userSessions.map((session) => (
            <ListItem listStyleType="none">
              <CardBooking
                session={session}
                errors={errors}
                handleRequest={handleSubmit(handleRequest)}
                loading={loading}
                register={register}
              />
            </ListItem>
          ))
        )}
      </UnorderedList>
    </Flex>
  );
};
