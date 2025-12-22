import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook, Send } from 'lucide-react';

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
    { name: 'Our Team', path: '/company/team' },
    { name: 'Careers', path: '/company/careers' },
    { name: 'Blog', path: '/company/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const resources = [
    { name: 'Documentation', path: '/resources/documentation' },
    { name: 'Case Studies', path: '/resources/case-studies' },
    { name: 'Whitepapers', path: '/resources/whitepapers' },
    { name: 'FAQ', path: '/resources/faq' },
    { name: 'Support', path: '/resources/support' },
  ];

  const legal = [
    { name: 'Privacy Policy', path: '/legal/privacy' },
    { name: 'Terms & Conditions', path: '/legal/terms' },
  ];

  return (
    // COMPACT SIZE: Used py-10 to match the smaller size you liked
    <footer className="relative bg-black py-10 border-t border-white/10 overflow-hidden">
      
      {/* Gradient top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* COMPACT GRID: Tight gap (gap-8) and margin (mb-10) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-10">
          
          {/* Brand Column (Original Content) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2 group">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="font-bold text-white text-xs">NC</span>
                </div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full animate-pulse" />
              </div>
              <span className="text-lg text-white font-medium">NexusCore</span>
            </Link>

            <p className="text-gray-400 leading-relaxed text-xs max-w-sm">
              Empowering businesses with cutting-edge technology solutions. We transform ideas into powerful digital experiences.
            </p>

            {/* Contact Info (Original Content) */}
            <div className="space-y-2 pt-2">
              <a href="mailto:hello@nexuscore.com" className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors group">
                <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-purple-500/50">
                  <Mail className="w-3 h-3" />
                </div>
                <span className="text-xs">hello@nexuscore.com</span>
              </a>
              <a href="tel:+15551234567" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors group">
                <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/50">
                  <Phone className="w-3 h-3" />
                </div>
                <span className="text-xs">+1 (555) 123-4567</span>
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center border border-white/10">
                  <MapPin className="w-3 h-3" />
                </div>
                <span className="text-xs">San Francisco, CA 94107</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2">
            <h3 className="text-white mb-4 text-xs font-medium uppercase tracking-wider relative inline-block">
              Services
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500" />
            </h3>
            <ul className="space-y-2">
              {services.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-xs text-gray-400 hover:text-purple-400 transition-colors inline-flex items-center gap-2 group">
                    <span className="w-0 h-px bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-3 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h3 className="text-white mb-4 text-xs font-medium uppercase tracking-wider relative inline-block">
              Company
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500" />
            </h3>
            <ul className="space-y-2">
              {company.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-xs text-gray-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-2 group">
                    <span className="w-0 h-px bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-3 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="lg:col-span-2">
            <h3 className="text-white mb-4 text-xs font-medium uppercase tracking-wider relative inline-block">
              Resources
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500" />
            </h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-xs text-gray-400 hover:text-purple-400 transition-colors inline-flex items-center gap-2 group">
                    <span className="w-0 h-px bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-3 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-2">
            <h3 className="text-white mb-4 text-xs font-medium uppercase tracking-wider relative inline-block">
              Stay Updated
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500" />
            </h3>
            <p className="text-xs text-gray-400 mb-3 leading-relaxed">
              Get the latest updates on technology trends.
            </p>
            <div className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-xs text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all pr-8"
                />
                <button className="absolute right-1 top-1/2 -translate-y-1/2 w-6 h-6 rounded bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/50 transition-all group">
                  <Send className="w-3 h-3 text-white group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
              <p className="text-[10px] text-gray-500">
                We respect your privacy.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar (Original Layout) */}
        <div className="pt-4 border-t border-white/10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Copyright & Legal Links */}
            <div className="flex flex-col sm:flex-row items-center gap-3 text-xs text-gray-400">
              <p>© 2025 NexusCore. All rights reserved.</p>
              <div className="flex gap-1">
                <span className="hidden sm:inline text-gray-600">|</span>
                <div className="flex gap-4">
                  {legal.map((link) => (
                    <Link key={link.path} to={link.path} className="hover:text-purple-400 transition-colors">
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Links (Restored from Original Code) */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500 mr-1">Follow us:</span>
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
                  className="w-8 h-8 rounded bg-white/5 hover:bg-gradient-to-br hover:from-purple-600 hover:to-cyan-600 flex items-center justify-center transition-all border border-white/10 hover:border-transparent group"
                  aria-label={label}
                >
                  <Icon className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" />
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