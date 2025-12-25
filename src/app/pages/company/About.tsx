import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Target, Users, Award, TrendingUp, ArrowRight } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We stay ahead of the curve, embracing cutting-edge technologies to deliver future-proof solutions.',
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our success. We partner with you to understand and achieve your goals.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in everything we do.',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Growth',
      description: 'We believe in constant learning and improvement, both for ourselves and our clients.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '200+', label: 'Happy Clients' },
    { number: '50+', label: 'Team Members' },
    { number: '12+', label: 'Years Experience' },
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
            <h1 className="mb-6">
              <span className="block text-gray-900">About Aeterna Cloud</span>
              <span className="block bg-gradient-to-r from-[#0052CC] via-[#00C2FF] to-[#0052CC] bg-clip-text text-transparent">
                Building The Future
              </span>
            </h1>

            <p className="text-gray-600 mb-8">
              We're a team of passionate technologists, designers, and strategists dedicated to transforming businesses through innovative digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-[#0052CC] to-[#00C2FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-5xl mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100"
            >
              <h2 className="text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To empower businesses worldwide with transformative technology solutions that drive growth, efficiency, and innovation. We believe in creating digital experiences that make a real difference.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-[#0052CC] to-[#00C2FF] rounded-2xl text-white"
            >
              <h2 className="mb-4">Our Vision</h2>
              <p className="text-white/90">
                To be the world's most trusted technology partner, recognized for innovation, excellence, and our unwavering commitment to client success. We envision a future where technology seamlessly enhances every aspect of business.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#0052CC] to-[#00C2FF] rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-gray-900 mb-3">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-gray-900 mb-6">Ready to Work Together?</h2>
            <p className="text-gray-600 mb-8">
              Let's discuss how we can help transform your business with technology
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0052CC] to-[#00C2FF] text-white rounded-xl hover:shadow-xl transition-all"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
