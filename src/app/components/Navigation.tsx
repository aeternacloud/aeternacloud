import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const services = [
    { name: 'Software Development', path: '/services/software-development' },
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'App Development', path: '/services/app-development' },
    { name: 'UI/UX Design', path: '/services/ui-ux-design' },
    { name: 'Cloud Solutions', path: '/services/cloud-solutions' },
    { name: 'SEO Services', path: '/services/seo-services' },
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
  ];

  const company = [
    { name: 'About Us', path: '/company/about' },
    { name: 'Our Team', path: '/company/team' },
    { name: 'Careers', path: '/company/careers' },
    { name: 'Blog', path: '/company/blog' },
  ];

  const resources = [
    { name: 'Documentation', path: '/resources/documentation' },
    { name: 'Case Studies', path: '/resources/case-studies' },
    { name: 'Whitepapers', path: '/resources/whitepapers' },
    { name: 'FAQ', path: '/resources/faq' },
    { name: 'Support', path: '/resources/support' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-xl border-b border-white/10'
          : 'bg-black/50 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="font-bold text-white">NC</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full animate-pulse" />
            </div>
            <span className="text-xl text-white">NexusCore</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors flex items-center gap-1">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden shadow-2xl shadow-purple-500/10"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-4 py-3 text-gray-300 hover:bg-purple-600/20 hover:text-white transition-colors border-b border-white/5 last:border-0"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('company')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors flex items-center gap-1">
                Company
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'company' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden shadow-2xl shadow-cyan-500/10"
                  >
                    {company.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-3 text-gray-300 hover:bg-cyan-600/20 hover:text-white transition-colors border-b border-white/5 last:border-0"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors flex items-center gap-1">
                Resources
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'resources' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden shadow-2xl shadow-purple-500/10"
                  >
                    {resources.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-3 text-gray-300 hover:bg-purple-600/20 hover:text-white transition-colors border-b border-white/5 last:border-0"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/contact"
              className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10">Get Started</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {/* Services */}
              <div className="border-b border-white/10 pb-2">
                <div className="text-white mb-2">Services</div>
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block py-2 pl-4 text-sm text-gray-400 hover:text-purple-400"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              {/* Company */}
              <div className="border-b border-white/10 pb-2">
                <div className="text-white mb-2">Company</div>
                {company.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block py-2 pl-4 text-sm text-gray-400 hover:text-cyan-400"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Resources */}
              <div className="border-b border-white/10 pb-2">
                <div className="text-white mb-2">Resources</div>
                {resources.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block py-2 pl-4 text-sm text-gray-400 hover:text-purple-400"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <Link
                to="/contact"
                className="block py-2 text-gray-300 hover:text-white"
              >
                Contact
              </Link>

              <Link
                to="/contact"
                className="block mt-4 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl text-center"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
