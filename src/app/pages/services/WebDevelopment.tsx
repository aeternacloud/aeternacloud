import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Globe, Layout, Smartphone, Rocket, ShieldCheck, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';

export function WebDevelopment() {
  const features = [
    {
      icon: Layout,
      title: 'Responsive Web Design',
      description: 'Beautiful, mobile-first websites that look perfect on any device or screen size.',
    },
    {
      icon: Rocket,
      title: 'Progressive Web Apps',
      description: 'Fast, reliable, and engaging web experiences that work offline and feel like native apps.',
    },
    {
      icon: Globe,
      title: 'E-Commerce Solutions',
      description: 'Full-featured online stores with secure payment gateways and inventory management.',
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Lightning-fast load times and optimized performance for better SEO and user experience.',
    },
    {
      icon: ShieldCheck,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with SSL, data encryption, and compliance standards.',
    },
    {
      icon: Smartphone,
      title: 'Cross-Platform Compatibility',
      description: 'Seamless functionality across all browsers and platforms for maximum reach.',
    },
  ];

  const technologies = [
    'React', 'Next.js', 'Vue.js', 'Angular', 'Tailwind CSS', 'TypeScript',
    'Node.js', 'Express', 'WordPress', 'Shopify', 'WebFlow', 'Strapi'
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-[0.02]">
          <div
            style={{
              backgroundImage: `linear-gradient(to right, #0052CC 1px, transparent 1px), linear-gradient(to bottom, #0052CC 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
            className="w-full h-full"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0052CC]/10 to-[#00C2FF]/10 rounded-full border border-[#0052CC]/20 mb-6">
              <Globe className="w-4 h-4 text-[#0052CC]" />
              <span className="text-sm text-[#0052CC]">Modern Web Solutions</span>
            </div>

            <h1 className="mb-6">
              <span className="block text-gray-900">Web Development</span>
              <span className="block bg-gradient-to-r from-[#0052CC] via-[#00C2FF] to-[#0052CC] bg-clip-text text-transparent">
                Built for Performance
              </span>
            </h1>

            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Create stunning, high-performing websites and web applications that captivate your audience and drive business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0052CC] to-[#00C2FF] text-white rounded-xl hover:shadow-xl hover:shadow-[#0052CC]/30 transition-all"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-gray-900 mb-4">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive web development services for businesses of all sizes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-[#0052CC]/20 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#0052CC] to-[#00C2FF] rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-gray-900 mb-4">Our Tech Stack</h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-white rounded-full border border-gray-200 hover:border-[#0052CC] hover:shadow-lg transition-all cursor-default"
              >
                <span className="text-gray-700">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
