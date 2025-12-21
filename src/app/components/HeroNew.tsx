import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0052CC 1px, transparent 1px),
              linear-gradient(to bottom, #0052CC 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Floating Orbs */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-[#0052CC]/20 to-[#00C2FF]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-[#00FF94]/20 to-[#00C2FF]/20 rounded-full blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0052CC]/10 to-[#00C2FF]/10 rounded-full border border-[#0052CC]/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#0052CC]" />
              <span className="text-sm text-[#0052CC]">Empowering Digital Transformation</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              <span className="block text-gray-900">Next-Generation</span>
              <span className="block bg-gradient-to-r from-[#0052CC] via-[#00C2FF] to-[#0052CC] bg-clip-text text-transparent">
                Technology Solutions
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 mb-8 max-w-xl"
            >
              Transform your business with cutting-edge software development, cloud solutions, and digital innovation. We deliver enterprise-grade technology that drives growth and competitive advantage.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0052CC] to-[#00C2FF] text-white rounded-xl hover:shadow-xl hover:shadow-[#0052CC]/30 transition-all duration-300"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/services/software-development"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0052CC] rounded-xl border-2 border-[#0052CC]/20 hover:border-[#0052CC] hover:shadow-lg transition-all duration-300"
              >
                <span>Explore Services</span>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-8"
            >
              <div>
                <div className="text-[#0052CC] mb-1">500+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div>
                <div className="text-[#0052CC] mb-1">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-[#0052CC] mb-1">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Card 1 */}
              <motion.div
                whileHover={{ y: -5 }}
                className="col-span-2 p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-[#0052CC] to-[#00C2FF] rounded-xl">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">Lightning Fast Development</h3>
                    <p className="text-sm text-gray-600">
                      Accelerate time-to-market with our agile methodologies and modern tech stack.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 bg-gradient-to-br from-[#0052CC] to-[#00C2FF] rounded-2xl text-white"
              >
                <Shield className="w-8 h-8 mb-3" />
                <h3 className="mb-2">Enterprise Security</h3>
                <p className="text-sm text-white/90">
                  Bank-grade encryption and compliance.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#00FF94] to-[#00C2FF] rounded-xl mb-3 flex items-center justify-center">
                  <span className="text-white">99.9%</span>
                </div>
                <h3 className="text-gray-900 mb-2">Uptime SLA</h3>
                <p className="text-sm text-gray-600">
                  Mission-critical reliability.
                </p>
              </motion.div>

              {/* Background Accent */}
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-gradient-to-br from-[#00C2FF]/10 to-transparent rounded-full blur-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
