/* eslint-disable */

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Text,
  Tag,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

export const RecipePage = ({ recipe, clickFn }) => {
  return (
    <Card w={1200} variant="elevated" backgroundColor="white">
      <CardHeader
        backgroundColor="white"
        borderTopLeftRadius={5}
        borderTopRightRadius={5}
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
        <Image src={recipe.image} objectFit={"cover"} w={1200} h={400} />
        <Flex flexDir="row" p={10}>
          <Flex w="50%" flexDir="column" gap={2}>
            <Text textTransform="uppercase">{recipe.mealType}</Text>

            <Heading fontSize="3xl" fontWeight="semibold">
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
            <Heading fontSize="xl" fontWeight="semibold">
              Ingredients:
            </Heading>
            {recipe.ingredientLines.map((ingredient, index) => (
              <Text key={index} fontSize="sm">
                {ingredient}
              </Text>
            ))}
          </Flex>
          <Flex w="50%" flexDir="column" flexWrap="wrap" gap={2}>
            <Text>Health labels:</Text>
            <Flex flexWrap="wrap" gap={2}>
              {recipe.healthLabels.map((healthLabel, index) => (
                <Tag
                  key={index}
                  colorScheme="green"
                  variant="subtle"
                  textTransform="uppercase"
                  fontSize="xs"
                >
                  {healthLabel}
                </Tag>
              ))}
            </Flex>
            <Text>Diet:</Text>
            <Flex flexWrap="no-wrap" gap={2}>
              {recipe.dietLabels.map((dietLabel, index) => (
                <Tag
                  key={index}
                  colorScheme="blue"
                  variant="subtle"
                  textTransform="uppercase"
                  fontSize="xs"
                >
                  {dietLabel}
                </Tag>
              ))}
            </Flex>
            <Text>Cautions:</Text>
            <Flex flexWrap="no-wrap" gap={2}>
              {recipe.cautions.map((cautions, index) => (
                <Tag
                  key={index}
                  colorScheme="orange"
                  variant="subtle"
                  textTransform="uppercase"
                  fontSize="xs"
                >
                  {cautions}
                </Tag>
              ))}
            </Flex>
            <Heading fontSize="md" fontWeight="semibold" mt={2}>
              Total nutrients:
            </Heading>
            <Flex flexDir='row' flexWrap='wrap' gap={5}>
            <Flex flexDir='column' flexWrap='no-wrap'>
                <Text >{recipe.calories.toFixed(0)}</Text>
                <Text textTransform='uppercase' fontSize='xs' fontWeight='bold'>Calories</Text>
            </Flex>
            <Flex flexDir='column' flexWrap='no-wrap'>
                <Text>{recipe.totalNutrients.CHOCDF.quantity.toFixed(0)}</Text>
                <Text textTransform='uppercase' fontSize='xs' fontWeight='bold'>{recipe.totalNutrients.CHOCDF.label}</Text>
            </Flex>
            <Flex flexDir='column' flexWrap='no-wrap'>
                <Text>{recipe.totalNutrients.PROCNT.quantity.toFixed(0)}</Text>
                <Text textTransform='uppercase' fontSize='xs' fontWeight='bold'>{recipe.totalNutrients.PROCNT.label}</Text>
            </Flex>
            <Flex flexDir='column' flexWrap='no-wrap'>
                <Text>{recipe.totalNutrients.FAT.quantity.toFixed(0)}</Text>
                <Text textTransform='uppercase' fontSize='xs' fontWeight='bold'>{recipe.totalNutrients.FAT.label}</Text>
            </Flex>
            <Flex flexDir='column' flexWrap='no-wrap'>
                <Text>{recipe.totalNutrients.CHOLE.quantity.toFixed(0)}</Text>
                <Text textTransform='uppercase' fontSize='xs' fontWeight='bold'>{recipe.totalNutrients.CHOLE.label}</Text>
            </Flex>
            <Flex flexDir='column' flexWrap='no-wrap'>
                <Text>{recipe.totalNutrients.NA.quantity.toFixed(0)}</Text>
                <Text textTransform='uppercase' fontSize='xs' fontWeight='bold'>{recipe.totalNutrients.NA.label}</Text>
            </Flex>
          </Flex>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};
