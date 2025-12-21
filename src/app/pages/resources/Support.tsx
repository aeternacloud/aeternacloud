import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MessageCircle, Mail, Phone, Clock, ArrowRight } from 'lucide-react';

export function Support() {
  const channels = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      action: 'Start Chat',
      available: '24/7',
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      action: 'Send Email',
      available: 'Response within 24h',
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with a specialist',
      action: 'Call Now',
      available: 'Mon-Fri, 9AM-6PM',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6">
              <span className="block text-gray-900">Support Center</span>
              <span className="block bg-gradient-to-r from-[#0052CC] via-[#00C2FF] to-[#0052CC] bg-clip-text text-transparent">
                We're Here When You Need Us
              </span>
            </h1>
            <p className="text-gray-600">
              Get the help you need, when you need it. Our dedicated support team is ready to assist you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {channels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-[#0052CC]/20 hover:shadow-xl transition-all text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#0052CC] to-[#00C2FF] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-gray-900 mb-2">{channel.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{channel.description}</p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-6">
                  <Clock className="w-4 h-4" />
                  <span>{channel.available}</span>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0052CC] to-[#00C2FF] text-white rounded-lg hover:shadow-lg transition-all"
                >
                  <span>{channel.action}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-gray-900 mb-4">Enterprise Support Plans</h2>
            <p className="text-gray-600 mb-8">
              Need dedicated support? We offer customized support plans with SLAs, priority response times, and dedicated account managers.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0052CC] to-[#00C2FF] text-white rounded-xl hover:shadow-xl transition-all"
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
