const express = require("express");

const { getRecipes, createRecipe, getRecipeByID, updateRecipe, deleteRecipe } = require("../controllers/RecipeController");

const router = express.Router();

// get all recipes
router.get("/", getRecipes);

// create a new recipe
router.post("/", createRecipe);

// get a single recipe by id
router.get("/:id", getRecipeByID);

// update a recipe
router.patch("/:id", updateRecipe);

//delete a recipe
router.delete("/:id", deleteRecipe);

module.exports = router;
