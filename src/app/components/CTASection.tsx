import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="relative py-20 lg:py-24 px-6 bg-white overflow-hidden">
      {/* Subtle geometric patterns on sides */}
      <div className="absolute left-0 bottom-0 w-40 h-80 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 200 400" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M0 400 L0 300 L30 270 L60 300 L90 270 L120 300 L150 270 L180 300 L200 270 L200 400 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-gray-900"
          />
          <path
            d="M0 300 L0 200 L25 175 L50 200 L75 175 L100 200 L125 175 L150 200 L175 175 L200 200 L200 300 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-gray-900"
          />
          <path
            d="M0 200 L0 100 L20 80 L40 100 L60 80 L80 100 L100 80 L120 100 L140 80 L160 100 L180 80 L200 100 L200 200 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-gray-900"
          />
        </svg>
      </div>
      <div className="absolute right-0 bottom-0 w-40 h-80 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 200 400" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M0 400 L0 300 L30 270 L60 300 L90 270 L120 300 L150 270 L180 300 L200 270 L200 400 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-gray-900"
          />
          <path
            d="M0 300 L0 200 L25 175 L50 200 L75 175 L100 200 L125 175 L150 200 L175 175 L200 200 L200 300 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-gray-900"
          />
          <path
            d="M0 200 L0 100 L20 80 L40 100 L60 80 L80 100 L100 80 L120 100 L140 80 L160 100 L180 80 L200 100 L200 200 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-gray-900"
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-800 mb-6"
          >
            How can we help you?
          </motion.h2>

          {/* Sub-heading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-gray-600 mb-10 max-w-2xl mx-auto"
          >
            Are you ready to push boundaries and explore new frontiers of innovation?
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-10 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">LET'S WORK TOGETHER</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

