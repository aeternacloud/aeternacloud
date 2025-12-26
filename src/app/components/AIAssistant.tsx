import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, X, ArrowRight, 
  Code2, Globe, Smartphone, Palette, Cloud 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    title: 'Software Development',
    path: '/services/software-development',
    icon: Code2,
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    title: 'Web Development',
    path: '/services/web-development',
    icon: Globe,
    color: 'text-purple-500',
    bg: 'bg-purple-50',
  },
  {
    title: 'App Development',
    path: '/services/app-development',
    icon: Smartphone,
    color: 'text-cyan-500',
    bg: 'bg-cyan-50',
  },
  {
    title: 'UI/UX Design',
    path: '/services/ui-ux-design',
    icon: Palette,
    color: 'text-pink-500',
    bg: 'bg-pink-50',
  },
  {
    title: 'Cloud Solutions',
    path: '/services/cloud-solutions',
    icon: Cloud,
    color: 'text-indigo-500',
    bg: 'bg-indigo-50',
  },
];

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-80 sm:w-96 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="bg-slate-900 p-4 text-white flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg">How can we help?</h3>
                <p className="text-xs text-slate-300">Select a service or contact us</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 hover:bg-white/10 transition-colors"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="grid grid-cols-1 gap-2 mb-4">
                {services.map((service) => (
                  <button
                    key={service.title}
                    onClick={() => {
                      setIsOpen(false);
                      navigate(service.path);
                    }}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 text-left group"
                  >
                    <div className={`p-2 rounded-lg ${service.bg} ${service.color} group-hover:scale-110 transition-transform`}>
                      <service.icon size={18} />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{service.title}</span>
                    <ArrowRight size={14} className="ml-auto text-slate-300 group-hover:text-slate-500" />
                  </button>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-100">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    navigate("/contact");
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-medium text-white transition-all hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20"
                >
                  Contact Us Directly
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl hover:from-blue-700 hover:to-purple-700"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}
