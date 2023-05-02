const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;

// import all json data from ./data/
const chinesChefData = require("./data/chines_chef.json");
const popularChinesRecipe = require("./data/popular_chines_recipe.json");
const popularChinesRestaurants = require("./data/popular_chines_restaurants.json");
const chineseChefRecipes = require("./data/chinese_chef_recipes.json");

app.use(cors());

// popular chines restaurants
app.get("/popular-chines-restaurants", (req, res) => {
  res.send(popularChinesRestaurants);
  res.end();
});

// popular chinese recipe
app.get("/popular-chines-recipe", (req, res) => {
  res.send(popularChinesRecipe);
  res.end();
});

// chines chef route
app.get("/chines-chef", (req, res) => {
  res.send(chinesChefData);
  res.end();
});

// chef recipe
app.get("/chef-recipes", (req, res) => {
  res.send(chineseChefRecipes);
  res.end();
});

// single chef details
app.get("/chef-recipes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const recipe = chineseChefRecipes.find((data) => data.id === id);
  res.send(recipe);
  res.end();
});

// home route
app.get("/", (req, res) => {
  res.send("<h1>Recipe Master API.</h1>");
  res.end();
});

// created server running
app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});
