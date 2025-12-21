import Slider from 'react-slick';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'TechHorizon transformed our digital infrastructure with their exceptional software solutions. Their team delivered beyond our expectations.',
    author: 'Sarah Johnson',
    role: 'CTO',
    company: 'GlobalTech Inc.',
    logo: 'https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?w=100',
  },
  {
    quote: 'The SEO results speak for themselves. Our organic traffic increased by 300% within six months. Highly recommended!',
    author: 'Michael Chen',
    role: 'Marketing Director',
    company: 'Innovate Solutions',
    logo: 'https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?w=100',
  },
  {
    quote: 'Outstanding web development expertise. They created a stunning, high-performance platform that our customers love.',
    author: 'Emma Williams',
    role: 'CEO',
    company: 'FutureTech',
    logo: 'https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?w=100',
  },
  {
    quote: 'Professional, reliable, and innovative. TechHorizon is our go-to partner for all digital transformation projects.',
    author: 'David Rodriguez',
    role: 'VP of Engineering',
    company: 'Digital Dynamics',
    logo: 'https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?w=100',
  },
];

export function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-10 lg:py-12 px-6 bg-black relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0520] to-black" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Ambient Glow Effects */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-purple-600/10 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-cyan-500/10 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl mb-3 text-white">
            Trusted by Global Leaders
          </h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            See what our clients have to say about working with us
          </p>
        </motion.div>

        {/* Carousel */}
        <Slider {...settings} className="testimonials-slider">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ 
                  scale: 1.03,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-5 lg:p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 h-full relative overflow-hidden group"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Quote Icon */}
                <div className="mb-3 relative z-10">
                  <Quote className="w-8 h-8 text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text" style={{ WebkitTextFillColor: 'transparent' }} />
                  <div className="absolute inset-0">
                    <Quote className="w-8 h-8 text-cyan-400/50" />
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-white text-sm leading-relaxed mb-4 relative z-10">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-sm overflow-hidden border-2 border-purple-500/30 group-hover:border-cyan-500/50 transition-colors">
                    <img
                      src={testimonial.logo}
                      alt={testimonial.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium">{testimonial.author}</h4>
                    <p className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent text-xs">{testimonial.role}</p>
                    <p className="text-gray-400 text-xs">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>

      <style>{`
        .testimonials-slider .slick-dots {
          bottom: -40px;
        }
        .testimonials-slider .slick-dots li button:before {
          color: white;
          font-size: 12px;
          opacity: 0.3;
        }
        .testimonials-slider .slick-dots li.slick-active button:before {
          opacity: 1;
          color: #a855f7;
        }
      `}</style>
    </section>
  );
}
