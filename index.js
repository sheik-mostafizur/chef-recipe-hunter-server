const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use("/", (req, res) => {
  res.send("<h1>Recipe Master API.</h1>");
  res.end();
});

app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});
