import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// ===== API =====
app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        reply: "กรุณาระบุข้อความ",
      });
    }

    const response = await client.responses.create({
      model: "gpt-5-nano",
      input: [
        {
          role: "system",
          content: `
คุณคือไกด์ท่องเที่ยวไทย–ลาว
ตอบสั้น กระชับ ใช้ bullet ไม่เกิน 4 บรรทัด
`,
        },
        {
          role: "user",
          content: message,
        },
      ],
      max_output_tokens: 120,
    });

    res.json({
      reply: response.output_text,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      reply: "AI error",
    });
  }
});

// ===== FRONTEND (สำคัญ ต้องอยู่ก่อน listen) =====
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "dist")));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// ===== START SERVER =====
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});