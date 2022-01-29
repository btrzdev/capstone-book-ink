import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  ListItem,
  Text,
  Textarea,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegCommentAlt, FaUserAlt } from "react-icons/fa";
import { useTattooists } from "../../contexts/Tattooists.Context";
import { User } from "../../types";

interface PerfilBodyProps {
  tattooist?: User;
}

interface CommentData {
  comment: string;
}

export const PerfilBody = ({ tattooist }: PerfilBodyProps) => {
  const [onChange, setOnChange] = useState<string>("");
  const { submitComment } = useTattooists();

  const [loading, setLoading] = useState(false);

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
    const data_ = { comment: onChange, name: user.name, userId: tattooist?.id };

    submitComment(data_)
      .then((_) => {
        setLoading(false);
        reset();
      })
      .catch((_) => {
        setLoading(false);
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
        <VStack as="form" onSubmit={handleSubmit(handleClick)} bg="blue">
          <Input
            id="fieldComment"
            bg="white"
            {...register("comment")}
            onChange={(e) => setOnChange(e.target.value)}
            placeholder="Add Comment"
          />
          <Button isLoading={loading} type="submit">
            Submit
          </Button>
        </VStack>
      </Flex>
    </Flex>
  );
};
