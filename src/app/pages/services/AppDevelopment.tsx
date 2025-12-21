import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Smartphone, Tablet, Monitor, Zap, Users, Star, ArrowRight } from 'lucide-react';

export function AppDevelopment() {
  const features = [
    {
      icon: Smartphone,
      title: 'Native iOS & Android Apps',
      description: 'Platform-specific apps that leverage the full power of iOS and Android ecosystems.',
    },
    {
      icon: Monitor,
      title: 'Cross-Platform Development',
      description: 'Build once, deploy everywhere with React Native and Flutter frameworks.',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized apps that deliver smooth, responsive experiences on all devices.',
    },
    {
      icon: Users,
      title: 'User-Centric Design',
      description: 'Intuitive interfaces designed with your users in mind for maximum engagement.',
    },
    {
      icon: Star,
      title: 'App Store Optimization',
      description: 'Strategic ASO to increase visibility and downloads in app stores.',
    },
    {
      icon: Tablet,
      title: 'Tablet Optimization',
      description: 'Responsive layouts that adapt beautifully to tablets and larger screens.',
    },
  ];

  const technologies = [
    'React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin', 'Ionic',
    'Firebase', 'AWS Amplify', 'Redux', 'GraphQL'
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0052CC]/10 to-[#00C2FF]/10 rounded-full border border-[#0052CC]/20 mb-6">
              <Smartphone className="w-4 h-4 text-[#0052CC]" />
              <span className="text-sm text-[#0052CC]">Mobile-First Innovation</span>
            </div>

            <h1 className="mb-6">
              <span className="block text-gray-900">App Development</span>
              <span className="block bg-gradient-to-r from-[#0052CC] via-[#00C2FF] to-[#0052CC] bg-clip-text text-transparent">
                For Every Platform
              </span>
            </h1>

            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Transform your ideas into powerful mobile applications that users love. Native, cross-platform, or hybrid—we build them all.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0052CC] to-[#00C2FF] text-white rounded-xl hover:shadow-xl hover:shadow-[#0052CC]/30 transition-all"
            >
              <span>Start Your App</span>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-gray-900 mb-12">Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-6 py-3 bg-white rounded-full border border-gray-200 hover:border-[#0052CC] hover:shadow-lg transition-all"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
