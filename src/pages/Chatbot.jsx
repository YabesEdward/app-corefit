import { useState, useRef, useEffect } from "react";
import CONFIG from "../config";

function Chatbot() {
  const [username, setUsername] = useState("User");
  const [messages, setMessages] = useState(() => [
    { text: "Hai! Saya asisten CoreFit, ada yang bisa saya bantu?", who: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef();

  // Ambil username dari localStorage saat komponen dimount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser);
        if (parsed.username) {
          setUsername(parsed.username);
        } else {
          setUsername(storedUser); // fallback jika yang disimpan hanya string biasa
        }
      } catch {
        setUsername(storedUser); // fallback jika bukan JSON string
      }
    }
  }, []);

  useEffect(() => {
    chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
  }, [messages]);

  const addMessage = (text, who) => {
    setMessages((prev) => [...prev, { text, who }]);
  };

  const removeLoading = () => {
    setMessages((msgs) => msgs.filter((msg) => msg.who !== "bot-loading"));
  };

  const callLLM = async (prompt, attempt = 0) => {
    setIsLoading(true);
    addMessage("Sedang mengetik…", "bot-loading");

    try {
      if (CONFIG.USE_FALLBACK) {
        await new Promise((r) => setTimeout(r, 500));
        removeLoading();
        addMessage("Mode offline. Silakan coba lagi nanti.", "bot");
        return;
      }

      const res = await fetch(CONFIG.DEEPSEEK_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${CONFIG.DEEPSEEK_API_KEY}`,
          "HTTP-Referer": window.location.origin,
          "X-Title": "CoreFit-Dev",
        },
        body: JSON.stringify({
          model: CONFIG.DEEPSEEK_MODEL,
          messages: [
            { role: "system", content: "Kamu adalah asisten kesehatan & kebugaran CoreFit." },
            { role: "user", content: prompt },
          ],
          temperature: 0.7,
          max_tokens: 800,
        }),
      });

      if (!res.ok) {
        let detail = "";
        try {
          detail = (await res.json()).error?.message || "";
        } catch {}
        throw new Error(`${res.status} ${res.statusText} ${detail}`.trim());
      }

      const data = await res.json();
      removeLoading();
      addMessage(data.choices?.[0]?.message?.content || "(tidak ada konten)", "bot");
    } catch (err) {
      removeLoading();
      if (attempt < (CONFIG.MAX_RETRIES ?? 2)) return callLLM(prompt, attempt + 1);
      CONFIG.USE_FALLBACK = true;
      addMessage(`Maaf, error (${err.message}). Beralih ke mode offline…`, "bot");
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;
    addMessage(text, "user");
    setInput("");
    callLLM(text);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="chat-wrapper">
      {/* Header */}
      <div className="header">
        <div className="profile-pic">👤</div>
        <div>
          <div className="greeting">Hello,</div>
          <div className="user-name">{username}</div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="chat-messages" ref={chatRef}>
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`message ${
              msg.who === "user"
                ? "user-message"
                : msg.who === "bot-loading"
                ? "bot-message loading"
                : "bot-message"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input Chat */}
      <div className="chat-input">
        <input
          type="text"
          placeholder="Ketik pesan..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          disabled={isLoading}
        />
        <button onClick={sendMessage} disabled={isLoading}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M4 12L2 3L21 12L2 21L4 12Z" fill="currentColor" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
