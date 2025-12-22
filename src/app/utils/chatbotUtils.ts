// Validation utilities
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  const digitsOnly = phone.replace(/\D/g, '');
  return digitsOnly.length >= 10 && phoneRegex.test(phone);
};

export const validateDate = (date: string): boolean => {
  // Accept various date formats
  const dateRegex = /^(tomorrow|today|next\s+(monday|tuesday|wednesday|thursday|friday|saturday|sunday)|[\d]{1,2}\/[\d]{1,2}\/[\d]{4}|[\d]{4}-[\d]{2}-[\d]{2})$/i;
  return dateRegex.test(date.trim()) || new Date(date).toString() !== 'Invalid Date';
};

export const validateTime = (time: string): boolean => {
  const timeRegex = /^([0-1]?[0-9]|2[0-3]):?([0-5][0-9])?\s?(AM|PM|am|pm)?$/i;
  return timeRegex.test(time.trim());
};

// Format time for display
export const formatTime = (date: Date): string => {
  return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
};

// Format date for display
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', { 
    weekday: 'short', 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
};

// Get business hours status
export const getBusinessHours = () => {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 6 = Saturday
  const hour = now.getHours();
  
  // Monday-Friday, 9 AM - 6 PM
  const isWeekday = day >= 1 && day <= 5;
  const isBusinessHours = hour >= 9 && hour < 18;
  
  return {
    isOpen: isWeekday && isBusinessHours,
    status: isWeekday && isBusinessHours ? 'Online' : 'Offline',
    hours: 'Monday - Friday, 9 AM - 6 PM',
  };
};

// Storage utilities
export const saveConversation = (messages: any[]) => {
  try {
    localStorage.setItem('chatbot_conversation', JSON.stringify(messages));
  } catch (error) {
    console.error('Failed to save conversation:', error);
  }
};

export const loadConversation = (): any[] => {
  try {
    const saved = localStorage.getItem('chatbot_conversation');
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error('Failed to load conversation:', error);
    return [];
  }
};

export const clearConversation = () => {
  try {
    localStorage.removeItem('chatbot_conversation');
  } catch (error) {
    console.error('Failed to clear conversation:', error);
  }
};

// Export conversation as text
export const exportConversation = (messages: any[]): string => {
  return messages.map(msg => {
    const timestamp = msg.timestamp ? new Date(msg.timestamp).toLocaleString() : '';
    return `[${msg.type.toUpperCase()}] ${timestamp}\n${msg.text}\n`;
  }).join('\n---\n\n');
};

