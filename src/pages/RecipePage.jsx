/* eslint-disable */

import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Heading,
  Text,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { RecipeTag } from "../components/UI/RecipeTag";
import { Nutrients } from "../components/UI/Nutrients";

export const RecipePage = ({ recipe, clickFn }) => {
  return (
    <Card variant="elevated" backgroundColor="white" w={[300, 1200]}>
      <CardHeader
        backgroundColor="white"
        borderTopLeftRadius={5}
        borderTopRightRadius={5}
        justify='center'
        align='center'
      >
        <IconButton
          aria-label="Back"
          icon={<ChevronLeftIcon />}
          cursor={"pointer"}
          onClick={() => clickFn()}
          size="lg"
          colorScheme="green"
          variant="outline"
        />
      </CardHeader>
      <CardBody p={0}>
        <Image src={recipe.image} objectFit='cover' w={[300, 1200]} h={[200, 400]} />
        <Flex flexDir={['column', 'row']} p={[10, 20]}>
          <Flex w={['100%', '60%']} flexDir='column' gap={2} mb={[5, 0]}>
            <Text textTransform="uppercase">{recipe.mealType}</Text>

            <Heading fontSize={['xl', '3xl']} fontWeight="semibold">
              {recipe.label}
            </Heading>
            <Text>
              <Text>
                Total cooking time:{" "}
                <Text as="span" fontWeight="semibold">
                  {recipe.totalTime} minutes
                </Text>
              </Text>
              <Text>
                Servings:{" "}
                <Text as="span" fontWeight="semibold">
                  {recipe.yield}
                </Text>
              </Text>
            </Text>
            <Heading fontSize='xl' fontWeight="semibold">
              Ingredients:
            </Heading>
            {recipe.ingredientLines.map((ingredient, index) => (
              <Text key={index} fontSize="sm">
                {ingredient}
              </Text>
            ))}
          </Flex>
          <Flex w={['100%', '40%']} flexDir='column' flexWrap='wrap' gap={2}>
            {recipe.healthLabels.length > 0 && (
              <>
                <Text>Health labels:</Text>
                <Flex flexWrap='wrap' gap={2}>
                  {recipe.healthLabels.map((healthLabel, index) => (
                    <RecipeTag key={index} colorScheme='green' label={healthLabel} />
                  ))}
                </Flex>
              </>
            )}
            {recipe.dietLabels.length > 0 && (
              <>
                <Text>Diet:</Text>
                <Flex flexWrap="no-wrap" gap={2}>
                  {recipe.dietLabels.map((dietLabel, index) => (
                    <RecipeTag key={index} colorScheme='blue' label={dietLabel} />
                  ))}
                </Flex>
              </>
            )}
            {recipe.cautions.length > 0 && (
              <>
                <Text>Cautions:</Text>
                <Flex flexWrap='no-wrap' gap={2}>
                  {recipe.cautions.map((caution, index) => (
                    <RecipeTag key={index} colorScheme='orange' label={caution} />
                  ))}
                </Flex>
              </>
            )}
            <Heading fontSize={'md'} fontWeight="semibold" mt={2}>
              Total nutrients:
            </Heading>

            <Nutrients recipe={recipe} />
          </Flex>
        </Flex>

      </CardBody>
    </Card >
  );
};
