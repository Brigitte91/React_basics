/* eslint-disable */
import { Heading, Flex } from "@chakra-ui/react";

import { RecipeCard } from "../components/RecipeCard";

export const RecipeListPage = ({ recipes, clickFn }) => {

  return (

      <Flex
      gap={12}
      flexDir={["column", "row"]}
      justifyContent="center"
      alignItems="center"
      flexWrap={'wrap'}
    >
      {recipes.map(({id, recipe}) => (
        <RecipeCard key={id} recipe={recipe} clickFn={clickFn} />
      ))}
      </Flex>

  );
};
