"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Message = {
  type: "user" | "bot";
  text: string;
};

const quickReplies = [
  "Branch hours",
  "Loan products",
  "Branches",
  "Teacher's Loan",
  "Services",
  "Features",
  "Careers",
];

function MessageText({ text, isUser }: { text: string; isUser: boolean }) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  return (
    <div className="space-y-2 break-words">
      {text.split("\n").map((line, lineIndex) => {
        const parts = line.split(urlRegex);

        return (
          <p key={lineIndex} className="m-0">
            {parts.map((part, partIndex) => {
              const isUrl = urlRegex.test(part);
              urlRegex.lastIndex = 0;

              if (isUrl) {
                const cleanUrl = part.replace(/[.,)]$/, "");

                return (
                  <a
                    key={partIndex}
                    href={cleanUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={[
                      "break-all font-semibold underline underline-offset-2",
                      isUser
                        ? "text-white hover:text-green-100"
                        : "text-[#229b15] hover:text-[#16750d]",
                    ].join(" ")}
                  >
                    {cleanUrl}
                  </a>
                );
              }

              return <span key={partIndex}>{part}</span>;
            })}
          </p>
        );
      })}
    </div>
  );
}

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [wide, setWide] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      text: "Hi! I am ARBI, how may I assist you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // const API_URL = process.env.SERVER_URL;
  
  const API_URL = process.env.SERVER_URL || "https://rag-api-bank-production.up.railway.app";

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const formatBotAnswer = (answer: string) => {
    return answer
      .replace(/\*\*/g, "")
      .replace(/Q:\s?/g, "")
      .replace(/A:\s?/g, "")
      .trim();
  };

  const sendMessage = async (messageText: string) => {
    const userMessage = messageText.trim();
    if (!userMessage || loading) return;

    setMessages((prev) => [...prev, { type: "user", text: userMessage }]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: data.success
            ? formatBotAnswer(data.answer)
            : "Sorry, I could not process your request right now.",
        },
      ]);
    } catch (error) {
      console.error("Error:", error);

      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: "Sorry, I am having trouble connecting right now.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendMessage(input);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close chatbot" : "Open chatbot"}
        className={[
          "fixed z-[9999]",
          "bottom-4 right-4 sm:bottom-6 sm:right-6",
          "flex h-14 w-14 items-center justify-center rounded-full sm:h-[56px] sm:w-[56px]",
          "text-white shadow-2xl transition-all duration-300",
          "hover:scale-105 active:scale-95",
          open
            ? "bg-gradient-to-br from-primary/90 to-primary/90"
            : "bg-gradient-to-br from-primary to-primary/70",
        ].join(" ")}
      >
        {open ? (
          <span className="text-lg leading-none sm:text-xl">⛌</span>
        ) : (
          <div className="relative">
            <span className="text-lg sm:text-2xl">💬</span>
            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-accent ring-2 ring-white" />
          </div>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
          layout
            initial={{ opacity: 0, x: 80 }}
            animate={{
              opacity: 1,
              x: 0,
              width: wide ? "calc(95vw - 32px)" : 390,
              height: wide ? "calc(100vh - 32px)" : 700,
              right: wide ? 16 : 24,
              bottom: wide ? 16 : 20,
              transition: {
                type: "spring",
                stiffness: 220,
                damping: 24,
                mass: 0.8,
              },
            }}
            exit={{
              opacity: 0,
              x: 80,
              transition: { duration: 0.25 },
            }}
              className={[
              "fixed z-[9999] flex flex-col overflow-hidden bg-white",
              " shadow-[0_30px_80px_rgba(0,0,0,0.28)]",
              "inset-x-3 bottom-1 top-4 rounded-3xl",
              "sm:inset-auto sm:bottom-[90px] sm:right-6 sm:top-auto",
              "sm:h-[540px] sm:max-h-[calc(100vh-130px)] sm:w-[390px] sm:max-w-[calc(100vw-32px)]",
              "sm:rounded-[28px]",
             
            ].join(" ")}  >
            {/* Header */}
            <div className="relative shrink-0 overflow-hidden bg-gradient-to-br from-[#229b15] via-[#28b51b] to-[#38cb2c] px-4 py-4 text-white sm:px-5 sm:py-5">
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/15 blur-xl" />
              <div className="absolute -bottom-10 -left-8 h-28 w-28 rounded-full bg-white/10 blur-xl" />

              <div className="relative flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/20 shadow-inner ring-1 ring-white/30 backdrop-blur sm:h-12 sm:w-12">
                    <span className="text-xl sm:text-2xl">🤖</span>
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h2 className="truncate text-sm font-bold leading-tight sm:text-base">
                        ARBI Assistant
                      </h2>
                      {/* {backendOnline ? (
                      <span className="hidden items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-medium text-white sm:inline-flex">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-200" />
                        Online
                      </span>
                    ) : (
                      <span className="hidden items-center gap-1 rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-medium text-red-800 sm:inline-flex">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                        Message
                      </span>
                    )} */}
                      <span className="hidden items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-medium text-white sm:inline-flex">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-200" />
                        Online
                      </span>
                    </div>
                    <p className="truncate text-xs text-white/90">
                      ASPAC Bank virtual assistant
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 items-center justify-items-center">
                  <button
                    onClick={() => setWide((prev) => !prev)}
                    aria-label={wide ? "Restore size" : "Expand chatbot"}
                    className=" rounded-full px-2 text-2xl pt-0 text-white/90 transition hover:bg-white/15 hover:text-white"
                  >
                    {wide ? <p className="pb-0">⿻</p> : <p className="pb-0">⛶</p>}
                  </button>
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close chatbot"
                    className=" rounded-full px-2 text-lg pb-0 text-white/90 transition hover:bg-white/15 hover:text-white"
                  >
                    ⛌
                  </button>
                </div>
              </div>
            </div>

            {/* Info Strip */}
            <div className="shrink-0 border-b border-green-100 bg-green-50 px-3 py-2 text-center text-[11px] text-green-800 sm:px-4 sm:text-xs">
              Ask about loans, branches, banking hours, and services.
            </div>

            {/* Messages */}
            <div className="min-h-0 flex-1 space-y-3 overflow-y-auto bg-gradient-to-b from-slate-50 via-white to-green-50/70 px-3 py-4 sm:px-4">
              {messages.map((msg, idx) => {
                const isUser = msg.type === "user";

                return (
                  <div
                    key={idx}
                    className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={[
                        "px-3 py-2.5 text-sm leading-relaxed shadow-sm sm:px-4 sm:py-3",
                        "max-w-[88%] sm:max-w-[82%]",
                        isUser
                          ? "rounded-2xl rounded-br-md bg-gradient-to-br from-[#229b15] to-[#38cb2c] text-white"
                          : "rounded-2xl rounded-bl-md border border-slate-100 bg-white text-slate-700",
                      ].join(" ")}
                    >
                      <MessageText text={msg.text} isUser={isUser} />
                    </div>
                  </div>
                );
              })}

              {loading && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-md border border-slate-100 bg-white px-4 py-3 shadow-sm">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <span>ARBI is thinking</span>
                      <span className="flex gap-1">
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.3s]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.15s]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" />
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length <= 1 && (
              <div className="shrink-0 border-t border-slate-100 bg-white px-3 py-3 sm:px-4">
                <div className="mb-2 text-xs font-medium text-slate-500">
                  Quick questions
                </div>

                <div className="flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible">
                  {quickReplies.map((reply) => (
                    <button
                      key={reply}
                      type="button"
                      onClick={() => sendMessage(reply)}
                      disabled={loading}
                      className="shrink-0 rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-xs font-medium text-green-700 transition hover:border-green-300 hover:bg-green-100 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={handleSend}
              className="shrink-0 border-t border-slate-100 bg-white p-3 sm:p-4"
            >
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 p-1.5 focus-within:border-green-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-green-100">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask ARBI a question..."
                  disabled={loading}
                  className="min-w-0 flex-1 bg-transparent px-3 text-sm text-slate-700 outline-none placeholder:text-slate-400 disabled:cursor-not-allowed"
                />

                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className={[
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white shadow-lg transition",
                    loading || !input.trim()
                      ? "cursor-not-allowed bg-slate-300 shadow-none"
                      : "bg-gradient-to-br from-[#229b15] to-[#38cb2c] hover:scale-105 active:scale-95",
                  ].join(" ")}
                >
                  <span className="text-sm">➤</span>
                </button>
              </div>

              <p className="mt-2 hidden text-center text-[10px] text-slate-400 sm:block">
                ARBI provides general information. For official concerns, please
                contact ASPAC Bank directly.
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
