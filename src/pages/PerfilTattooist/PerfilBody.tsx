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
}

export interface CommentData {
  comment: string;
}

export const PerfilBody = ({ tattooist }: PerfilBodyProps) => {
  const [onChange, setOnChange] = useState<string>("");
  const { submitComment } = useTattooists();

  const [sliderValue, setSliderValue] = React.useState(5);
  const [showTooltip, setShowTooltip] = React.useState(false);

  const [loading, setLoading] = useState(false);

  const [numberStar, setNumberStar] = useState<number>(0);

  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm<CommentData>();

  const handleClick = async (data: CommentData) => {
    setLoading(true);

    setOnChange("");
    const user = JSON.parse(localStorage.getItem("@Bookink:user") || "{}");
    const data_ = {
      comment: onChange,
      name: user.name,
      userId: tattooist?.id,
      rate: sliderValue,
    };

    submitComment(data_)
      .then((_) => {
        setLoading(false);
        setSliderValue(1);
        reset();
      })
      .catch((_) => {
        setLoading(false);
        setSliderValue(1);
        reset();
      });
  };

  return (
    <Flex flexDir="column" alignItems="center">
      <Flex alignItems="center">
        <Flex flexDir="column" w="50%">
          <Heading fontSize="lg" textAlign="center">
            {tattooist?.name}
          </Heading>
          <Image w="160px" src={tattooist?.img} />
        </Flex>
        <Flex
          flexDir="column"
          h="100px"
          w="50%"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            bg="gray.400"
            color="gray.100"
            border="3px solid"
            borderColor="orange.800"
            w="80%"
          >
            Marcar horário
          </Button>
          <Button
            bg="orange.100"
            color="gray.100"
            mt="10px"
            border="3px solid"
            borderColor="orange.800"
            w="80%"
            display="flex"
          >
            Portfolio
          </Button>
        </Flex>
      </Flex>
      <PerfilBio tattooist={tattooist} />
      <Flex mt="20px" flexDir="column" w="310px">
        <Heading>Comments</Heading>
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
                <Flex alignItems="center">
                  {React.Children.toArray(
                    Array.from({ length: element.rate }).map(() => (
                      <Box>
                        <FaStar />
                      </Box>
                    ))
                  )}
                </Flex>
              </ListItem>
            ))
          )}
        </UnorderedList>
        <PerfilNewComment tattooist={tattooist} />
      </Flex>
    </Flex>
  );
};
