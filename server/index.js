const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const getRecipe = require("./helper/getRecipe");
const getNutrients = require("./helper/getNutrients");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/", async (req, res) => {
  const text = req.body;
  const recipe = await getRecipe(text);
  const data = await res.json(recipe);
  return data;
});

app.post("/getNutrients", async (req, res) => {
  const text = req.body;
  const nutrients = await getNutrients(text);
  const data = await res.json(nutrients);
  return data;
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
