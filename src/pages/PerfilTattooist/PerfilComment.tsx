import { Button, Flex, Heading, Input, Textarea } from "@chakra-ui/react";

export const PErfilComment = () => {
  return <Heading>Olá</Heading>;
};

// import { useState } from "react";
// import { useTattooists } from "../../contexts/Tattooists.Context";
// import { api } from "../../services/api";

// export const PerfilComment = ({ userId, name, comment }: Comment) => {
//   const [change, setChange] = useState<string>("");
//   const { submitComment } = useTattooists();

//   const handleClick = (newComment: string) => {
//     const data = { userId: userId, name: name, comment: newComment };

//     submitComment(data as Comment);
//   };

//   return (
//     <Flex>
//       <Textarea
//         onChange={(e) => setChange(e.target.value)}
//         placeholder="Add comment"
//       />
//       <Button onCLick={handleClick}>Submit</Button>
//     </Flex>
//   );
// };
