import { Flex, Heading, Text } from "@chakra-ui/react";
import { User } from "../../types";

interface PerfilBioProps {
  tattooist?: User;
}

export const PerfilBio = ({ tattooist }: PerfilBioProps) => {
  return (
    <Flex flexDir="column" w={["310px", "360px", "360px", "450px"]}>
      <Heading textShadow="2px 2px 4px #000000" color="gray.100">
        Bio
      </Heading>
      <Flex bg="yellow.30" borderRadius="5px">
        <Text padding="20px" fontFamily="Alata">
          "{tattooist?.bio}
        </Text>
      </Flex>
    </Flex>
  );
};
