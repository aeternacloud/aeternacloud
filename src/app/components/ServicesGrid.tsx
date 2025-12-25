import { motion } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Globe, Smartphone, Palette, Cloud } from 'lucide-react';

const services = [
  {
    title: 'Software Development',
    description: 'Tailored software solutions built with cutting-edge technologies to meet your unique business requirements. We deliver scalable, maintainable, and high-performance applications that drive digital transformation.',
    path: '/services/software-development',
    icon: Code2,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Web Development',
    description: 'Stunning, responsive websites and web applications that deliver exceptional user experiences across all devices. We create modern, fast, and SEO-optimized web solutions that engage and convert.',
    path: '/services/web-development',
    icon: Globe,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'App Development',
    description: 'Native and cross-platform mobile applications that engage users and drive business growth. From iOS to Android, we build intuitive apps that deliver seamless experiences and measurable results.',
    path: '/services/app-development',
    icon: Smartphone,
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces designed to delight users and maximize conversions. We combine user research, creative design, and data-driven insights to create experiences that users love.',
    path: '/services/ui-ux-design',
    icon: Palette,
    gradient: 'from-pink-500 to-red-500',
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services for modern, efficient operations. We help you leverage the power of cloud computing to reduce costs, improve agility, and accelerate innovation.',
    path: '/services/cloud-solutions',
    icon: Cloud,
    gradient: 'from-indigo-500 to-blue-500',
  },
];

export function ServicesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-32 px-6 lg:px-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <motion.span 
              className="bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              Our Services
            </motion.span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Driving innovation and improving lives with AI-driven intelligence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group"
              >
                <Link to={service.path} className="block h-full">
                  <motion.div
                    className="relative h-full p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    {/* Gradient Background on Hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />

                    {/* Icon */}
                    <motion.div
                      className={`relative mb-6 w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-gray-700" />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <h3 className="relative text-2xl font-semibold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="relative text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Learn More Link */}
                    <div className="relative flex items-center gap-2 text-purple-600 font-semibold group/link">
                      <span>Learn More</span>
                      <motion.div
                        animate={{
                          x: hoveredIndex === index ? 4 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </div>

                    {/* Hover Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    />
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}