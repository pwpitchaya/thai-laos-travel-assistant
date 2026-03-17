import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function run() {
  const response = await client.responses.create({
    model: "gpt-5-nano",
    input: "Write a short haiku about programming."
  });

  console.log(response.output_text);
}

run();