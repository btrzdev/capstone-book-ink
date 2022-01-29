import { Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useTattooists } from "../../contexts/Tattooists.Context";
import { User } from "../../types";
import { PerfilBody } from "./PerfilBody";
import { PerfilHeader } from "./PerfilHeader";

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
      flexDir="column"
      bgGradient="linear(to-t, #ABA394, #686255)"
    >
      <PerfilHeader />
      <PerfilBody tattooist={tattooist} />
    </Flex>
  );
};
