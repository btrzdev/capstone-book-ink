import { Flex, Heading, Text } from "@chakra-ui/react";
import { User } from "../../types";

interface PerfilBioProps {
  tattooist?: User;
}

export const PerfilBio = ({ tattooist }: PerfilBioProps) => {
  return (
    <Flex flexDir="column" w="310px">
      <Heading>Bio</Heading>
      <Flex bg="yellow.30">
        <Text padding="20px" fontFamily="Alata">
          "{tattooist?.bio}
        </Text>
      </Flex>
    </Flex>
  );
};
