import {
  Flex,
  Button,
  Slider,
  SliderMark,
  SliderTrack,
  SliderThumb,
  SliderFilledTrack,
  Tooltip,
  Text,
  Heading,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  CloseButton,
  toast,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegCommentAlt, FaStar } from "react-icons/fa";
import { Input } from "../../components/Input";
import { useTattooists } from "../../contexts/Tattooists.Context";
import { User } from "../../types";
import { CommentData } from "./PerfilBody";

interface PerfilNewCommentProps {
  tattooist?: User;
}

export const PerfilNewComment = ({ tattooist }: PerfilNewCommentProps) => {
  const [sliderValue, setSliderValue] = React.useState(1);
  const [showTooltip, setShowTooltip] = React.useState(false);
  const [onChange, setOnChange] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const { submitComment } = useTattooists();
  const toast = useToast();

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
        reset();
        toast({
          title: "Sucess",
          description: "Comment added",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((_) => {
        setLoading(false);
        reset();
        toast({
          title: "Error",
          description: "Something went wrong.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
    <Flex
      as="form"
      onSubmit={handleSubmit(handleClick)}
      mb="20px"
      flexDir="column"
      align="flex-start"
    >
      <Input
        id="fieldComment"
        bg="white"
        {...register("comment")}
        onChange={(e) => setOnChange(e.target.value)}
        placeholder="Add Comment"
        h="60px"
        icon={FaRegCommentAlt}
      />
      <Text mt={5}>Rate tattoist</Text>
      <Slider
        w="90%"
        id="slider"
        m="5px 0px 20px 10px"
        defaultValue={1}
        min={1}
        max={5}
        colorScheme="orange"
        onChange={(v) => setSliderValue(v)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {" "}
        <SliderMark value={1} mt="-1.5" ml="0" fontSize="sm">
          i
        </SliderMark>
        <SliderMark value={2} mt="-1.5" ml="0" fontSize="sm">
          i
        </SliderMark>
        <SliderMark value={3} mt="-1.5" ml="0" fontSize="sm">
          i
        </SliderMark>
        <SliderMark value={4} mt="-1.5" ml="0" fontSize="sm">
          i
        </SliderMark>
        <SliderMark value={5} mt="-1.5" ml="-1" fontSize="sm">
          i
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg="teal.500"
          color="white"
          placement="top"
          isOpen={showTooltip}
          label={`${sliderValue}`}
        >
          <SliderThumb boxSize={6} color="yellow" bg="orange">
            <FaStar />
          </SliderThumb>
        </Tooltip>
      </Slider>
      <Button isLoading={loading} type="submit">
        Send
      </Button>
    </Flex>
  );
};
