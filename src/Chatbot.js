import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./Chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasShownWelcome, setHasShownWelcome] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0 && !hasShownWelcome) {
      const welcomeMessage = {
        sender: "bot",
        text: "مرحبًا! أنا هنا لكي أساعدك، ماذا تريد ان تتحدث؟",
      };
      setMessages([welcomeMessage]);
      setHasShownWelcome(true);
    }
  }, [isOpen, messages.length, hasShownWelcome]);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 500);

    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 10500);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model: "google/gemini-pro",
          messages: [{ role: "user", content: input }],
        },
        {
          headers: {
            Authorization: `Bearer `,
            "Content-Type": "application/json",
          },
        }
      );

      const botMessage = {
        sender: "bot",
        text: response.data.choices[0].message.content,
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("خطأ في الاتصال:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: "يوجد  مشكلة في الاتصال، حاول مرة اخري!" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  return (
    <div>
      <div className="chatbot-button-wrapper">
        <button className="chatbot-button" onClick={() => setIsOpen(!isOpen)}>
          💬
        </button>
        {showTooltip && (
          <span className="chatbot-tooltip">أنا مساعدك، هيا نتحدث</span>
        )}
      </div>

      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <span>🤖 Model Craft Chat</span>
            <button className="close-button" onClick={() => setIsOpen(false)}>
              ✖
            </button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            {isLoading && <div className="message bot loading">جاري التحميل...</div>}
            <div ref={messagesEndRef} />
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              onFocus={handleFocus}
              placeholder="اكتب هنا..."
              disabled={isLoading}
            />
            <button className="send-button" onClick={sendMessage} disabled={isLoading}>
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;