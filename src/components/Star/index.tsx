import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { FaStar } from "react-icons/fa";

interface StarProps {
  numberStars: number;
}

export const Star = ({ numberStars }: StarProps) => {
  return (
    <Flex alignItems="center">
      {React.Children.toArray(
        Array.from({ length: numberStars }).map(() => (
          <Box color="orange.200">
            <FaStar />
          </Box>
        ))
      )}
    </Flex>
  );
};
