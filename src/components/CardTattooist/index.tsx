import { User } from "../../types/index";
import { Button, Flex, Heading, Image, Text, Tooltip } from "@chakra-ui/react";
import notFoundImage from "../../assets/notImage.jpg";
import { useHistory } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

interface CardTattoistProps {
  tattooist: User;
}

export const CardTatttoist = ({ tattooist }: CardTattoistProps) => {
  const history = useHistory();

  return (
    <Flex
      b="blue"
      w="310px"
      flexDir="column"
      bg="orange.800"
      alignItems="center"
      borderRadius="5px"
      m="5px 5px"

      // filter="grayscale(100%)"
      // _hover={{ filter: "grayscale(0%)" }}
    >
      <Flex w="100%" flexDir="column" alignItems="center">
        <Image
          marginTop="10px"
          borderRadius="5px 5px 0px 0px"
          h="350px"
          w="250px"
          src={tattooist.img ? tattooist.img : notFoundImage}
          boxShadow=" rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 64px 16px"
        />
        <Heading
          fontFamily="Alata"
          letterSpacing={-1}
          fontSize="20px"
          color="gray.100"
          marginTop="20px"
        >
          {tattooist.name.toUpperCase()}
        </Heading>
        <Text
          fontFamily="Alata"
          marginTop="5px"
          color="orange.100"
          fontWeight="700"
        >
          - Tattooist -
        </Text>
        <Tooltip label="Ver perfil" placement="top">
          <Button
            bg="gray.800"
            color="orange.100"
            borderRadius="100%"
            padding="5px 2px"
            m="10px 0"
            onClick={() => history.push(`/perfil/${tattooist.id}`)}
          >
            <FaUserAlt />
          </Button>
        </Tooltip>
      </Flex>
    </Flex>
  );
};
