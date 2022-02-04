import { User } from "../../types/index";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  Tooltip,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import notFoundImage from "../../assets/v.jpeg";
import { useHistory } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { MdOutlineAdsClick } from "react-icons/md";
import React, { useState, useEffect } from "react";

interface CardTattoistProps {
  tattooist: User;
}

export const CardTatttoist = ({ tattooist }: CardTattoistProps) => {
  const history = useHistory();
  const [numberStar, setNumberStar] = useState<number>(0);

  useEffect(() => {
    setNumberStar(
      Math.round(
        tattooist.comments.reduce((acc, element) => (acc += element.rate), 0) /
          tattooist.comments.length
      )
    );
  }, []);

  return (
    <Wrap spacing={6}>
      <WrapItem>
        <Tooltip
          fontFamily="Alata"
          label="PROFILE"
          hasArrow
          arrowSize={15}
          fontWeight="700"
        >
          <Flex
            b="blue"
            w="310px"
            flexDir="column"
            bg="orange.800"
            alignItems="center"
            borderRadius="5px"
            m="5px 5px"
            onClick={() => {
              localStorage.setItem(
                "@Bookink:tattooistInfo",
                JSON.stringify({ id: tattooist.id, stars: numberStar })
              );
              history.push(`/perfil`);
            }}
            cursor="pointer"
          >
            <Flex w="100%" flexDir="column" alignItems="center">
              <Image
                marginTop="10px"
                borderRadius="5px 5px 0px 0px"
                h="350px"
                w="250px"
                src={tattooist.img ? tattooist.img : notFoundImage}
                boxShadow="rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 64px 16px"
              />
              <Heading
                fontFamily="Alata"
                letterSpacing={-1}
                color="gray.100"
                paddingTop="10px"
                fontSize="2xl"
              >
                {tattooist.name.toUpperCase()}
              </Heading>
              <Text
                fontFamily="Alata"
                marginTop="5px"
                color="gray.900"
                fontWeight="700"
              >
                - Tattooist -
              </Text>
              <Flex>
                {React.Children.toArray(
                  Array.from({ length: numberStar }).map(() => (
                    <Box color="orange.200">
                      <FaStar />
                    </Box>
                  ))
                )}
              </Flex>

              <Button
                bg="gray.800"
                color="orange.800"
                borderRadius="100%"
                padding="5px 2px"
                m="10px 0"
                fontSize="1.5rem"
                onClick={() => {
                  localStorage.setItem(
                    "@Bookink:tattooistInfo",
                    JSON.stringify({ id: tattooist.id, stars: numberStar })
                  );
                  history.push(`/perfil`);
                }}
              >
                <MdOutlineAdsClick />
              </Button>
            </Flex>
          </Flex>
        </Tooltip>
      </WrapItem>
    </Wrap>
  );
};
