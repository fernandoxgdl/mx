import { useState, useRef, useEffect } from "react";

const STORE_CONTEXT = `Eres "Moda", la asistente virtual de una tienda de e-commerce moderna.
Tu personalidad es amigable, directa y servicial. Respondes SIEMPRE en español.
Puedes ayudar con:
- Dudas sobre productos, tallas, colores y disponibilidad
- Información sobre envíos (3-5 días hábiles, gratis en compras +$999, envios a Guadalajara, mexico, queretaro)
- Métodos de pago (tarjeta, transferencia, PayPal)
- Cambios y devoluciones (15 días naturales)
- Recomendaciones personalizadas de productos
Sé concisa, cálida y nunca inventes información que no tengas. Si no sabes algo, dilo honestamente.`;

const TypingIndicator = () => (
  <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "12px 16px" }}>
    {[0, 1, 2].map((i) => (
      <span key={i} style={{
        width: 7, height: 7, borderRadius: "50%",
        background: "#a78bfa",
        animation: "bounce 1.2s infinite",
        animationDelay: `${i * 0.2}s`,
      }} />
    ))}
  </div>
);

const Message = ({ msg }) => {
  const isUser = msg.role === "user";
  return (
    <div style={{
      display: "flex",
      justifyContent: isUser ? "flex-end" : "flex-start",
      marginBottom: 12,
      animation: "fadeSlideIn 0.3s ease",
    }}>
      {!isUser && (
        <div style={{
          width: 32, height: 32, borderRadius: "50%",
          background: "linear-gradient(135deg, #7c3aed, #a78bfa)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 14, marginRight: 8, flexShrink: 0,
          boxShadow: "0 2px 8px rgba(124,58,237,0.4)",
        }}>✦</div>
      )}
      <div style={{
        maxWidth: "75%",
        padding: "10px 14px",
        borderRadius: isUser ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
        background: isUser
          ? "linear-gradient(135deg, #7c3aed, #6d28d9)"
          : "rgba(255,255,255,0.07)",
        color: "#f1f5f9",
        fontSize: 14,
        lineHeight: 1.6,
        border: isUser ? "none" : "1px solid rgba(255,255,255,0.1)",
        boxShadow: isUser
          ? "0 4px 12px rgba(109,40,217,0.4)"
          : "0 2px 8px rgba(0,0,0,0.2)",
        backdropFilter: "blur(10px)",
      }}>
        {msg.content}
      </div>
    </div>
  );
};

export default function ChatAsistente() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "¡Hola! 👋👋 Soy Moda, tu asistente de tienda. ¿En qué puedo ayudarte hoy?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [unread, setUnread] = useState(0);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || isLoading) return;

    const userMsg = { role: "user", content: text };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-api-key": process.env.REACT_APP_ANTHROPIC_API_KEY,
    "anthropic-version": "2023-06-01",
    "anthropic-dangerous-direct-browser-access": "true", },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: STORE_CONTEXT,
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await response.json();
      
      const reply = data.content?.[0]?.text || "Lo siento, hubo un error. Intenta de nuevo.";
      setMessages(prev => [...prev, { role: "assistant", content: reply }]);
      if (!isOpen) setUnread(u => u + 1);
    } catch {
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "Ups, tuve un problema de conexión. ¿Puedes intentarlo de nuevo? 🙏"
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickQuestions = [
    "¿Cuánto tarda el envío?",
    "¿Aceptan devoluciones?",
    "¿Métodos de pago?",
    "¿Que talla eres?",
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap');
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-6px); opacity: 1; }
        }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(124,58,237,0.5); }
          50% { box-shadow: 0 0 0 10px rgba(103, 20, 247, 0); }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'DM Sans', sans-serif; }
        textarea:focus { outline: none; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(167,139,250,0.3); border-radius: 2px; }
      `}</style>

      {/* Botón flotante */}
      <button
        onClick={() => setIsOpen(o => !o)}
        style={{
          position: "fixed", bottom: 20, right: 15,
          width: 40, height: 40, borderRadius: "50%",
          background: "linear-gradient(135deg, #1b6aa3, #c2c2eb)",
          border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 26, boxShadow: "0 8px 24px rgb(247, 246, 248)",
          animation: !isOpen ? "pulse 2.5s infinite" : "none",
          transition: "transform 0.3s ease, box-shadow 0.4s ease",
          zIndex: 1000,
        }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.10)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      >
        {isOpen ? "✕" : "✦"}
        {unread > 0 && !isOpen && (
          <span style={{
            position: "absolute", top: -4, right: -4,
            background: "#ef4444", color: "#bbabab",
            borderRadius: "50%", width: 20, height: 20,
            fontSize: 11, fontWeight: 700,
            display: "flex", alignItems: "center", justifyContent: "center",
            border: "2px solid #fafaf9",
          }}>{unread}</span>
        )}
      </button>

      {/* Ventana del chat */}
      {isOpen && (
        <div style={{
          position: "fixed", bottom: 100, right: 28,
          width: 300, height: 460,
          background: "linear-gradient(160deg, #13111c 0%, #0f0f1a 100%)",
          borderRadius: 24,
          border: "1px solid rgba(124,58,237,0.25)",
          boxShadow: "0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
          display: "flex", flexDirection: "column",
          overflow: "hidden",
          animation: "slideUp 0.3s ease",
          zIndex: 999,
          fontFamily: "'DM Sans', sans-serif",
        }}>

          {/* Header */}
          <div style={{
            padding: "16px 20px",
            background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(91,33,182,0.2))",
            borderBottom: "3px solid rgba(255,255,255,0.07)",
            display: "flex", alignItems: "center", gap: 12,
          }}>
            <div style={{
              width: 42, height: 42, borderRadius: "50%",
              background: "linear-gradient(135deg, #7c3aed, #a78bfa)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 18, boxShadow: "0 4px 12px rgba(124,58,237,0.5)",
            }}>✦</div>
            <div>
              <div style={{ color: "#f1f5f9", fontWeight: 600, fontSize: 15 }}>Moda</div>
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{
                  width: 7, height: 7, borderRadius: "50%",
                  background: "#22c55e",
                  boxShadow: "0 0 6px #22c55e",
                }} />
                <span style={{ color: "#94a3b8", fontSize: 12 }}>Asistente de tienda · En línea</span>
              </div>
            </div>
          </div>

          {/* Mensajes */}
          <div style={{
            flex: 1, overflowY: "auto",
            padding: "16px 16px 8px",
            display: "flex", flexDirection: "column",
          }}>
            {messages.map((msg, i) => <Message key={i} msg={msg} />)}
            {isLoading && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>

          {/* Preguntas rápidas */}
          {messages.length <= 1 && (
            <div style={{ padding: "0 16px 10px", display: "flex", gap: 6, flexWrap: "wrap" }}>
              {quickQuestions.map((q, i) => (
                <button key={i} onClick={() => { setInput(q); inputRef.current?.focus(); }}
                  style={{
                    background: "rgba(124,58,237,0.15)",
                    border: "1px solid rgba(124,58,237,0.3)",
                    borderRadius: 20, padding: "5px 12px",
                    color: "#c4b5fd", fontSize: 12, cursor: "pointer",
                    transition: "all 0.2s",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = "rgba(124,58,237,0.3)"}
                  onMouseLeave={e => e.currentTarget.style.background = "rgba(124,58,237,0.15)"}
                >{q}</button>
              ))}
            </div>
          )}

          {/* Input */}
          <div style={{
            padding: "12px 16px",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            display: "flex", gap: 10, alignItems: "flex-end",
          }}>
            <textarea
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Escribe tu pregunta..."
              rows={1}
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 14,
                padding: "10px 14px",
                color: "#f1f5f9",
                fontSize: 14,
                resize: "none",
                lineHeight: 1.5,
                fontFamily: "'DM Sans', sans-serif",
                transition: "border-color 0.2s",
              }}
              onFocus={e => e.target.style.borderColor = "rgba(124,58,237,0.6)"}
              onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || isLoading}
              style={{
                width: 42, height: 42, borderRadius: 12,
                background: input.trim() && !isLoading
                  ? "linear-gradient(135deg, #7c3aed, #5b21b6)"
                  : "rgba(255,255,255,0.06)",
                border: "none", cursor: input.trim() && !isLoading ? "pointer" : "not-allowed",
                color: input.trim() && !isLoading ? "#fff" : "#475569",
                fontSize: 18, transition: "all 0.2s",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: input.trim() && !isLoading ? "0 4px 12px rgba(109,40,217,0.4)" : "none",
                flexShrink: 0,
              }}
            >➤</button>
          </div>
        </div>
      )}
    </>
  );
}