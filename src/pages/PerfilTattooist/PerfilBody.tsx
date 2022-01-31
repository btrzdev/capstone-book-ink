import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  ListItem,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
  Textarea,
  Tooltip,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegCommentAlt, FaStar, FaUserAlt } from "react-icons/fa";
import { Star } from "../../components/Star";
import { useTattooists } from "../../contexts/Tattooists.Context";
import { User } from "../../types";
import { PerfilBio } from "./PerfilBio";
import { PerfilNewComment } from "./PerfilNewComment";

interface PerfilBodyProps {
  tattooist?: User;
  numberStars: number;
}

export interface CommentData {
  comment: string;
}

export const PerfilBody = ({ tattooist, numberStars }: PerfilBodyProps) => {
  return (
    <Flex
      paddingTop="0px"
      flexDir={["column", "column", "column", "row-reverse"]}
      justifyContent={["center", "center", "center", "space-evenly"]}
      alignItems="center"
    >
      <Flex
        alignItems="center"
        flexDirection={["row", "row", "column", "column"]}
        marginTop={["0", "0", "0", "-120px"]}
      >
        <Flex
          flexDir="column"
          w="100%"
          paddingTop="0px"
          justifyContent="center"
          alignItems="center"
        >
          <Heading
            fontSize="2xl"
            textAlign="center"
            color="gray.100"
            fontFamily="Alata"
            textShadow="2px 2px 4px #000000"
          >
            {tattooist?.name}
          </Heading>
          <Image
            boxShadow="5px 5px 8px #000000"
            marginTop="10px"
            marginBottom="10px"
            w="250px"
            src={tattooist?.img}
          />
        </Flex>
        <Flex
          h="100px"
          w="50%"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Flex flexDir="column" alignItems="center" mb="20px">
            <Text>Classification</Text>
            <Star numberStars={numberStars} />
          </Flex>
          <Button
            bg="gray.400"
            color="gray.100"
            border="3px solid"
            borderColor="orange.800"
            h={["80%", "80%", "100%", "20vh"]}
            w={["80%", "80%", "100%", "200px"]}
            textShadow="2px 2px 4px #000000"
          >
            Schedule tattoo
          </Button>
          <Button
            bg="orange.100"
            color="gray.100"
            mt="10px"
            border="3px solid"
            borderColor="orange.800"
            h={["80%", "80%", "100%", "20vh"]}
            w={["80%", "80%", "100%", "200px"]}
            display="flex"
            textShadow="2px 2px 4px #000000"
          >
            Portfolio
          </Button>
        </Flex>
      </Flex>

      <Flex mt="20px" flexDir="column" w="310px">
        <PerfilBio tattooist={tattooist} />
        <Heading
          color="gray.100"
          fontFamily="Alata"
          textShadow="2px 2px 4px #000000"
        >
          Comments
        </Heading>
        <UnorderedList listStyleType="none" m="0">
          {React.Children.toArray(
            tattooist?.comments.map((element) => (
              <ListItem m="50px 5px">
                <Flex>
                  <Box w="20px" fontSize="1.5rem">
                    <FaRegCommentAlt />
                  </Box>
                  <Heading ml="10px" fontSize="1rem">
                    {element.name}
                  </Heading>
                </Flex>
                <Text mt="5px" color="orange.800" fontWeight="700">
                  " {element.comment} "
                </Text>
                <Star numberStars={element.rate} />
              </ListItem>
            ))
          )}
        </UnorderedList>
        <PerfilNewComment tattooist={tattooist} />
      </Flex>
    </Flex>
  );
};
