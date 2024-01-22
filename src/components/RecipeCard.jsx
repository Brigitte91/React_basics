/* eslint-disable */
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Heading,
  Text,
  Flex,
} from '@chakra-ui/react';
import { RecipeTag } from './UI/RecipeTag';

export const RecipeCard = ({ recipe, clickFn }) => {
  const allowedHealthLabels = ['Vegan', 'Vegetarian']
  const filteredHealthLabels = recipe.healthLabels.filter(healthLabel => allowedHealthLabels.includes(healthLabel))
  return (
    <Card
      cursor='pointer'
      onClick={() => clickFn(recipe)}
      _hover={{ transform: 'scale(1.01)' }}
      w={[300, 350]}
      h={500}
      flexWrap='wrap'
      backgroundColor='white'
      variant='elevated'
    >
      <CardHeader p='0'>
        <Image src={recipe.image} w={350} h={200} borderTopLeftRadius={5} borderTopRightRadius={5} objectFit='cover' />
      </CardHeader>
      <CardBody mb={0}>
        <Flex flexDir='column' gap={2} justify='center' align='center'>

          <Text textTransform='uppercase'>{recipe.mealType}</Text>
          <Heading fontSize={['md', 'xl']} textAlign='center' color='green.900' mb={2}>{recipe.label}</Heading>
          <Flex flexWrap='no-wrap' gap={2} >
            {recipe.dietLabels.map((dietLabel, index) => (
              <RecipeTag key={index} colorScheme='blue' label={dietLabel} />
            ))}
          </Flex>
          <Flex flexWrap='wrap' gap={2}>
            {filteredHealthLabels.map((healthLabel, index) => (
              <RecipeTag key={index} colorScheme='green' label={healthLabel} />
            ))}
          </Flex>


          <Text>Dishtype: {" "}<Text as='span' fontWeight='semibold'>{recipe.dishType}</Text></Text>
          {recipe.cautions.length > 0 && (
            <>
              <Text>Cautions:</Text>
              <Flex flexWrap='wrap' flexDir='row' justify='center' gap={2}>

                {recipe.cautions.map((caution, index) => (
                  <RecipeTag key={index} colorScheme='orange' label={caution} />
                ))}
              </Flex>
            </>)}
        </Flex>

      </CardBody>

    </Card>
  );
};
