// getting nutritional value of each item
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run(ingridients) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const prompt = `give me detailed nutritional contents of each ${ingridients?.join(
    ", "
  )}`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return text;
}

const getNutrients = async (ingridients) => {
  const text = await run(ingridients);
  return text;
};

module.exports = getNutrients;
