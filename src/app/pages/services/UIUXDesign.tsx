import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Palette, Figma, Users, Eye, Sparkles, Target, ArrowRight } from 'lucide-react';

export function UIUXDesign() {
  const features = [
    {
      icon: Eye,
      title: 'User Research & Analysis',
      description: 'Deep understanding of your users through research, personas, and journey mapping.',
    },
    {
      icon: Figma,
      title: 'Interface Design',
      description: 'Beautiful, intuitive interfaces that delight users and drive conversions.',
    },
    {
      icon: Users,
      title: 'Usability Testing',
      description: 'Validate designs with real users to ensure optimal user experience.',
    },
    {
      icon: Palette,
      title: 'Design Systems',
      description: 'Scalable design systems that maintain consistency across all touchpoints.',
    },
    {
      icon: Target,
      title: 'Conversion Optimization',
      description: 'Data-driven design decisions to maximize engagement and conversions.',
    },
    {
      icon: Sparkles,
      title: 'Interactive Prototypes',
      description: 'High-fidelity prototypes to visualize and test experiences before development.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0052CC]/10 to-[#00C2FF]/10 rounded-full border border-[#0052CC]/20 mb-6">
              <Palette className="w-4 h-4 text-[#0052CC]" />
              <span className="text-sm text-[#0052CC]">Design Excellence</span>
            </div>

            <h1 className="mb-6">
              <span className="block text-gray-900">UI/UX Design</span>
              <span className="block bg-gradient-to-r from-[#0052CC] via-[#00C2FF] to-[#0052CC] bg-clip-text text-transparent">
                That Converts
              </span>
            </h1>

            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Create exceptional user experiences that combine aesthetics with functionality. Design that users love and businesses need.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0052CC] to-[#00C2FF] text-white rounded-xl hover:shadow-xl transition-all"
            >
              <span>Start Your Design</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
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
    </div>
  );
}
