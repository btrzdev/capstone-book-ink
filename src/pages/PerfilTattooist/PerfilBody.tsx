import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FaRegCommentAlt } from "react-icons/fa";
import { Star } from "../../components/Star";
import { User } from "../../types";
import { PerfilBio } from "./PerfilBio";
import { PerfilNewComment } from "./PerfilNewComment";
import notFoundImage from "../../assets/v.jpeg";
import { ModalSessions } from "../../components/Modal/ModalSessions";
import { useHistory } from "react-router-dom";

interface PerfilBodyProps {
  tattooist?: User;
  numberStars: number;
}

export interface CommentData {
  comment: string;
}

export const PerfilBody = ({ tattooist, numberStars }: PerfilBodyProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();

  return (
    <Flex
      paddingTop="0px"
      flexDir={["column", "column", "column", "row-reverse"]}
      justifyContent={["center", "center", "center", "space-evenly"]}
      alignItems="center"
    >
      <Flex
        alignItems={["center"]}
        justifyContent={["center", "center", "flex-start", "flex-start"]}
        flexDirection={["row", "row", "column", "column"]}
        marginTop={["0", "0", "0", "-320px"]}
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
            h={[
              "194px",
              "257.55px",
              "288.13px",
              "288.13px",
              "288.13px",
              "288.13px",
            ]}
            w={["168.47px", "223.47px", "250px", "250px", "250px", "250px"]}
            ml={["10px", "10px", "0", "0"]}
            src={tattooist?.img || notFoundImage}
          />
        </Flex>
        <Flex
          w="50%"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Flex
            flexDir="column"
            alignItems="center"
            mt={["0", "0", "20px", "20px"]}
            mb="20px"
          >
            <Text>Classification</Text>
            <Star numberStars={numberStars} />
          </Flex>
          <Button
            bg="gray.400"
            h="50px"
            color="gray.100"
            border="2px solid"
            fontFamily="Arapey"
            borderColor="orange.800"
            w={["80%", "80%", "100%", "200px"]}
            textShadow="2px 2px 4px #000000"
            onClick={onOpen}
          >
            <ModalSessions onOpen={onOpen} onClose={onClose} isOpen={isOpen} />
            BOOKING TATTOO
          </Button>
          <Button
            bg="orange.100"
            color="gray.100"
            mt="10px"
            border="2px solid"
            fontFamily="Arapey"
            borderColor="orange.800"
            h="50px"
            w={["80%", "80%", "100%", "200px"]}
            display="flex"
            textShadow="2px 2px 4px #000000"
            onClick={() => history.push('/calendar')}
          >
            PORTFOLIO
          </Button>
        </Flex>
      </Flex>

      <Flex mt="20px" w={["310px", "360px", "360px", "450px"]} flexDir="column">
        <PerfilBio tattooist={tattooist} />
        <Heading
          color="gray.100"
          fontFamily="Alata"
          textShadow="2px 2px 4px #000000"
        >
          Comments
        </Heading>
        <UnorderedList mb="50px" listStyleType="none" m="0">
          {React.Children.toArray(
            tattooist?.comments.map((element) => (
              <ListItem
                m="30px 0"
                padding="5px"
                borderRadius="5px"
                bg="#c08b6a2f"
              >
                <Flex>
                  <Box w="20px" fontSize="1.5rem">
                    <FaRegCommentAlt />
                  </Box>
                  <Heading fontFamily="Alata" ml="10px" fontSize="1rem">
                    {element.name}
                  </Heading>
                </Flex>
                <Text
                  mt="5px"
                  textShadow="2px 2px 4px #000000"
                  color="gray.200"
                  fontWeight="700"
                >
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
