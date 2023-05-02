const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;

const chinesChefData = require("./data/chines_chef.json");

app.use(cors());

app.use("/chines-chef", (req, res) => {
  res.send(chinesChefData);
  res.end();
});

app.use("/", (req, res) => {
  res.send("<h1>Recipe Master API.</h1>");
  res.end();
});

app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});
