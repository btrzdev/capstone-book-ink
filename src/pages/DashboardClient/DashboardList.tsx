import { Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { CardTatttoist } from "../../components/CardTattooist";
import { User } from "../../types";

interface DashboardListProps {
  tattooists: User[];
}

export const DashboardList = ({ tattooists }: DashboardListProps) => {
  return (
    <UnorderedList listStyleType="none" m="0">
      {React.Children.toArray(
        tattooists.map((tattooist) => (
          <ListItem>
            <CardTatttoist tattooist={tattooist} />
          </ListItem>
        ))
      )}
    </UnorderedList>
  );
};
