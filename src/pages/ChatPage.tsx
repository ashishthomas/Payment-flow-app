import { useState } from "react";
import { motion } from "framer-motion";
import { SendHorizonal, MessageCircle } from "lucide-react";

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi there! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    const newMessages = [...messages, { type: "user", text: input }];
    setMessages(newMessages);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: "Thank you for your message. Our support team will respond shortly.",
        },
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="pt-32 pb-16 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 h-[70vh] flex flex-col"
      >
        <div className="flex items-center space-x-3 mb-6">
          <MessageCircle className="text-lime-400" size={32} />
          <h2 className="text-2xl font-semibold text-white">
            Live Chat Support
          </h2>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-4 mb-4 scrollbar-thin scrollbar-thumb-slate-600 pr-2">
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: msg.type === "user" ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`max-w-xs p-4 rounded-xl text-sm leading-relaxed ${
                msg.type === "user"
                  ? "bg-lime-400 text-slate-900 self-end"
                  : "bg-slate-700 text-white self-start"
              }`}
            >
              {msg.text}
            </motion.div>
          ))}
        </div>

        {/* Input box */}
        <div className="flex items-center border-t border-slate-700 pt-4">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-slate-700 text-white placeholder-slate-400 px-4 py-3 rounded-xl focus:outline-none"
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="ml-3 bg-lime-400 text-slate-900 p-3 rounded-xl hover:bg-lime-300 transition-all"
          >
            <SendHorizonal size={20} />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ChatPage;
