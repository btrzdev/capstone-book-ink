import { Flex, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import { CardBooking } from "../../components/Cards/CardBooking";
import { NavBarDash } from "../../components/NavBar/NavbarDash";

export const Bookings = () => {
  return (
    <Flex
      w="100%"
      minH="100vh"
      flexDir="column"
      alignItems="center"
      bgGradient="linear(to-t, #686255,#ABA394)"
    >
      <NavBarDash />
      {/* <UnorderedList>
      {React.Children.toArray(
        tattooists.map((tattooist) => (
          <ListItem>
            <CardTatttoist tattooist={tattooist} />
          </ListItem>
        ))
      )}

      </UnorderedList> */}
    </Flex>
  );
};
