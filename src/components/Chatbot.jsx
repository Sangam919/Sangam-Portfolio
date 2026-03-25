import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsChatDotsFill, BsX, BsSendFill } from 'react-icons/bs';

import faqDB from './chatbot_faq.json';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Sangam's assistant. What would you like to know?", sender: 'bot' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const userMessage = inputVal;
    setInputVal('');
    setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = "I'm not sure about that. Try asking about his skills, experience, education, or projects!";
      const lowerInput = userMessage.toLowerCase();

      for (let faq of faqDB) {
        if (faq.keywords.some(kw => lowerInput.includes(kw))) {
          botResponse = faq.answer;
          break;
        }
      }

      setIsTyping(false);
      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
    }, 1000);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div 
            className="chatbot-toggle shadow-glow"
            onClick={() => setIsOpen(true)}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <BsChatDotsFill size={28} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="chatbot-window glass-panel shadow-glow"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="chatbot-header">
              <div className="cb-header-info">
                <div className="cb-avatar shadow-glow">🤖</div>
                <div>
                  <h4>AI Assistant</h4>
                  <span className="online-status">Online</span>
                </div>
              </div>
              <button className="cb-close" onClick={() => setIsOpen(false)}>
                <BsX size={24} />
              </button>
            </div>

            <div className="chatbot-messages">
              {messages.map((msg, idx) => (
                <motion.div 
                  key={idx} 
                  className={`message-wrapper ${msg.sender}`}
                  initial={{ opacity: 0, x: msg.sender === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <div className={`message-bubble ${msg.sender}`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <div className="message-wrapper bot">
                  <div className="message-bubble bot typing">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSend} className="chatbot-input-area">
              <input 
                type="text" 
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Ask about Sangam..." 
                className="chatbot-input"
              />
              <button type="submit" className="chatbot-send-btn" disabled={!inputVal.trim() || isTyping}>
                <BsSendFill />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
