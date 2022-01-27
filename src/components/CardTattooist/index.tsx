import { User } from "../../types/index";
import { Flex, Image } from "@chakra-ui/react";
import notFoundImage from "../../assets/notImage.jpg";

interface CardTattoistProps {
  tattooist: User;
}

export const CardTatttoist = ({ tattooist }: CardTattoistProps) => {
  return (
    <Flex b="blue" w="310px" m="0" flexDir="column" alignItems="center">
      <Flex w="90%">
        <Image src={tattooist.img ? tattooist.img : notFoundImage} />
      </Flex>
    </Flex>
  );
};
