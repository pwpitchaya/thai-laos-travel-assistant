import { useEffect, useMemo, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { translations } from "../i18n/translations";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function ChatbotPage() {
  const { language } = useLanguage();
  const t = translations[language];

  const getWelcomeMessage = () => {
    if (language === "th") {
      return "สวัสดีค่ะ 👋 ฉันคือผู้ช่วย HakTang Journey ช่วยตอบคำถามเรื่องการเดินทางไทย–ลาว ด่านผ่านแดน สถานที่เที่ยว คาเฟ่ และการเดินทางได้";
    }
    if (language === "en") {
      return "Hello 👋 I'm HakTang Journey assistant. I can help with Thailand–Laos travel, border crossing, places, cafés, and transport information.";
    }
    if (language === "lo") {
      return "ສະບາຍດີ 👋 ຂ້ອຍແມ່ນຜູ້ຊ່ວຍ HakTang Journey ສາມາດຊ່ວຍເລື່ອງການເດີນທາງ ໄທ–ລາວ ດ່ານຂ້າມແດນ ສະຖານທີ່ທ່ຽວ ຄາເຟ່ ແລະ ການເດີນທາງໄດ້";
    }
    return "您好 👋 我是 HakTang Journey 助手，可以帮助提供泰老旅行、过境、景点、咖啡馆和交通信息。";
  };

  const createInitialMessages = () => [
    {
      role: "assistant",
      content: getWelcomeMessage(),
    },
  ];

  const [messages, setMessages] = useState(createInitialMessages);
  const [history, setHistory] = useState([]);
  const [chatId, setChatId] = useState(Date.now());
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [copiedIndex, setCopiedIndex] = useState(null);

  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  const quickPrompts = useMemo(() => {
    if (language === "th") {
      return [
        "ไปเวียงจันทน์ต้องใช้อะไรบ้าง",
        "ด่านหนองคายเปิดกี่โมง",
        "แนะนำคาเฟ่ในเวียงจันทน์",
        "ไปวังเวียงยังไง",
      ];
    }
    if (language === "en") {
      return [
        "What documents are needed for Vientiane?",
        "What time does Nong Khai border open?",
        "Recommend cafés in Vientiane",
        "How can I go to Vang Vieng?",
      ];
    }
    if (language === "lo") {
      return [
        "ໄປວຽງຈັນຕ້ອງໃຊ້ຫຍັງແດ່",
        "ດ່ານໜອງຄາຍເປີດຈັກໂມງ",
        "ແນະນຳຄາເຟ່ໃນວຽງຈັນ",
        "ໄປວັງວຽງແນວໃດ",
      ];
    }
    return [
      "去万象需要什么文件",
      "廊开口岸几点开放",
      "推荐万象咖啡馆",
      "怎么去万荣",
    ];
  }, [language]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (!textareaRef.current) return;
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${Math.min(
      textareaRef.current.scrollHeight,
      180
    )}px`;
  }, [input]);

  useEffect(() => {
    setMessages(createInitialMessages());
  }, [language]);

  async function callAI(userMessage, chatHistory) {
    try {
      const response = await fetch("http://localhost:3001/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          messages: chatHistory,
          language,
        }),
      });

      if (!response.ok) {
        throw new Error("Server error");
      }

      const data = await response.json();

      const answer =
        data.reply ||
        data.message ||
        data.answer ||
        data.response ||
        data.output ||
        data.text;

      if (!answer) {
        throw new Error("Empty response");
      }

      return answer;
    } catch {
      throw new Error(
        language === "th"
          ? "ไม่สามารถเชื่อมต่อ AI server ได้"
          : language === "en"
          ? "Unable to connect to AI server"
          : language === "lo"
          ? "ບໍ່ສາມາດເຊື່ອມຕໍ່ AI server ໄດ້"
          : "无法连接 AI 服务器"
      );
    }
  }

  function updateHistoryMessages(targetChatId, newMessages, titleText = "") {
    setHistory((prev) => {
      const exists = prev.find((chat) => chat.id === targetChatId);

      if (exists) {
        return prev.map((chat) =>
          chat.id === targetChatId
            ? {
                ...chat,
                title: chat.title || titleText || "New Chat",
                messages: newMessages,
              }
            : chat
        );
      }

      return [
        {
          id: targetChatId,
          title: titleText || "New Chat",
          messages: newMessages,
        },
        ...prev,
      ];
    });
  }

  async function handleSend(customText) {
    const userText = (customText ?? input).trim();
    if (!userText || loading) return;

    setErrorText("");

    const newUserMessage = { role: "user", content: userText };
    const updatedMessages = [...messages, newUserMessage];

    setMessages(updatedMessages);
    updateHistoryMessages(chatId, updatedMessages, userText.slice(0, 40));
    setInput("");
    setLoading(true);

    try {
      const reply = await callAI(userText, updatedMessages);

      const finalMessages = [
        ...updatedMessages,
        {
          role: "assistant",
          content: reply,
        },
      ];

      setMessages(finalMessages);
      updateHistoryMessages(chatId, finalMessages, userText.slice(0, 40));
    } catch (error) {
      setErrorText(error.message);

      const fallbackMessage = {
        role: "assistant",
        content:
          language === "th"
            ? "ตอนนี้เชื่อมต่อ AI ไม่ได้ ลองตรวจสอบว่า server.js กำลังรันอยู่"
            : language === "en"
            ? "I can't reach the AI right now. Please make sure server.js is running."
            : language === "lo"
            ? "ຕອນນີ້ບໍ່ສາມາດເຊື່ອມຕໍ່ AI ໄດ້ ກະລຸນາກວດສອບ server.js"
            : "当前无法连接 AI，请检查 server.js 是否正在运行。",
      };

      const finalMessages = [...updatedMessages, fallbackMessage];
      setMessages(finalMessages);
      updateHistoryMessages(chatId, finalMessages, userText.slice(0, 40));
    } finally {
      setLoading(false);
    }
  }

  async function handleRegenerate(messageIndex) {
    if (loading) return;

    const userMessageIndex = [...messages]
      .slice(0, messageIndex)
      .map((m, i) => ({ ...m, originalIndex: i }))
      .reverse()
      .find((m) => m.role === "user");

    if (!userMessageIndex) return;

    const prompt = userMessageIndex.content;
    const baseMessages = messages.slice(0, messageIndex);

    setLoading(true);
    setErrorText("");

    try {
      const reply = await callAI(prompt, baseMessages);

      const finalMessages = [
        ...baseMessages,
        {
          role: "assistant",
          content: reply,
        },
      ];

      setMessages(finalMessages);
      updateHistoryMessages(chatId, finalMessages);
    } catch (error) {
      setErrorText(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleCopy(text, index) {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1500);
    } catch {
      setCopiedIndex(null);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  function clearChat() {
    const newId = Date.now();
    setChatId(newId);
    setMessages(createInitialMessages());
    setErrorText("");
    setInput("");
  }

  function openHistoryChat(chat) {
    setChatId(chat.id);
    setMessages(chat.messages);
    setErrorText("");
    setInput("");
  }

  function renderMarkdown(content) {
    return (
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          p: ({ children }) => (
            <p className="mb-3 last:mb-0 leading-7">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="mb-3 list-disc space-y-2 pl-5">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-3 list-decimal space-y-2 pl-5">{children}</ol>
          ),
          li: ({ children }) => <li>{children}</li>,
          strong: ({ children }) => (
            <strong className="font-semibold text-slate-900">{children}</strong>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline underline-offset-2"
            >
              {children}
            </a>
          ),
          code(props) {
            const { inline, className, children, ...rest } = props;
            const text = String(children).replace(/\n$/, "");

            if (inline) {
              return (
                <code
                  className="rounded-md bg-slate-100 px-1.5 py-0.5 font-mono text-[13px] text-pink-600"
                  {...rest}
                >
                  {text}
                </code>
              );
            }

            return (
              <div className="my-4 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
                <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2">
                  <span className="text-xs font-medium text-slate-400">
                    {className?.replace("language-", "") || "code"}
                  </span>
                </div>
                <pre className="overflow-x-auto p-4 text-sm leading-7 text-slate-100">
                  <code className={className} {...rest}>
                    {text}
                  </code>
                </pre>
              </div>
            );
          },
          blockquote: ({ children }) => (
            <blockquote className="my-4 border-l-4 border-cyan-300 bg-cyan-50 px-4 py-3 text-slate-700">
              {children}
            </blockquote>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    );
  }

  return (
    <div className="min-h-[calc(100vh-72px)] bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
        <div className="grid lg:grid-cols-[300px_minmax(0,1fr)] gap-6">
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="rounded-[28px] border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur">
                <button
                  onClick={clearChat}
                  className="w-full rounded-2xl bg-gradient-to-r from-slate-900 via-blue-700 to-cyan-500 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.01]"
                >
                  {language === "th"
                    ? "＋ แชตใหม่"
                    : language === "en"
                    ? "＋ New Chat"
                    : language === "lo"
                    ? "＋ ແຊັດໃໝ່"
                    : "＋ 新对话"}
                </button>
              </div>

              <div className="rounded-[28px] border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur">
                <p className="mb-3 text-sm font-semibold text-slate-900">
                  {language === "th"
                    ? "ประวัติการสนทนา"
                    : language === "en"
                    ? "Chat History"
                    : language === "lo"
                    ? "ປະຫວັດການສົນທະນາ"
                    : "聊天记录"}
                </p>

                <div className="space-y-2">
                  {history.length === 0 ? (
                    <div className="rounded-2xl bg-slate-50 px-3 py-4 text-sm text-slate-500">
                      {language === "th"
                        ? "ยังไม่มีประวัติแชต"
                        : language === "en"
                        ? "No chat history yet"
                        : language === "lo"
                        ? "ຍັງບໍ່ມີປະຫວັດແຊັດ"
                        : "暂无聊天记录"}
                    </div>
                  ) : (
                    history.map((chat) => (
                      <button
                        key={chat.id}
                        onClick={() => openHistoryChat(chat)}
                        className={`block w-full rounded-2xl border px-3 py-3 text-left text-sm transition ${
                          chat.id === chatId
                            ? "border-cyan-200 bg-cyan-50 text-cyan-700"
                            : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <div className="truncate font-medium">
                          {chat.title || "New Chat"}
                        </div>
                        <div className="mt-1 text-xs text-slate-400">
                          {chat.messages?.length || 0} messages
                        </div>
                      </button>
                    ))
                  )}
                </div>
              </div>

              <div className="rounded-[28px] border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="/images/logo.png"
                    alt="HakTang Journey"
                    className="h-10 w-10 rounded-2xl object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      HakTang Journey
                    </p>
                    <p className="text-xs text-slate-500">
                      {language === "th"
                        ? "ลองถามแบบนี้"
                        : language === "en"
                        ? "Try these prompts"
                        : language === "lo"
                        ? "ລອງຖາມແບບນີ້"
                        : "试试这些问题"}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {quickPrompts.map((prompt, index) => (
                    <button
                      key={index}
                      onClick={() => handleSend(prompt)}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left text-sm text-slate-700 hover:border-cyan-300 hover:bg-cyan-50 transition"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <section className="min-w-0">
            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white/90 shadow-sm backdrop-blur">
              <div className="border-b border-slate-200 bg-white/80 px-4 md:px-6 py-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0 flex items-center gap-3">
                    <img
                      src="/images/logo.png"
                      alt="HakTang Journey"
                      className="h-11 w-11 rounded-2xl object-cover shadow-sm"
                    />
                    <div className="min-w-0">
                      <h1 className="text-lg md:text-xl font-bold text-slate-900">
                        HakTang Journey AI
                      </h1>
                      <p className="text-sm text-slate-500 truncate">
                        {language === "th"
                          ? "ผู้ช่วยวางแผนการเดินทางไทย–ลาว"
                          : language === "en"
                          ? "Your Thailand–Laos travel assistant"
                          : language === "lo"
                          ? "ຜູ້ຊ່ວຍວາງແຜນການເດີນທາງ ໄທ–ລາວ"
                          : "你的泰老旅行助手"}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={clearChat}
                    className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
                  >
                    {language === "th"
                      ? "ล้างแชต"
                      : language === "en"
                      ? "Clear"
                      : language === "lo"
                      ? "ລ້າງແຊັດ"
                      : "清空"}
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-b from-white via-slate-50 to-white">
                <div className="h-[68vh] overflow-y-auto px-4 md:px-6 py-6">
                  <div className="mx-auto max-w-4xl space-y-6">
                    {messages.map((message, index) => {
                      const isUser = message.role === "user";
                      const isAssistant = message.role === "assistant";

                      return (
                        <div
                          key={index}
                          className={`flex ${
                            isUser ? "justify-end" : "justify-start"
                          }`}
                        >
                          <div
                            className={`flex max-w-[95%] md:max-w-[82%] gap-3 ${
                              isUser ? "flex-row-reverse" : "flex-row"
                            }`}
                          >
                            <div
                              className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-sm font-bold shadow-sm ${
                                isUser
                                  ? "bg-slate-900 text-white"
                                  : "bg-gradient-to-br from-blue-600 via-cyan-500 to-emerald-400 text-white"
                              }`}
                            >
                              {isUser ? "U" : "AI"}
                            </div>

                            <div className="min-w-0">
                              <div
                                className={`rounded-[24px] px-4 py-3 md:px-5 md:py-4 shadow-sm ${
                                  isUser
                                    ? "bg-slate-900 text-white rounded-br-md"
                                    : "bg-white border border-slate-200 text-slate-800 rounded-bl-md"
                                }`}
                              >
                                <div className="max-w-none break-words text-sm md:text-[15px] leading-7">
                                  {isUser ? (
                                    <p className="whitespace-pre-wrap break-words">
                                      {message.content}
                                    </p>
                                  ) : (
                                    renderMarkdown(message.content)
                                  )}
                                </div>
                              </div>

                              {isAssistant && (
                                <div className="mt-2 flex flex-wrap items-center gap-3 px-1">
                                  <button
                                    onClick={() =>
                                      handleCopy(message.content, index)
                                    }
                                    className="text-xs font-medium text-slate-400 hover:text-slate-600 transition"
                                  >
                                    {copiedIndex === index
                                      ? language === "th"
                                        ? "คัดลอกแล้ว"
                                        : language === "en"
                                        ? "Copied"
                                        : language === "lo"
                                        ? "ຄັດລອກແລ້ວ"
                                        : "已复制"
                                      : language === "th"
                                      ? "คัดลอก"
                                      : language === "en"
                                      ? "Copy"
                                      : language === "lo"
                                      ? "ຄັດລອກ"
                                      : "复制"}
                                  </button>

                                  {index > 0 && (
                                    <button
                                      onClick={() => handleRegenerate(index)}
                                      className="text-xs font-medium text-cyan-600 hover:text-cyan-700 transition"
                                    >
                                      {language === "th"
                                        ? "Regenerate"
                                        : language === "en"
                                        ? "Regenerate"
                                        : language === "lo"
                                        ? "ສ້າງຄຳຕອບໃໝ່"
                                        : "重新生成"}
                                    </button>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    {loading && (
                      <div className="flex justify-start">
                        <div className="flex max-w-[90%] md:max-w-[80%] gap-3">
                          <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-cyan-500 to-emerald-400 text-sm font-bold text-white">
                            AI
                          </div>

                          <div className="rounded-[24px] rounded-bl-md border border-slate-200 bg-white px-5 py-4 shadow-sm">
                            <div className="flex items-center gap-2">
                              <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.3s]"></span>
                              <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.15s]"></span>
                              <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-slate-400"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>
                </div>

                {errorText && (
                  <div className="px-4 md:px-6 pb-3">
                    <div className="mx-auto max-w-4xl rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                      {errorText}
                    </div>
                  </div>
                )}

                <div className="border-t border-slate-200 bg-white/80 px-4 md:px-6 py-4">
                  <div className="mx-auto max-w-4xl">
                    <div className="mb-3 flex flex-wrap gap-2 lg:hidden">
                      {quickPrompts.map((prompt, index) => (
                        <button
                          key={index}
                          onClick={() => handleSend(prompt)}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-cyan-50 hover:border-cyan-300 transition"
                        >
                          {prompt}
                        </button>
                      ))}
                    </div>

                    <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-2 shadow-inner">
                      <div className="flex items-end gap-2">
                        <textarea
                          ref={textareaRef}
                          rows={1}
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          onKeyDown={handleKeyDown}
                          placeholder={
                            language === "th"
                              ? "พิมพ์คำถามเกี่ยวกับการเดินทางไทย–ลาว..."
                              : language === "en"
                              ? "Ask about Thailand–Laos travel..."
                              : language === "lo"
                              ? "ພິມຄຳຖາມກ່ຽວກັບການເດີນທາງ ໄທ–ລາວ..."
                              : "输入有关泰老旅行的问题..."
                          }
                          className="max-h-[180px] min-h-[52px] flex-1 resize-none rounded-[22px] bg-transparent px-4 py-3 text-sm md:text-[15px] text-slate-800 outline-none placeholder:text-slate-400"
                        />

                        <button
                          onClick={() => handleSend()}
                          disabled={loading || !input.trim()}
                          className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-slate-900 via-blue-700 to-cyan-500 text-white shadow-lg transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          ↑
                        </button>
                      </div>
                    </div>

                    <p className="mt-3 text-center text-xs text-slate-400">
                      {language === "th"
                        ? "กด Enter เพื่อส่ง • Shift + Enter ขึ้นบรรทัดใหม่"
                        : language === "en"
                        ? "Press Enter to send • Shift + Enter for a new line"
                        : language === "lo"
                        ? "ກົດ Enter ເພື່ອສົ່ງ • Shift + Enter ເພື່ອຂຶ້ນບັນທັດໃໝ່"
                        : "按 Enter 发送 • Shift + Enter 换行"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}