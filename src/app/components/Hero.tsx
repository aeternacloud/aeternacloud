import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    // CHANGE 1: Changed 'items-end' to 'items-center' to lift text to the middle/lower-middle
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectPosition: 'center',
            minWidth: '100%',
            minHeight: '100%',
          }}
        >
          <source src="/heropage.mp4" type="video/mp4" />
        </video>
        
        {/* Dark overlay to ensure text readability against video */}
        <div className="absolute inset-0 bg-black/30" /> 
        
        {/* Overlay to hide Veo watermark (bottom right corner) */}
        <div className="absolute bottom-0 right-0 w-48 h-24 bg-black/98 blur-md rounded-tl-2xl" />
        <div className="absolute bottom-0 right-0 w-40 h-20 bg-black/95" />
      </div>

      {/* Navigation Arrows */}
      <button className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white/80 hover:text-white transition-colors">
        <ChevronLeft className="w-8 h-8" /> {/* Increased size slightly */}
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white/80 hover:text-white transition-colors">
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-20 w-full">
        <div className="flex flex-col items-start max-w-4xl"> {/* Restricted width for text block */}
            <div className="home-hero-display">
              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="home-hero-display--intro mb-6"
              >
                {/* CHANGE 2: Added <br /> tags and adjusted leading/font-weight */}
                <h1 className="text-6xl sm:text-7xl md:text-8xl font-medium text-white leading-[1.1] tracking-tight mb-0">
                  We <br />
                  reimagine <br />
                  tomorrow
                </h1>
              </motion.div>

              {/* Subheadline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="home-hero-display--description mb-10"
              >
                <div className="text-lg sm:text-xl md:text-2xl text-white/90 font-light max-w-2xl">
                  Driving growth and molding the future through transformative change
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                <Link
                  to="/contact"
                  // CHANGE 3: Simplified button style to match image (clean white, black text)
                  className="inline-flex items-center justify-center px-10 py-4 bg-white text-black font-medium text-sm hover:bg-gray-100 transition-all duration-300 uppercase tracking-wider"
                >
                  GET IN TOUCH
                </Link>
              </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
}