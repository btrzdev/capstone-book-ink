import { Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useTattooists } from "../../contexts/Tattooists.Context";
import { User } from "../../types";
import { PerfilBody } from "./PerfilBody";
import { HeaderProfileTattooist } from "./HeaderProfileTattooist";

export const PerfilTattooist = () => {
  const { tattooists, loadTattooists, loadSpecificTattooist } = useTattooists();
  const [tattooist, setTattooist] = useState<User>();

  useEffect(() => {
    setTattooist(() => {
      const elementId = JSON.parse(
        localStorage.getItem("@Bookink:tattooistId") || ""
      );

      if (elementId) {
        return loadSpecificTattooist(elementId);
      }

      return {} as User;
    });
  }, [tattooists]);

  return (
    <Flex
      minH="100vh"
      flexDirection={["column", "column", "column", "column"]}
      bgGradient="linear(to-t, #ABA394, #686255)"
      fontFamily="Alata"
    >
      <HeaderProfileTattooist />
      <PerfilBody tattooist={tattooist} />
    </Flex>
  );
};
