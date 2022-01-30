import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { FaStar } from "react-icons/fa";
import { Comment } from "../../types";

interface StarProps {
  comments: Comment[];
}

export const Star = ({ comments }: StarProps) => {
  const maxRate = comments.reduce((acc, element) => (acc += element.rate), 0);
  const qtdCommments = comments.length;

  const average = new Array(Math.round(maxRate / qtdCommments)).fill(0);

  console.log(average);
  return <Flex bg="blue">{/* {average.} */}</Flex>;
};
