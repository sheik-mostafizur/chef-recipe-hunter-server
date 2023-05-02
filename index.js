const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;

const chinesChefData = require("./data/chines_chef.json");
const popularChinesRecipe = require("./data/popular_chines_recipe.json");
const popularChinesRestaurants = require("./data/popular_chines_restaurants.json");
const chineseChefRecipes = require("./data/chinese_chef_recipes.json");

app.use(cors());

app.get("/popular-chines-restaurants", (req, res) => {
  res.send(popularChinesRestaurants);
  res.end();
});

app.get("/popular-chines-recipe", (req, res) => {
  res.send(popularChinesRecipe);
  res.end();
});

app.get("/chines-chef", (req, res) => {
  res.send(chinesChefData);
  res.end();
});

app.get("/chef-recipes", (req, res) => {
  res.send(chineseChefRecipes);
  res.end();
});

app.get("/chef-recipes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const recipe = chineseChefRecipes.find((data) => data.id === id);
  res.send(recipe);
  res.end();
});

app.get("/", (req, res) => {
  res.send("<h1>Recipe Master API.</h1>");
  res.end();
});

app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});
