/* eslint-disable */
import { Input } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeListPage } from "../pages/RecipeListPage";
import { useState } from "react";

export const RecipeSearch = ({clickFn}) => {
    const [searchField, setSearchField] = useState('');
    const matchedRecipes = data.hits.filter((recipe) => {
        const isNameMatch = recipe.recipe.label.toLowerCase().includes(searchField.toLowerCase());
        const isHealthLabelMatch = recipe.recipe.healthLabels.some((healthLabel) =>
          healthLabel.toLowerCase().includes(searchField.toLowerCase())
        );
        return isHealthLabelMatch || isNameMatch;
       
    }); 

    const handleChange = (event) => {
        setSearchField(event.target.value);
    }

    return (
        <>
        <Input onChange={handleChange} w={400} placeholder='Search recipes' variant='subtle'/>
        <RecipeListPage clickFn={clickFn} recipes={matchedRecipes} />

        </>
    )
}