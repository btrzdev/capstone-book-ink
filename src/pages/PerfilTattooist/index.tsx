import { Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useTattooists } from "../../contexts/Tattooists.Context";
import { User } from "../../types";
import { PerfilBody } from "./PerfilBody";
import { HeaderProfileTattooist } from "./HeaderProfileTattooist";

export const PerfilTattooist = () => {
  const { tattooists, loadTattooists, loadSpecificTattooist } = useTattooists();
  const [tattooist, setTattooist] = useState<User>();
  const [numberStars, setNumberStars] = useState<number>(0);

  useEffect(() => {
    setTattooist(() => {
      const element = JSON.parse(
        localStorage.getItem("@Bookink:tattooistInfo") || ""
      );
      setNumberStars(element.stars);
      if (element) {
        return loadSpecificTattooist(element.id);
      }

      return {} as User;
    });
  }, [tattooists]);

  return (
    <Flex
      minH="100vh"
      flexDir="column"
      bgGradient="linear(to-t, #ABA394, #686255)"
      fontFamily="Alata"
    >
      <HeaderProfileTattooist />
      <PerfilBody tattooist={tattooist} numberStars={numberStars} />
    </Flex>
  );
};
