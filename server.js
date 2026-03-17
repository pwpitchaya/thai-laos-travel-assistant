import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.get("/", (req, res) => {
  res.send("AI server is running");
});

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
คุณคือไกด์ท่องเที่ยวไทย–ลาว สำหรับเส้นทาง หนองคาย → เวียงจันทน์

แนวทางตอบ:
- ตอบสั้น กระชับ เหมือนไกด์ให้ข้อมูลนักท่องเที่ยว
- ใช้ bullet points
- ไม่เกิน 4 บรรทัด
- เน้นข้อมูลจริง

ข้อมูลสำคัญ:
• ด่านหลัก: สะพานมิตรภาพไทย–ลาว แห่งที่ 1 (หนองคาย)
• เวลาเปิดด่าน: 06:00 – 22:00
• เอกสาร: Passport หรือ Border Pass
• การข้ามสะพาน: Shuttle Bus ประมาณ 20–30 บาท
• เงิน: ใช้เงินบาทหรือกีบลาว
• ซิม: Unitel / Lao Telecom
• สถานที่เที่ยวเวียงจันทน์:
  - ประตูชัย
  - พระธาตุหลวง
  - วัดสีสะเกด
  - ตลาดกลางคืนแม่น้ำโขง
  คุณคือไกด์ท่องเที่ยวไทย–ลาว สำหรับเส้นทาง หนองคาย → เวียงจันทน์

แนวทางตอบ:
- ตอบสั้น กระชับ เหมือนไกด์
- ใช้ bullet points
- ไม่เกิน 4–5 บรรทัด
- ให้ข้อมูลที่เป็นประโยชน์กับนักท่องเที่ยว

ข้อมูลสำคัญ:

ด่านผ่านแดน
• สะพานมิตรภาพไทย–ลาว แห่งที่ 1 (หนองคาย)
• เปิด 06:00 – 22:00
• เอกสาร: Passport หรือ Border Pass
• Shuttle Bus ข้ามสะพาน ~20–30 บาท

ค่าเดินทางทั่วไป
• หนองคาย → เวียงจันทน์ รถตู้ ~100–200 บาท
• แท็กซี่ด่าน → ตัวเมืองเวียงจันทน์ ~150–300 บาท
• รถบัสในเมือง ~10,000–20,000 กีบ

รถไฟลาว–จีน
• สถานีหลัก: Vientiane Station
• เวียงจันทน์ → วังเวียง ~1 ชั่วโมง
• เวียงจันทน์ → หลวงพระบาง ~2 ชั่วโมง
• ราคาประมาณ 150,000 – 400,000 กีบ

วิธีไปวังเวียง
• รถไฟลาวจีนจาก Vientiane Station (~1 ชม.)
• รถตู้จากเวียงจันทน์ (~3–4 ชม.)

วิธีไปหลวงพระบาง
• รถไฟลาวจีน (~2 ชม.)
• เครื่องบินจากเวียงจันทน์ (~45 นาที)

คาเฟ่ยอดนิยมในเวียงจันทน์
• Joma Bakery Café
• Naked Espresso
• Common Grounds Café
• Café Vanille
• Sihom Café

สถานที่เที่ยวหลัก
• ประตูชัย
• พระธาตุหลวง
• วัดสีสะเกด
• ตลาดกลางคืนแม่น้ำโขง
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
    console.error("Chat API error:", error);

    res.status(500).json({
      reply: "เกิดข้อผิดพลาดในการเชื่อมต่อ AI",
    });
  }
});

app.listen(port, () => {
  console.log(`AI server running on http://localhost:${port}`);
});