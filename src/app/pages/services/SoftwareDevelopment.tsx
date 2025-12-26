import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Code, Cpu, Database, GitBranch, Layers, Zap, ArrowRight, CheckCircle2, Target, FileText, Rocket } from 'lucide-react';
import { SEO } from '../../components/SEO';

export function SoftwareDevelopment() {
  const features = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed specifically for your business requirements.',
    },
    {
      icon: Layers,
      title: 'Full-Stack Development',
      description: 'End-to-end development services covering frontend, backend, and database layers.',
    },
    {
      icon: Cpu,
      title: 'Microservices Architecture',
      description: 'Scalable and maintainable applications built with modern microservices patterns.',
    },
    {
      icon: GitBranch,
      title: 'CI/CD Integration',
      description: 'Automated deployment pipelines for faster, more reliable software delivery.',
    },
    {
      icon: Database,
      title: 'Database Design & Optimization',
      description: 'Robust data architecture designed for performance, scalability, and security.',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Lightning-fast applications optimized for speed, efficiency, and user experience.',
    },
  ];

  const technologies = [
    'React', 'Node.js', 'Python', 'Java', 'TypeScript', 'Go', 'PostgreSQL', 'MongoDB', 
    'AWS', 'Docker', 'Kubernetes', 'GraphQL'
  ];

  const benefits = [
    'Agile development methodology',
    'Dedicated development team',
    'Regular progress updates',
    'Quality assurance & testing',
    'Post-launch support & maintenance',
    'Scalable & future-proof solutions',
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Software Development Services | AeternaCloud"
        description="Custom software development solutions including web apps, mobile apps, and enterprise software. Scalable, secure, and tailored to your business needs."
        url="https://aeternacloud.com/services/software-development"
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-[0.02]">
          <div
            style={{
              backgroundImage: `
                linear-gradient(to right, #0052CC 1px, transparent 1px),
                linear-gradient(to bottom, #0052CC 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
            className="w-full h-full"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0052CC]/10 to-[#00C2FF]/10 rounded-full border border-[#0052CC]/20 mb-6">
              <Code className="w-4 h-4 text-[#0052CC]" />
              <span className="text-sm text-[#0052CC]">Enterprise-Grade Solutions</span>
            </div>

            <h1 className="mb-6">
              <span className="block text-gray-900">Software Development</span>
              <span className="block bg-gradient-to-r from-[#0052CC] via-[#00C2FF] to-[#0052CC] bg-clip-text text-transparent">
                That Drives Innovation
              </span>
            </h1>

            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Build powerful, scalable, and secure software solutions with our expert development team. 
              From concept to deployment, we deliver excellence at every stage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0052CC] to-[#00C2FF] text-white rounded-xl hover:shadow-xl hover:shadow-[#0052CC]/30 transition-all"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/resources/case-studies"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0052CC] rounded-xl border-2 border-[#0052CC]/20 hover:border-[#0052CC] transition-all"
              >
                <span>View Case Studies</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-gray-900 mb-4">Our Capabilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive software development services tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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

      {/* Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-gray-900 mb-4">Technologies We Master</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Leveraging cutting-edge technologies to build future-proof solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-white rounded-full border border-gray-200 hover:border-[#0052CC] hover:shadow-lg transition-all cursor-default"
              >
                <span className="text-gray-700">{tech}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-gray-900 mb-6">Why Choose Aeterna Cloud?</h2>
              <p className="text-gray-600 mb-8">
                Partner with a team that's committed to your success. We combine technical expertise with business acumen to deliver software that truly makes a difference.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#00FF94] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative p-8 bg-gradient-to-br from-[#0052CC] to-[#00C2FF] rounded-2xl text-white">
                <h3 className="mb-6">Ready to Get Started?</h3>
                <p className="mb-8 text-white/90">
                  Let's discuss your project and explore how we can help you achieve your goals.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Discovery Call</div>
                      <div className="text-sm text-white/80">Free consultation</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Custom Proposal</div>
                      <div className="text-sm text-white/80">Tailored to your needs</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Start Building</div>
                      <div className="text-sm text-white/80">Launch in weeks</div>
                    </div>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="block w-full py-4 bg-white text-[#0052CC] text-center rounded-xl hover:shadow-2xl transition-all"
                >
                  Schedule a Consultation
                </Link>
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-[#00C2FF]/20 to-transparent rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
