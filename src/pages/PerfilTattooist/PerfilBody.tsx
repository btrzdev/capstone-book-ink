import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  ListItem,
  Text,
  Textarea,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaCommentAlt, FaRegCommentAlt, FaUserAlt } from "react-icons/fa";
import { useTattooists } from "../../contexts/Tattooists.Context";
import { User } from "../../types";

interface PerfilBodyProps {
  tattooist?: User;
}

export const PerfilBody = ({ tattooist }: PerfilBodyProps) => {
  const [onChange, setOnChange] = useState<string>("");
  const { submitComment } = useTattooists();

  const handleClick = () => {
    const user = JSON.parse(localStorage.getItem("@Bookink:user") || "{}");
    const data = { name: user.name, userId: tattooist?.id, comment: onChange };
    console.log(data);
    // submitComment(data);
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
      <Flex flexDir="column" w="310px">
        <Heading>Bio</Heading>
        <Flex bg="yellow.30">
          <Text padding="20px" fontFamily="Alata">
            "{tattooist?.bio}
          </Text>
        </Flex>
      </Flex>
      <Flex mt="20px" flexDir="column" w="310px">
        <Heading>Comments</Heading>
        <UnorderedList listStyleType="none" m="0">
          {React.Children.toArray(
            tattooist?.comments.map((element) => (
              <ListItem m="20px 5px">
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
              </ListItem>
            ))
          )}
        </UnorderedList>
        <VStack space={2} bg="blue">
          <Textarea bg="white" placeholder="Add Comment"></Textarea>
          <Button onClick={() => handleClick()}>Submit</Button>
        </VStack>
      </Flex>
    </Flex>
  );
};
