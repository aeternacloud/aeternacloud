// Enhanced intent detection with better keyword matching
export const detectIntent = (text: string): string => {
  const lowerText = text.toLowerCase().trim();
  
  // Service-related intents
  const serviceKeywords = [
    'service', 'services', 'what do you do', 'offer', 'offerings',
    'software development', 'web development', 'app development',
    'ui/ux', 'ui ux', 'design', 'cloud', 'cloud solutions',
    'seo', 'digital marketing', 'what can you help', 'capabilities'
  ];
  
  // Team-related intents
  const teamKeywords = [
    'team', 'about', 'company', 'who are you', 'employees',
    'staff', 'people', 'experts', 'professionals', 'developers'
  ];
  
  // Appointment/Booking intents
  const appointmentKeywords = [
    'appointment', 'book', 'schedule', 'meeting', 'consultation',
    'call', 'demo', 'discuss', 'talk', 'meet', 'availability',
    'when can', 'set up', 'arrange'
  ];
  
  // Contact intents
  const contactKeywords = [
    'contact', 'phone', 'email', 'address', 'location', 'reach',
    'get in touch', 'connect', 'speak', 'call now'
  ];
  
  // Pricing intents
  const pricingKeywords = [
    'price', 'pricing', 'cost', 'how much', 'fee', 'charge',
    'quote', 'estimate', 'budget', 'affordable', 'expensive'
  ];
  
  // FAQ/Help intents
  const faqKeywords = [
    'faq', 'question', 'help', 'how', 'what is', 'explain',
    'tell me about', 'information', 'details', 'more info'
  ];
  
  // Greeting intents
  const greetingKeywords = [
    'hello', 'hi', 'hey', 'good morning', 'good afternoon',
    'good evening', 'greetings', 'howdy'
  ];
  
  // Check for exact matches first
  if (greetingKeywords.some(keyword => lowerText.includes(keyword))) {
    return 'greeting';
  }
  
  if (serviceKeywords.some(keyword => lowerText.includes(keyword))) {
    return 'services';
  }
  
  if (teamKeywords.some(keyword => lowerText.includes(keyword))) {
    return 'team';
  }
  
  if (appointmentKeywords.some(keyword => lowerText.includes(keyword))) {
    return 'appointment';
  }
  
  if (contactKeywords.some(keyword => lowerText.includes(keyword))) {
    return 'contact';
  }
  
  if (pricingKeywords.some(keyword => lowerText.includes(keyword))) {
    return 'pricing';
  }
  
  if (faqKeywords.some(keyword => lowerText.includes(keyword))) {
    return 'faq';
  }
  
  return 'default';
};

// Service-specific intent detection
export const detectServiceIntent = (text: string): string | null => {
  const lowerText = text.toLowerCase();
  
  const services = [
    { keywords: ['software', 'software development', 'custom software'], id: 'software-development' },
    { keywords: ['web', 'website', 'web development', 'web app'], id: 'web-development' },
    { keywords: ['app', 'mobile', 'ios', 'android', 'app development'], id: 'app-development' },
    { keywords: ['ui', 'ux', 'design', 'interface', 'user experience'], id: 'ui-ux-design' },
    { keywords: ['cloud', 'aws', 'azure', 'gcp', 'cloud solutions'], id: 'cloud-solutions' },
    { keywords: ['seo', 'search engine', 'ranking'], id: 'seo-services' },
    { keywords: ['marketing', 'digital marketing', 'social media'], id: 'digital-marketing' },
  ];
  
  for (const service of services) {
    if (service.keywords.some(keyword => lowerText.includes(keyword))) {
      return service.id;
    }
  }
  
  return null;
};

