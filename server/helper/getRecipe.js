//getting recipe for given ingridient
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run(ingridients) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `give me delicious dish recipe with the following ingridients ${ingridients.join(
    ", "
  )}`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return text;
}

const getRecipe = async (ingridients) => {
  const text = run(ingridients);
  return text;
};

module.exports = getRecipe;
