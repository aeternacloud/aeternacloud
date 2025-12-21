import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {

  return (
    <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Dark Studio Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0520] to-black" />
        
        {/* Abstract Geometric Shapes with Frosted Glass */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Central cluster of geometric shapes */}
          
          {/* Large Hexagon with frosted glass */}
          <motion.div
            animate={{
              rotateZ: [0, 360],
              rotateY: [0, 180, 360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute w-64 h-64 lg:w-96 lg:h-96 parallax-container"
            style={{
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 relative overflow-hidden">
              {/* Inner glowing sphere - Purple */}
              <div className="absolute top-1/4 left-1/3 w-20 h-20 bg-purple-500 rounded-full blur-2xl opacity-60" />
              {/* Rim light effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-transparent to-cyan-400/20" />
            </div>
          </motion.div>

          {/* Floating Cube - Top Right */}
          <motion.div
            animate={{
              rotateX: [0, 360],
              rotateZ: [0, 180],
              y: [-20, 20, -20],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-20 right-1/4 w-32 h-32 lg:w-48 lg:h-48 parallax-container"
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-white/8 via-white/4 to-transparent backdrop-blur-2xl border border-white/15 rounded-3xl relative overflow-hidden">
              {/* Inner glowing sphere - Electric Blue */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-cyan-400 rounded-full blur-xl opacity-70" />
              {/* Rim lighting */}
              <div className="absolute -top-2 -right-2 w-full h-full bg-gradient-to-bl from-cyan-300/30 to-transparent" />
            </div>
          </motion.div>

          {/* Triangular Prism - Left Side */}
          <motion.div
            animate={{
              rotateY: [0, 360],
              x: [-15, 15, -15],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute left-1/4 top-1/3 w-40 h-40 lg:w-56 lg:h-56 parallax-container"
            style={{
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            }}
          >
            <div className="w-full h-full bg-gradient-to-tr from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 relative overflow-hidden">
              {/* Inner glowing spheres */}
              <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-14 h-14 bg-purple-600 rounded-full blur-2xl opacity-60" />
              <div className="absolute top-1/3 left-1/3 w-10 h-10 bg-blue-500 rounded-full blur-xl opacity-50" />
              {/* Rim light */}
              <div className="absolute inset-0 bg-gradient-to-tl from-blue-400/20 to-transparent" />
            </div>
          </motion.div>

          {/* Octagon - Bottom Left */}
          <motion.div
            animate={{
              rotateZ: [0, -360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute bottom-32 left-1/3 w-36 h-36 lg:w-52 lg:h-52 parallax-container"
            style={{
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
            }}
          >
            <div className="w-full h-full bg-gradient-to-bl from-white/10 via-white/6 to-transparent backdrop-blur-xl border border-white/20 relative overflow-hidden">
              {/* Inner glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-fuchsia-500 rounded-full blur-2xl opacity-60" />
              {/* Rim effect */}
              <div className="absolute -bottom-2 -left-2 w-full h-full bg-gradient-to-tr from-purple-400/25 to-transparent" />
            </div>
          </motion.div>

          {/* Small Sphere - Top Left */}
          <motion.div
            animate={{
              y: [-30, 30, -30],
              x: [-10, 10, -10],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-40 left-1/4 w-24 h-24 lg:w-36 lg:h-36 parallax-container"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-white/12 via-white/6 to-transparent backdrop-blur-2xl border border-white/25 relative overflow-hidden">
              {/* Inner neon core */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-cyan-300 rounded-full blur-xl opacity-80" />
              {/* Highlight rim */}
              <div className="absolute -top-1 -right-1 w-1/2 h-1/2 bg-gradient-to-bl from-white/40 to-transparent rounded-full" />
            </div>
          </motion.div>

          {/* Diamond Shape - Right Side */}
          <motion.div
            animate={{
              rotateZ: [0, 180, 360],
              y: [-10, 10, -10],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute right-1/3 bottom-40 w-28 h-28 lg:w-40 lg:h-40 parallax-container"
            style={{
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            }}
          >
            <div className="w-full h-full bg-gradient-to-tr from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 relative overflow-hidden">
              {/* Electric blue glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-blue-400 rounded-full blur-xl opacity-70" />
              {/* Strong rim light */}
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-cyan-300/30 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Studio lighting effects - Rim lights */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-purple-600/10 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-cyan-500/10 to-transparent" />
        
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black/70" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-purple-500/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-200">Empowering Digital Transformation</span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">
              <span className="block text-white">Next-Generation</span>
              <span className="block bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                Technology Solutions
              </span>
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto px-4"
            >
              Transform your business with cutting-edge software development, cloud solutions, and digital innovation. We deliver enterprise-grade technology that drives growth.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 px-4"
          >
            <Link
              to="/contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/services/software-development"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-xl text-white rounded-xl border border-purple-500/30 hover:border-purple-500 hover:bg-white/10 transition-all duration-300"
            >
              <span>Explore Services</span>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto px-4"
          >
            <div className="p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
              <div className="text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                500+
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Projects</div>
            </div>
            <div className="p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
              <div className="text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-1">
                98%
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Satisfaction</div>
            </div>
            <div className="p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
              <div className="text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                24/7
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Support</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
