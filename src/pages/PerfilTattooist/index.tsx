import { Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTattooists } from "../../contexts/Tattooists.Context";
import { User } from "../../types";

export const PerfilTattooist = () => {
  const { id } = useParams<{ id?: string }>();
  const { tattooists } = useTattooists();
  const [tattooist, setTattooist] = useState<User>({} as User);

  useEffect(() => {
    const a = tattooists.find((element) => element.id === Number(id));
    console.log(a);
    // setTattooist({...a});
  }, []);

  return <Heading>PerfilTattooist</Heading>;
};
