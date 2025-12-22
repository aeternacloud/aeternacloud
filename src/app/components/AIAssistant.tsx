import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, X, Send, Trash2, Download, Clock, 
  Briefcase, Users, Calendar, Phone, Mail, MapPin,
  Code2, Globe, Smartphone, Palette, Cloud, Search,
  HelpCircle, DollarSign, CheckCircle2, AlertCircle,
  MoreVertical, ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  validateEmail, validatePhone, validateDate, validateTime,
  formatTime, formatDate, getBusinessHours,
  saveConversation, loadConversation, clearConversation, exportConversation
} from '../utils/chatbotUtils';
import { detectIntent, detectServiceIntent } from '../utils/chatbotIntents';

type Message = {
  id: string;
  type: 'bot' | 'user';
  text: string;
  timestamp: number;
  buttons?: { text: string; action: string; icon?: any }[];
  serviceCard?: {
    title: string;
    description: string;
    path: string;
    gradient: string;
  };
  error?: boolean;
};

const services = [
  {
    title: 'Software Development',
    description: 'Tailored software solutions built with cutting-edge technologies.',
    path: '/services/software-development',
    icon: Code2,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Web Development',
    description: 'Stunning, responsive websites and web applications.',
    path: '/services/web-development',
    icon: Globe,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'App Development',
    description: 'Native and cross-platform mobile applications.',
    path: '/services/app-development',
    icon: Smartphone,
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces designed to delight users.',
    path: '/services/ui-ux-design',
    icon: Palette,
    gradient: 'from-pink-500 to-red-500',
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services.',
    path: '/services/cloud-solutions',
    icon: Cloud,
    gradient: 'from-indigo-500 to-blue-500',
  },
];

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [chatMode, setChatMode] = useState<'compact' | 'full'>('compact');
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isBooking, setIsBooking] = useState(false);
  const [bookingData, setBookingData] = useState({ name: '', email: '', phone: '', date: '', time: '' });
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showMenu, setShowMenu] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [showServicesInline, setShowServicesInline] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Get business hours safely
  const businessHours = (() => {
    try {
      return getBusinessHours();
    } catch (e) {
      console.error('Error getting business hours:', e);
      return { isOpen: false, status: 'Offline', hours: 'Monday - Friday, 9 AM - 6 PM' };
    }
  })();
  
  // Load conversation from localStorage on mount
  useEffect(() => {
    try {
      const savedMessages = loadConversation();
      if (savedMessages && savedMessages.length > 0) {
        setMessages(savedMessages);
      } else {
        // Initial greeting message
        const greetingMessage: Message = {
          id: Date.now().toString(),
          type: 'bot',
          text: 'Hello! I\'m your AI assistant. How can I help you today?',
          timestamp: Date.now(),
          buttons: [
            { text: 'Our Services', action: 'services', icon: Briefcase },
            { text: 'Our Team', action: 'team', icon: Users },
            { text: 'Book Appointment', action: 'appointment', icon: Calendar },
            { text: 'Contact Us', action: 'contact', icon: Phone },
          ]
        };
        setMessages([greetingMessage]);
      }
    } catch (error) {
      console.error('Error loading conversation:', error);
      // Set default greeting on error
      const greetingMessage: Message = {
        id: Date.now().toString(),
        type: 'bot',
        text: 'Hello! I\'m your AI assistant. How can I help you today?',
        timestamp: Date.now(),
        buttons: [
          { text: 'Our Services', action: 'services', icon: Briefcase },
          { text: 'Our Team', action: 'team', icon: Users },
          { text: 'Book Appointment', action: 'appointment', icon: Calendar },
          { text: 'Contact Us', action: 'contact', icon: Phone },
        ]
      };
      setMessages([greetingMessage]);
    }
  }, []);

  // Save conversation to localStorage whenever messages change
  useEffect(() => {
    try {
      if (messages.length > 0) {
        saveConversation(messages);
      }
    } catch (error) {
      console.error('Error saving conversation:', error);
    }
  }, [messages]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Reset to compact mode when chat closes
  useEffect(() => {
    if (!isOpen) {
      setChatMode('compact');
      setShowServicesInline(false);
    }
  }, [isOpen]);

  // Generate unique message ID
  const generateMessageId = () => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

  // Simulate typing delay
  const simulateTyping = (callback: () => void, delay: number = 800) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      callback();
    }, delay);
  };

  // Generate bot response based on intent
  const getBotResponse = (intent: string, userText?: string): Message => {
    const serviceIntent = userText ? detectServiceIntent(userText) : null;
    
    switch (intent) {
      case 'team':
        return {
          id: generateMessageId(),
          type: 'bot',
          text: 'Our team consists of experienced professionals dedicated to delivering exceptional results. We have experts in software development, design, cloud solutions, and more. Would you like to learn more?',
          timestamp: Date.now(),
          buttons: [
            { text: 'View Team Page', action: 'team-page', icon: Users },
            { text: 'Book a Meeting', action: 'appointment', icon: Calendar },
          ]
        };
      
      case 'services':
        if (serviceIntent) {
          const service = services.find(s => s.path.includes(serviceIntent));
          if (service) {
            return {
              id: generateMessageId(),
              type: 'bot',
              text: `Here's information about our ${service.title} service:`,
              timestamp: Date.now(),
              serviceCard: {
                title: service.title,
                description: service.description,
                path: service.path,
                gradient: service.gradient,
              },
              buttons: [
                { text: 'Learn More', action: `service-${serviceIntent}`, icon: ExternalLink },
                { text: 'Book Consultation', action: 'appointment', icon: Calendar },
              ]
            };
          }
        }
        return {
          id: generateMessageId(),
          type: 'bot',
          text: 'We offer comprehensive IT solutions including:\n\n• Software Development\n• Web Development\n• App Development\n• UI/UX Design\n• Cloud Solutions\n\nWhich service interests you?',
          timestamp: Date.now(),
          buttons: [
            { text: 'View All Services', action: 'services-page', icon: Briefcase },
            { text: 'Book Consultation', action: 'appointment', icon: Calendar },
          ]
        };
      
      case 'appointment':
        setIsBooking(true);
        return {
          id: generateMessageId(),
          type: 'bot',
          text: 'Great! I\'d be happy to help you schedule an appointment. Let me gather some information:\n\nWhat\'s your name?',
          timestamp: Date.now(),
        };
      
      case 'contact':
        return {
          id: generateMessageId(),
          type: 'bot',
          text: `Here's how you can reach us:\n\n📞 Phone: +1 (555) 123-4567\n📧 Email: contact@company.com\n📍 Address: 123 Business St, City, State 12345\n\nBusiness Hours: ${businessHours.hours}\n\nCurrent Status: ${businessHours.status}`,
          timestamp: Date.now(),
          buttons: [
            { text: 'Book a Call', action: 'appointment', icon: Calendar },
            { text: 'Send Email', action: 'email', icon: Mail },
          ]
        };
      
      case 'pricing':
        return {
          id: generateMessageId(),
          type: 'bot',
          text: 'Our pricing is customized based on your specific needs and project requirements. We offer flexible engagement models:\n\n• Fixed-price projects\n• Hourly rates\n• Retainer agreements\n• Custom enterprise solutions\n\nWould you like to schedule a consultation to discuss pricing for your project?',
          timestamp: Date.now(),
          buttons: [
            { text: 'Book Consultation', action: 'appointment', icon: Calendar },
            { text: 'View Services', action: 'services', icon: Briefcase },
          ]
        };
      
      case 'faq':
        return {
          id: generateMessageId(),
          type: 'bot',
          text: 'I can help answer common questions! You can also visit our FAQ page for more detailed information.\n\nCommon topics:\n• Service details\n• Project timelines\n• Pricing information\n• Technical capabilities\n\nWhat would you like to know?',
          timestamp: Date.now(),
          buttons: [
            { text: 'View FAQ Page', action: 'faq-page', icon: HelpCircle },
            { text: 'Contact Support', action: 'contact', icon: Phone },
          ]
        };
      
      case 'greeting':
        return {
          id: generateMessageId(),
          type: 'bot',
          text: 'Hello! How can I assist you today?',
          timestamp: Date.now(),
          buttons: [
            { text: 'Our Services', action: 'services', icon: Briefcase },
            { text: 'Our Team', action: 'team', icon: Users },
            { text: 'Book Appointment', action: 'appointment', icon: Calendar },
          ]
        };
      
      default:
        return {
          id: generateMessageId(),
          type: 'bot',
          text: 'I understand you\'re looking for help. I can assist you with:\n\n• Information about our services\n• Details about our team\n• Scheduling appointments or calls\n• Pricing information\n• FAQ and support\n\nWhat would you like to know?',
          timestamp: Date.now(),
          buttons: [
            { text: 'Our Services', action: 'services', icon: Briefcase },
            { text: 'Our Team', action: 'team', icon: Users },
            { text: 'Book Appointment', action: 'appointment', icon: Calendar },
            { text: 'FAQ', action: 'faq', icon: HelpCircle },
          ]
        };
    }
  };

  const handleButtonClick = (action: string) => {
    switch (action) {
      case 'services':
        // Show services inline in compact mode
        if (chatMode === 'compact') {
          setShowServicesInline(true);
          const servicesMessage: Message = {
            id: generateMessageId(),
            type: 'bot',
            text: 'Here are our services. Click any service to learn more or book a consultation.',
            timestamp: Date.now(),
          };
          setMessages(prev => [...prev, servicesMessage]);
        } else {
          simulateTyping(() => {
            const response = getBotResponse(action);
            setMessages(prev => [...prev, response]);
          });
        }
        break;
      case 'team':
      case 'team-page':
        // Navigate to team page
        window.location.href = '/company/team';
        break;
      case 'appointment':
      case 'callback':
        // Expand to full chat mode for booking/callback
        setChatMode('full');
        setIsBooking(action === 'appointment');
        simulateTyping(() => {
          const response = getBotResponse('appointment');
          setMessages(prev => [...prev, response]);
        });
        break;
      case 'contact':
        // Show contact info with callback option
        const contactMessage: Message = {
          id: generateMessageId(),
          type: 'bot',
          text: `Here's how you can reach us:\n\n📞 Phone: +1 (555) 123-4567\n📧 Email: contact@company.com\n📍 Address: 123 Business St, City, State 12345\n\nBusiness Hours: ${businessHours.hours}\n\nWould you like to request a callback?`,
          timestamp: Date.now(),
          buttons: [
            { text: 'Request Callback', action: 'callback', icon: Phone },
            { text: 'Send Email', action: 'email', icon: Mail },
            { text: 'Book Appointment', action: 'appointment', icon: Calendar },
          ]
        };
        setMessages(prev => [...prev, contactMessage]);
        break;
      case 'services-page':
        window.location.href = '/#services';
        break;
      case 'faq-page':
        window.location.href = '/resources/faq';
        break;
      case 'call-now':
        window.location.href = 'tel:+15551234567';
        break;
      case 'email':
        window.location.href = 'mailto:contact@company.com';
        break;
      case 'done':
        const doneMessage: Message = {
          id: generateMessageId(),
          type: 'bot',
          text: 'Great! Is there anything else I can help you with?',
          timestamp: Date.now(),
          buttons: [
            { text: 'Our Services', action: 'services', icon: Briefcase },
            { text: 'Our Team', action: 'team', icon: Users },
          ]
        };
        setMessages(prev => [...prev, doneMessage]);
        break;
      default:
        if (action.startsWith('service-')) {
          const serviceId = action.replace('service-', '');
          const service = services.find(s => s.path.includes(serviceId));
          if (service) {
            window.location.href = service.path;
          }
        } else if (action.startsWith('book-service-')) {
          // Book consultation for specific service - expand to full chat
          const serviceId = action.replace('book-service-', '');
          setChatMode('full');
          setIsBooking(true);
          const service = services.find(s => s.path.includes(serviceId));
          simulateTyping(() => {
            const appointmentMessage: Message = {
              id: generateMessageId(),
              type: 'bot',
              text: `Great! I'd be happy to help you schedule a consultation for ${service?.title || 'our services'}. Let me gather some information:\n\nWhat's your name?`,
              timestamp: Date.now(),
            };
            setMessages(prev => [...prev, appointmentMessage]);
          });
        } else {
          simulateTyping(() => {
            const response = getBotResponse(action);
            setMessages(prev => [...prev, response]);
          });
        }
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;
    setError(null);

    const userMessage: Message = {
      id: generateMessageId(),
      type: 'user',
      text: input.trim(),
      timestamp: Date.now(),
    };
    setMessages(prev => [...prev, userMessage]);
    const userInput = input.trim();
    setInput('');

    // Handle booking flow
    if (isBooking) {
      // Ensure we're in full chat mode for booking
      if (chatMode === 'compact') {
        setChatMode('full');
      }
      handleBookingFlow(userInput);
      return;
    }

    // Detect intent and respond
    simulateTyping(() => {
      const intent = detectIntent(userInput);
      
      // If intent is appointment or callback, expand to full chat
      if (intent === 'appointment' || userInput.toLowerCase().includes('callback') || userInput.toLowerCase().includes('call back')) {
        setChatMode('full');
        setIsBooking(true);
        const appointmentMessage: Message = {
          id: generateMessageId(),
          type: 'bot',
          text: 'Great! I\'d be happy to help you schedule a consultation. Let me gather some information:\n\nWhat\'s your name?',
          timestamp: Date.now(),
        };
        setMessages(prev => [...prev, appointmentMessage]);
        return;
      }
      
      const response = getBotResponse(intent, userInput);
      
      // If response requires booking flow, expand to full chat
      if (intent === 'appointment') {
        setChatMode('full');
        setIsBooking(true);
      }
      
      setMessages(prev => [...prev, response]);
    });
  };

  const handleBookingFlow = (input: string) => {
    if (!bookingData.name) {
      if (input.trim().length < 2) {
        setError('Please enter a valid name (at least 2 characters).');
        return;
      }
      setBookingData({ ...bookingData, name: input });
      simulateTyping(() => {
        const message: Message = {
          id: generateMessageId(),
          type: 'bot',
          text: `Nice to meet you, ${input}! What's your email address?`,
          timestamp: Date.now(),
        };
        setMessages(prev => [...prev, message]);
      });
    } else if (!bookingData.email) {
      if (!validateEmail(input)) {
        setError('Please enter a valid email address (e.g., name@example.com).');
        return;
      }
      setError(null);
      setBookingData({ ...bookingData, email: input });
      simulateTyping(() => {
        const message: Message = {
          id: generateMessageId(),
          type: 'bot',
          text: 'Got it! What\'s your phone number?',
          timestamp: Date.now(),
        };
        setMessages(prev => [...prev, message]);
      });
    } else if (!bookingData.phone) {
      if (!validatePhone(input)) {
        setError('Please enter a valid phone number (at least 10 digits).');
        return;
      }
      setError(null);
      setBookingData({ ...bookingData, phone: input });
      simulateTyping(() => {
        const message: Message = {
          id: generateMessageId(),
          type: 'bot',
          text: 'Perfect! What date works best for you? (e.g., "Tomorrow", "Next Monday", or "12/25/2024")',
          timestamp: Date.now(),
        };
        setMessages(prev => [...prev, message]);
      });
    } else if (!bookingData.date) {
      if (!validateDate(input)) {
        setError('Please enter a valid date. You can use formats like "Tomorrow", "Next Monday", or "MM/DD/YYYY".');
        return;
      }
      setError(null);
      setBookingData({ ...bookingData, date: input });
      simulateTyping(() => {
        const message: Message = {
          id: generateMessageId(),
          type: 'bot',
          text: 'Great! What time would you prefer? (e.g., "2 PM", "10:00 AM", or "14:00")',
          timestamp: Date.now(),
        };
        setMessages(prev => [...prev, message]);
      });
    } else if (!bookingData.time) {
      if (!validateTime(input)) {
        setError('Please enter a valid time (e.g., "2 PM" or "10:00 AM").');
        return;
      }
      setError(null);
      setBookingData({ ...bookingData, time: input });
      simulateTyping(() => {
        const confirmationMessage: Message = {
          id: generateMessageId(),
          type: 'bot',
          text: `Excellent! I've scheduled your appointment:\n\n📅 Date: ${bookingData.date}\n⏰ Time: ${input}\n\nOur team will confirm via email at ${bookingData.email} within 24 hours. Is there anything else I can help you with?`,
          timestamp: Date.now(),
          buttons: [
            { text: 'Done', action: 'done', icon: CheckCircle2 },
            { text: 'View Services', action: 'services', icon: Briefcase },
          ]
        };
        setMessages(prev => [...prev, confirmationMessage]);
        setIsBooking(false);
        setBookingData({ name: '', email: '', phone: '', date: '', time: '' });
      }, 1000);
    }
  };

  const handleClearConversation = () => {
    if (window.confirm('Are you sure you want to clear the conversation history?')) {
      clearConversation();
      const greetingMessage: Message = {
        id: generateMessageId(),
        type: 'bot',
        text: 'Hello! I\'m your AI assistant. How can I help you today?',
        timestamp: Date.now(),
        buttons: [
          { text: 'Our Services', action: 'services', icon: Briefcase },
          { text: 'Our Team', action: 'team', icon: Users },
          { text: 'Book Appointment', action: 'appointment', icon: Calendar },
          { text: 'Contact Us', action: 'contact', icon: Phone },
        ]
      };
      setMessages([greetingMessage]);
      setShowMenu(false);
    }
  };

  const handleExportConversation = () => {
    const conversationText = exportConversation(messages);
    const blob = new Blob([conversationText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `conversation-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setShowMenu(false);
  };

  // Safety check - if component has error, return minimal UI
  if (hasError || !businessHours) {
    return (
      <motion.button
        onClick={() => {
          setHasError(false);
          setIsOpen(!isOpen);
        }}
        className="fixed bottom-6 right-6 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full shadow-2xl flex items-center justify-center z-50"
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
      </motion.button>
    );
  }

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
            className={`fixed bottom-28 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200 transition-all duration-300 ${
              chatMode === 'compact' 
                ? 'h-auto max-h-[500px]' 
                : 'h-[600px] max-h-[calc(100vh-8rem)]'
            }`}
            role="dialog"
            aria-label="AI Assistant Chat"
            aria-modal="true"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-cyan-600 p-4 sm:p-6 text-white flex items-center justify-between relative">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-base sm:text-lg truncate">AI Assistant</h3>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${businessHours.isOpen ? 'bg-green-300' : 'bg-gray-300'}`} />
                    <p className="text-xs text-white/80 truncate">{businessHours.status} • {businessHours.hours}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                {/* Menu Button */}
                <div className="relative">
                  <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
                    aria-label="Menu"
                  >
                    <MoreVertical className="w-5 h-5" />
                  </button>
                  {showMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute right-0 top-10 bg-white rounded-lg shadow-xl border border-gray-200 py-2 min-w-[180px] z-10"
                    >
                      <button
                        onClick={handleClearConversation}
                        className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                      >
                        <Trash2 className="w-4 h-4" />
                        Clear Chat
                      </button>
                      <button
                        onClick={handleExportConversation}
                        className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        Export Chat
                      </button>
                    </motion.div>
                  )}
                </div>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setShowMenu(false);
                  }}
                  className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className={`p-4 sm:p-6 overflow-y-auto bg-gray-50 transition-all duration-300 ${
              chatMode === 'compact' ? 'max-h-[300px]' : 'flex-1'
            }`} role="log" aria-live="polite">
              
              {/* Inline Services Display (Compact Mode) */}
              {showServicesInline && chatMode === 'compact' && (
                <div className="mb-4 space-y-3">
                  {services.map((service) => {
                    const IconComponent = service.icon;
                    return (
                      <motion.div
                        key={service.path}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="border border-gray-200 rounded-xl bg-white hover:shadow-md transition-all overflow-hidden"
                      >
                        <Link to={service.path} className="block p-4">
                          <div className="flex items-start gap-3">
                            {IconComponent && (
                              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} p-0.5 flex-shrink-0`}>
                                <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                                  <IconComponent className="w-6 h-6 text-gray-700" />
                                </div>
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-gray-900 mb-1">{service.title}</h4>
                              <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                              <div className="flex gap-2">
                                <Link
                                  to={service.path}
                                  className="text-xs px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 transition-colors"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setShowServicesInline(false);
                                  }}
                                >
                                  Learn More
                                </Link>
                                <button
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleButtonClick(`book-service-${service.path.split('/').pop()}`);
                                  }}
                                  className="text-xs px-3 py-1.5 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg hover:shadow-md transition-all"
                                >
                                  Book Consultation
                                </button>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              )}
              {messages && Array.isArray(messages) && messages.length > 0 ? messages.map((message) => {
                if (!message || !message.id || !message.type || !message.text) {
                  return null;
                }
                return (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`mb-4 ${message.type === 'user' ? 'flex flex-col items-end' : 'flex flex-col items-start'}`}
                >
                  <div className="flex items-center gap-2 mb-1 max-w-[80%]">
                    {message.type === 'bot' && (
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-3.5 h-3.5 text-white" />
                      </div>
                    )}
                    <span className="text-xs text-gray-500">
                      {(() => {
                        try {
                          const date = new Date(message.timestamp);
                          return isNaN(date.getTime()) ? '' : formatTime(date);
                        } catch {
                          return '';
                        }
                      })()}
                    </span>
                  </div>
                  
                  {/* Service Card */}
                  {message.serviceCard && (() => {
                    // Find the service from the services array to get the icon
                    const service = services.find(s => s.path === message.serviceCard?.path);
                    const IconComponent = service?.icon;
                    
                    return (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-[80%] mb-2"
                      >
                        <Link
                          to={message.serviceCard.path}
                          className="block p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
                        >
                          <div className="flex items-start gap-3">
                            {IconComponent && typeof IconComponent === 'function' && (
                              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${message.serviceCard.gradient} p-0.5 flex-shrink-0`}>
                                <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                                  <IconComponent className="w-6 h-6 text-gray-700" />
                                </div>
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-gray-900 mb-1">{message.serviceCard.title}</h4>
                              <p className="text-sm text-gray-600 line-clamp-2">{message.serviceCard.description}</p>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })()}
                  
                  {/* Message Bubble */}
                  <div
                    className={`max-w-[80%] p-3 sm:p-4 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-br-none'
                        : message.error
                        ? 'bg-red-50 text-red-800 border border-red-200 rounded-bl-none'
                        : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
                    }`}
                  >
                    <div className="whitespace-pre-line text-sm sm:text-base">{message.text}</div>
                  </div>
                  
                  {/* Quick Action Buttons */}
                  {message.buttons && message.type === 'bot' && (
                    <div className="mt-2 flex flex-wrap gap-2 max-w-[80%]">
                      {message.buttons.map((button, btnIndex) => {
                        const Icon = button.icon;
                        // Safety check: ensure Icon is a valid React component
                        const isValidIcon = Icon && typeof Icon === 'function';
                        return (
                          <motion.button
                            key={btnIndex}
                            onClick={() => {
                              try {
                                handleButtonClick(button.action);
                              } catch (error) {
                                console.error('Error handling button click:', error);
                                setError('An error occurred. Please try again.');
                              }
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-700 hover:bg-purple-50 hover:border-purple-300 hover:text-purple-600 transition-all shadow-sm flex items-center gap-2"
                          >
                            {isValidIcon && <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                            <span>{button.text}</span>
                          </motion.button>
                        );
                      })}
                    </div>
                  )}
                </motion.div>
                );
              }).filter(Boolean) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  <p className="text-sm">Start a conversation...</p>
                </div>
              )}
              
              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 mb-4"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center">
                    <MessageCircle className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="flex items-center gap-1 px-4 py-3 bg-white rounded-2xl rounded-bl-none shadow-sm">
                    <motion.div
                      className="w-2 h-2 bg-gray-400 rounded-full"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-gray-400 rounded-full"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-gray-400 rounded-full"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                    />
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="px-4 py-2 bg-red-50 border-t border-red-200 flex items-center gap-2 text-red-700 text-sm"
              >
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
                <button
                  onClick={() => setError(null)}
                  className="ml-auto"
                  aria-label="Dismiss error"
                >
                  <X className="w-4 h-4" />
                </button>
              </motion.div>
            )}

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex gap-2 sm:gap-3">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    setError(null);
                  }}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  placeholder="Type your message..."
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50 text-sm sm:text-base"
                  disabled={isTyping}
                  aria-label="Message input"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowMenu(false);
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full shadow-2xl flex items-center justify-center z-50 group"
        style={{
          boxShadow: '0 10px 40px rgba(168, 85, 247, 0.4)',
        }}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
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
              <X className="w-6 h-6 sm:w-7 sm:h-7 text-white relative z-10" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white relative z-10" />
            </motion.div>
          )}
        </AnimatePresence>
        {/* Notification Badge - show if there are unread messages when closed */}
        {!isOpen && messages.length > 1 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
          >
            {messages.length - 1}
          </motion.div>
        )}
      </motion.button>
      
      {/* Click outside to close menu */}
      {showMenu && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowMenu(false)}
        />
      )}
    </>
  );
}
