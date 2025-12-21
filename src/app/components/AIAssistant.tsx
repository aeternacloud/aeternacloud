import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send } from 'lucide-react';

type Message = {
  type: 'bot' | 'user';
  text: string;
  buttons?: { text: string; action: string }[];
};

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      type: 'bot', 
      text: 'Hello! 👋 I\'m your AI assistant. How can I help you today?',
      buttons: [
        { text: '📋 Our Services', action: 'services' },
        { text: '👥 Our Team', action: 'team' },
        { text: '📅 Book Appointment', action: 'appointment' },
        { text: '📞 Schedule Call', action: 'call' },
      ]
    },
  ]);
  const [input, setInput] = useState('');
  const [isBooking, setIsBooking] = useState(false);
  const [bookingData, setBookingData] = useState({ name: '', email: '', phone: '', date: '', time: '' });

  // Simple intent detection
  const detectIntent = (text: string): string => {
    const lowerText = text.toLowerCase();
    
    if (lowerText.includes('team') || lowerText.includes('about') || lowerText.includes('company')) {
      return 'team';
    }
    if (lowerText.includes('service') || lowerText.includes('what do you do') || lowerText.includes('offer')) {
      return 'services';
    }
    if (lowerText.includes('appointment') || lowerText.includes('book') || lowerText.includes('schedule') || lowerText.includes('meeting')) {
      return 'appointment';
    }
    if (lowerText.includes('call') || lowerText.includes('phone') || lowerText.includes('contact')) {
      return 'call';
    }
    if (lowerText.includes('hello') || lowerText.includes('hi') || lowerText.includes('hey')) {
      return 'greeting';
    }
    
    return 'default';
  };

  // Generate bot response based on intent
  const getBotResponse = (intent: string): Message => {
    switch (intent) {
      case 'team':
        return {
          type: 'bot',
          text: 'Our team consists of experienced professionals dedicated to delivering exceptional results. We have experts in software development, design, cloud solutions, and more. Would you like to learn more?',
          buttons: [
            { text: '👥 View Team Page', action: 'team-page' },
            { text: '📅 Book a Meeting', action: 'appointment' },
          ]
        };
      
      case 'services':
        return {
          type: 'bot',
          text: 'We offer comprehensive IT solutions including:\n\n• Software Development\n• Web Development\n• App Development\n• UI/UX Design\n• Cloud Solutions\n\nWhich service interests you?',
          buttons: [
            { text: '🔍 View All Services', action: 'services-page' },
            { text: '📅 Book Consultation', action: 'appointment' },
          ]
        };
      
      case 'appointment':
        setIsBooking(true);
        return {
          type: 'bot',
          text: 'Great! I\'d be happy to help you schedule an appointment. Let me gather some information:\n\nWhat\'s your name?',
        };
      
      case 'call':
        return {
          type: 'bot',
          text: 'I can help you schedule a call with our team. We\'re available Monday-Friday, 9 AM - 6 PM. Would you like to book a time?',
          buttons: [
            { text: '📅 Book a Call', action: 'appointment' },
            { text: '📞 Call Now', action: 'call-now' },
          ]
        };
      
      case 'greeting':
        return {
          type: 'bot',
          text: 'Hello! How can I assist you today?',
          buttons: [
            { text: '📋 Our Services', action: 'services' },
            { text: '👥 Our Team', action: 'team' },
            { text: '📅 Book Appointment', action: 'appointment' },
          ]
        };
      
      default:
        return {
          type: 'bot',
          text: 'I understand you\'re looking for help. I can assist you with:\n\n• Information about our services\n• Details about our team\n• Scheduling appointments or calls\n\nWhat would you like to know?',
          buttons: [
            { text: '📋 Our Services', action: 'services' },
            { text: '👥 Our Team', action: 'team' },
            { text: '📅 Book Appointment', action: 'appointment' },
          ]
        };
    }
  };

  const handleButtonClick = (action: string) => {
    switch (action) {
      case 'team-page':
        window.location.href = '/company/team';
        break;
      case 'services-page':
        window.location.href = '/#services';
        break;
      case 'call-now':
        window.location.href = 'tel:+15551234567';
        break;
      case 'done':
        setMessages(prev => [...prev, {
          type: 'bot',
          text: 'Great! Is there anything else I can help you with?',
          buttons: [
            { text: '📋 Our Services', action: 'services' },
            { text: '👥 Our Team', action: 'team' },
          ]
        }]);
        break;
      default:
        const response = getBotResponse(action);
        setMessages(prev => [...prev, response]);
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { type: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    const userInput = input;
    setInput('');

    // Handle booking flow
    if (isBooking) {
      handleBookingFlow(userInput);
      return;
    }

    // Detect intent and respond
    setTimeout(() => {
      const intent = detectIntent(userInput);
      const response = getBotResponse(intent);
      setMessages(prev => [...prev, response]);
    }, 800);
  };

  const handleBookingFlow = (input: string) => {
    if (!bookingData.name) {
      setBookingData({ ...bookingData, name: input });
      setMessages(prev => [...prev, {
        type: 'bot',
        text: `Nice to meet you, ${input}! What's your email address?`,
      }]);
    } else if (!bookingData.email) {
      setBookingData({ ...bookingData, email: input });
      setMessages(prev => [...prev, {
        type: 'bot',
        text: 'Got it! What\'s your phone number?',
      }]);
    } else if (!bookingData.phone) {
      setBookingData({ ...bookingData, phone: input });
      setMessages(prev => [...prev, {
        type: 'bot',
        text: 'Perfect! What date works best for you? (e.g., "Tomorrow" or "Next Monday")',
      }]);
    } else if (!bookingData.date) {
      setBookingData({ ...bookingData, date: input });
      setMessages(prev => [...prev, {
        type: 'bot',
        text: 'Great! What time would you prefer? (e.g., "2 PM" or "10:00 AM")',
      }]);
    } else if (!bookingData.time) {
      setBookingData({ ...bookingData, time: input });
      setMessages(prev => [...prev, {
        type: 'bot',
        text: `Excellent! I've scheduled your appointment:\n\n📅 Date: ${bookingData.date}\n⏰ Time: ${input}\n\nOur team will confirm via email at ${bookingData.email}. Is there anything else I can help you with?`,
        buttons: [
          { text: '✅ Done', action: 'done' },
          { text: '📋 View Services', action: 'services' },
        ]
      }]);
      setIsBooking(false);
      setBookingData({ name: '', email: '', phone: '', date: '', time: '' });
    }
  };

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-28 right-6 w-96 h-[500px] bg-white rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-cyan-600 p-6 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3>AI Assistant</h3>
                  <p className="text-xs text-white/80">Online 24/7</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`mb-4 ${message.type === 'user' ? 'flex justify-end' : 'flex flex-col items-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-br-none'
                        : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
                    }`}
                  >
                    <div className="whitespace-pre-line">{message.text}</div>
                  </div>
                  
                  {/* Quick Action Buttons */}
                  {message.buttons && message.type === 'bot' && (
                    <div className="mt-2 flex flex-wrap gap-2 max-w-[80%]">
                      {message.buttons.map((button, btnIndex) => (
                        <motion.button
                          key={btnIndex}
                          onClick={() => handleButtonClick(button.action)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-purple-50 hover:border-purple-300 hover:text-purple-600 transition-all shadow-sm"
                        >
                          {button.text}
                        </motion.button>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50"
                />
                <button
                  onClick={handleSend}
                  className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full shadow-2xl flex items-center justify-center z-50 group"
        style={{
          boxShadow: '0 10px 40px rgba(168, 85, 247, 0.4)',
        }}
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 opacity-50"
        />
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-7 h-7 text-white relative z-10" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-7 h-7 text-white relative z-10" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
