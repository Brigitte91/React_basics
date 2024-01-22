/* eslint-disable */

import { RecipePage } from './pages/RecipePage';
import { useState } from 'react';
import { Center, Heading, Flex } from '@chakra-ui/react';
import { RecipeSearch } from './components/RecipeSearch';



export const App = () => {

  const [selectedRecipe, setSelectedRecipe] = useState();

  return (
    <Center p={[10, 20]} backgroundColor='green.400' minH='100vh'>
      {selectedRecipe ? (
        <RecipePage recipe={selectedRecipe} clickFn={setSelectedRecipe} mt={0} />) : (
        <Flex flexDir='column' justifyContent='center' alignItems='center' gap={[5, 10]}>
          <Heading color='white'>My Recipe Checker</Heading>
          <RecipeSearch clickFn={setSelectedRecipe} />
        </Flex>
      )
      }
    </Center>
  )
};
