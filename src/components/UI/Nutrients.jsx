/* eslint-disable */

import { Flex, Heading, Text } from '@chakra-ui/react';

export const Nutrients = ({ recipe }) => {

    const NutrientItem = ({ label, quantity }) => (
        <Flex flexDir='column' flexWrap='no-wrap'>
            <Text>{quantity.toFixed(0)}</Text>
            <Text textTransform='uppercase' fontSize={['2xs', 'xs']} fontWeight='bold'>
                {label}
            </Text>
        </Flex>
    );

    return (
        <Flex flexDir='row' flexWrap='wrap' gap={5}>
            <NutrientItem label="Calories" quantity={recipe.calories} />
            <NutrientItem label={recipe.totalNutrients.CHOCDF.label} quantity={recipe.totalNutrients.CHOCDF.quantity} />
            <NutrientItem label={recipe.totalNutrients.PROCNT.label} quantity={recipe.totalNutrients.PROCNT.quantity} />
            <NutrientItem label={recipe.totalNutrients.FAT.label} quantity={recipe.totalNutrients.FAT.quantity} />
            <NutrientItem label={recipe.totalNutrients.CHOLE.label} quantity={recipe.totalNutrients.CHOLE.quantity} />
            <NutrientItem label={recipe.totalNutrients.NA.label} quantity={recipe.totalNutrients.NA.quantity} />
        </Flex>
    );
};