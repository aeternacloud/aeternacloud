import { motion } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook, Send, Loader2, Check } from 'lucide-react';
import { supabase } from '../../../supabaseClient';
import { toast } from 'sonner';

export function Footer() {
  const services = [
    { name: 'Software Development', path: '/services/software-development' },
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'App Development', path: '/services/app-development' },
    { name: 'UI/UX Design', path: '/services/ui-ux-design' },
    { name: 'Cloud Solutions', path: '/services/cloud-solutions' },
  ];

  const company = [
    { name: 'About Us', path: '/company/about' },
    { name: 'Careers', path: '/company/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  const resources = [
    { name: 'Documentation', path: '/resources/documentation' },
    { name: 'Case Studies', path: '/resources/case-studies' },
    { name: 'FAQ', path: '/resources/faq' },
  ];

  const legal = [
    { name: 'Privacy Policy', path: '/legal/privacy' },
    { name: 'Terms & Conditions', path: '/legal/terms' },
  ];

  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    try {
      const { error } = await supabase
        .from('subscribers')
        .insert([{ email }]);

      if (error) throw error;

      setIsSuccess(true);
      toast.success('Successfully subscribed to newsletter!');
      setEmail('');
    } catch (error) {
      console.error('Error subscribing:', error);
      toast.error('Failed to subscribe. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // MUCH LARGER SIZE: Significantly increased padding for maximum visual presence
    <footer className="relative bg-black min-h-[50vh] border-t border-white/10 overflow-hidden py-[80px]">
      
      {/* Gradient top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-[1300px] mx-auto px-6 lg:px-8">
        
        {/* EXPANDED GRID: Much more spacious layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-[40px] gap-y-12 mb-[60px]">
          
          {/* Brand Column (Original Content) */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <span className="text-2xl text-white font-medium">Aeterna Cloud</span>
            </Link>

            <p className="text-gray-400 leading-relaxed text-base max-w-sm">
              Empowering businesses with cutting-edge technology solutions. We transform ideas into powerful digital experiences.
            </p>

            {/* Contact Info (Original Content) */}
            <div className="space-y-4 pt-4">
              <a href="mailto:aeternacloud@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors group">
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-purple-500/50">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">aeternacloud@gmail.com</span>
              </a>
              <a href="tel:+15551234567" className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors group">
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/50">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">+1 (555) 123-4567</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">San Francisco, CA 94107</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2">
            <h3 className="text-white mb-6 text-base font-medium uppercase tracking-wider relative inline-block">
              Services
              <div className="absolute -bottom-1 left-0 w-10 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500" />
            </h3>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-gray-400 hover:text-purple-400 transition-colors inline-flex items-center gap-2 group">
                    <span className="w-0 h-px bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h3 className="text-white mb-6 text-base font-medium uppercase tracking-wider relative inline-block">
              Company
              <div className="absolute -bottom-1 left-0 w-10 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500" />
            </h3>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-gray-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-2 group">
                    <span className="w-0 h-px bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="lg:col-span-2">
            <h3 className="text-white mb-6 text-base font-medium uppercase tracking-wider relative inline-block">
              Resources
              <div className="absolute -bottom-1 left-0 w-10 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500" />
            </h3>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-gray-400 hover:text-purple-400 transition-colors inline-flex items-center gap-2 group">
                    <span className="w-0 h-px bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-2">
            <h3 className="text-white mb-6 text-base font-medium uppercase tracking-wider relative inline-block">
              Stay Updated
              <div className="absolute -bottom-1 left-0 w-10 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500" />
            </h3>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Get the latest updates on technology trends.
            </p>
            <form className="space-y-3" onSubmit={handleSubscribe}>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  disabled={isLoading || isSuccess}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all pr-10 disabled:opacity-50"
                />
                <button 
                  type="submit" 
                  disabled={isLoading || isSuccess}
                  className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/50 transition-all group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? <Loader2 className="w-4 h-4 text-white animate-spin" /> : isSuccess ? <Check className="w-4 h-4 text-white" /> : <Send className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />}
                </button>
              </div>
              <p className="text-xs text-gray-500">
                We respect your privacy.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Bar (Original Layout) */}
        <div className="pt-[60px] border-t border-white/10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Copyright & Legal Links */}
            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-400">
              <p>© 2025 Aeterna Cloud. All rights reserved.</p>
              <div className="flex gap-1">
                <span className="hidden sm:inline text-gray-600">|</span>
                <div className="flex gap-8">
                  {legal.map((link) => (
                    <Link key={link.path} to={link.path} className="hover:text-purple-400 transition-colors">
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Links (Restored from Original Code) */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500 mr-2">Follow us:</span>
              {[
                { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com' },
                { icon: Twitter, label: 'Twitter', url: 'https://twitter.com' },
                { icon: Github, label: 'GitHub', url: 'https://github.com' },
                { icon: Facebook, label: 'Facebook', url: 'https://facebook.com' },
              ].map(({ icon: Icon, label, url }) => (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded bg-white/5 hover:bg-gradient-to-br hover:from-purple-600 hover:to-cyan-600 flex items-center justify-center transition-all border border-white/10 hover:border-transparent group"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
    </footer>
  );
}