import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Search, Globe, Download } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      
      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
    <motion.nav
      initial={{ y: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-transparent border-b border-gray-300/30'
          : 'bg-transparent border-b border-gray-300/20'
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <span className="text-lg font-medium text-white">Enterprise IT Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-3 py-2 text-white hover:text-gray-200 transition-colors flex items-center gap-1 text-sm font-medium">
                Services
                <ChevronDown className="w-3 h-3" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-black/98 rounded-lg border border-white/10 overflow-hidden shadow-2xl"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-4 py-3 text-gray-300 hover:bg-white/10 hover:text-white transition-colors border-b border-white/5 last:border-0 text-sm"
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
              <button className="px-3 py-2 text-white hover:text-gray-200 transition-colors flex items-center gap-1 text-sm font-medium">
                Company
                <ChevronDown className="w-3 h-3" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'company' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-black/98 rounded-lg border border-white/10 overflow-hidden shadow-2xl"
                  >
                    {company.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-3 text-gray-300 hover:bg-white/10 hover:text-white transition-colors border-b border-white/5 last:border-0 text-sm"
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
              <button className="px-3 py-2 text-white hover:text-gray-200 transition-colors flex items-center gap-1 text-sm font-medium">
                Resources
                <ChevronDown className="w-3 h-3" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'resources' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-black/98 rounded-lg border border-white/10 overflow-hidden shadow-2xl"
                  >
                    {resources.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-3 text-gray-300 hover:bg-white/10 hover:text-white transition-colors border-b border-white/5 last:border-0 text-sm"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact */}
            <Link
              to="/contact"
              className="px-3 py-2 text-white hover:text-gray-200 transition-colors text-sm font-medium"
            >
              Contact
            </Link>

          </div>

          {/* Right Icons */}
          <div className="hidden lg:flex items-center gap-1">
            <div className="h-5 w-px bg-white/30 mx-2" />
            <button className="p-2 text-white hover:text-white/80 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <div className="h-5 w-px bg-white/30" />
            <button className="p-2 text-white hover:text-white/80 transition-colors flex items-center gap-1">
              <Globe className="w-5 h-5" />
              <ChevronDown className="w-3 h-3" />
            </button>
            <div className="h-5 w-px bg-white/30" />
            <button className="p-2 text-white hover:text-white/80 transition-colors">
              <Download className="w-5 h-5" />
            </button>
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
            className="lg:hidden bg-black/95 border-t border-gray-300/20"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {/* Services */}
              <div className="border-b border-white/10 pb-2">
                <div className="text-white mb-2 text-sm font-medium">Services</div>
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block py-2 pl-4 text-sm text-gray-400 hover:text-white"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              {/* Company */}
              <div className="border-b border-white/10 pb-2">
                <div className="text-white mb-2 text-sm font-medium">Company</div>
                {company.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block py-2 pl-4 text-sm text-gray-400 hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Resources */}
              <div className="border-b border-white/10 pb-2">
                <div className="text-white mb-2 text-sm font-medium">Resources</div>
                {resources.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block py-2 pl-4 text-sm text-gray-400 hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <Link
                to="/contact"
                className="block py-2 text-gray-300 hover:text-white text-sm"
              >
                Contact
              </Link>

              {/* Icons */}
              <div className="flex items-center gap-4 pt-2">
                <button className="p-2 text-white">
                  <Search className="w-5 h-5" />
                </button>
                <button className="p-2 text-white">
                  <Globe className="w-5 h-5" />
                </button>
                <button className="p-2 text-white">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
