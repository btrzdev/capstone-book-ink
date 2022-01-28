import { Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useTattooists } from "../../contexts/Tattooists.Context";
import { User } from "../../types";
import { PerfilBody } from "./PerfilBody";
import { PerfilHeader } from "./PerfilHeader";

export const PerfilTattooist = () => {
  const { loadSpecificTattooist } = useTattooists();
  const [tattooist, setTattooist] = useState<User>();

  useEffect(() => {
    console.log("asd");

    setTattooist(() => {
      const elementId = JSON.parse(
        localStorage.getItem("@Bookink:tattooistId") || ""
      );

      if (elementId) {
        return loadSpecificTattooist(elementId);
      }

      return {} as User;
    });
  }, []);

  return (
    <Flex minH="100vh" flexDir="column">
      <PerfilHeader />
      <PerfilBody tattooist={tattooist} />
    </Flex>
  );
};
