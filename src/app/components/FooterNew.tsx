import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook } from 'lucide-react';

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
    <footer className="relative bg-gradient-to-br from-gray-900 via-[#0052CC]/10 to-gray-900 text-white">
      {/* Top decorative line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#00C2FF] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#0052CC] to-[#00C2FF] rounded-lg flex items-center justify-center">
                    <span className="font-bold text-white">NC</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#00FF94] rounded-full" />
                </div>
                <span className="font-bold text-xl">NexusCore</span>
              </Link>

              <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
                Empowering businesses with cutting-edge technology solutions. We transform ideas into powerful digital experiences.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="mailto:hello@nexuscore.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-[#00C2FF] transition-colors group"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">hello@nexuscore.com</span>
                </a>
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-3 text-gray-400 hover:text-[#00C2FF] transition-colors group"
                >
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </a>
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">San Francisco, CA 94107</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-[#00C2FF] transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#00C2FF] group-hover:w-3 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-[#00C2FF] transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#00C2FF] group-hover:w-3 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-[#00C2FF] transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#00C2FF] group-hover:w-3 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-white mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00C2FF] transition-colors"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-[#0052CC] to-[#00C2FF] text-white text-sm rounded-lg hover:shadow-lg hover:shadow-[#0052CC]/30 transition-all">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright & Legal Links */}
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
              <p>© 2025 NexusCore. All rights reserved.</p>
              <div className="flex gap-4">
                {legal.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="hover:text-[#00C2FF] transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
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
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-gradient-to-br hover:from-[#0052CC] hover:to-[#00C2FF] flex items-center justify-center transition-all border border-white/10 hover:border-transparent"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00C2FF]/50 to-transparent" />
    </footer>
  );
}
