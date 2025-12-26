import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Cloud, Server, Shield, Database, Workflow, Lock, ArrowRight } from 'lucide-react';
import { SEO } from '../../components/SEO';

export function CloudSolutions() {
  const features = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration to AWS, Azure, or Google Cloud with zero downtime.',
    },
    {
      icon: Server,
      title: 'Infrastructure as Code',
      description: 'Automated, scalable infrastructure using Terraform and CloudFormation.',
    },
    {
      icon: Shield,
      title: 'Cloud Security',
      description: 'Enterprise-grade security with compliance and best practices built-in.',
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Managed databases optimized for performance, reliability, and cost.',
    },
    {
      icon: Workflow,
      title: 'DevOps & CI/CD',
      description: 'Automated pipelines for faster, more reliable deployments.',
    },
    {
      icon: Lock,
      title: 'Disaster Recovery',
      description: 'Robust backup and recovery solutions to protect your critical data.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Cloud Solutions & Migration Services | AeternaCloud"
        description="Expert cloud solutions including AWS, Azure, and Google Cloud migration, infrastructure management, and cloud-native development services."
        url="https://aeternacloud.com/services/cloud-solutions"
      />
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0052CC]/10 to-[#00C2FF]/10 rounded-full border border-[#0052CC]/20 mb-6">
              <Cloud className="w-4 h-4 text-[#0052CC]" />
              <span className="text-sm text-[#0052CC]">Scalable Infrastructure</span>
            </div>

            <h1 className="mb-6">
              <span className="block text-gray-900">Cloud Solutions</span>
              <span className="block bg-gradient-to-r from-[#0052CC] via-[#00C2FF] to-[#0052CC] bg-clip-text text-transparent">
                For Modern Business
              </span>
            </h1>

            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Transform your infrastructure with cloud solutions that scale with your business. Secure, reliable, and cost-effective.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0052CC] to-[#00C2FF] text-white rounded-xl hover:shadow-xl transition-all"
            >
              <span>Get Started</span>
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
