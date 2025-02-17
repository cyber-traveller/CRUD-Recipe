const Recipe = require("../models/RecipeModel");

// Get all Recipes
const getRecipes = async (req, res) => {
  try {
    const Recipes = await Recipe.find();
    res.json(Recipes);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Create a new recipe
const createRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.create(req.body); 
    res.status(201).json(recipe);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
// Find a single User with an id
const getRecipeByID = async (req, res) => {
  try {
      const recipes = await Recipe.findById(req.params.id);
      res.status(200).json(recipes);
  } catch(error) {
      res.status(404).json({ message: error.message});
  }
};

//update a recipe
const updateRecipe = async (req, res) => {
  try {
    const  recipes = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!recipes) {
      return res.status(404).json({ error: "recipe not found" });
    }
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
//delete a recipe
const deleteRecipe = async (req, res) => {
  try {
    const recipes = await Recipe.findByIdAndDelete(req.params.id);
    if (! recipes) {
      return res.status(404).json({ error: " Recipe not found" });
    }
    res.json({ message: "Recipe deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};






module.exports = {
  getRecipes,
  createRecipe,
  getRecipeByID ,
  updateRecipe,
  deleteRecipe,
};
