import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Briefcase, Heart, TrendingUp, Users, ArrowRight } from 'lucide-react';

export function Careers() {
  const positions = [
    { title: 'Senior Full-Stack Developer', department: 'Engineering', location: 'Remote', type: 'Full-time' },
    { title: 'UI/UX Designer', department: 'Design', location: 'San Francisco, CA', type: 'Full-time' },
    { title: 'DevOps Engineer', department: 'Engineering', location: 'Remote', type: 'Full-time' },
    { title: 'Digital Marketing Manager', department: 'Marketing', location: 'New York, NY', type: 'Full-time' },
    { title: 'Product Manager', department: 'Product', location: 'Remote', type: 'Full-time' },
  ];

  const benefits = [
    { icon: Heart, title: 'Health & Wellness', description: 'Comprehensive health insurance and wellness programs' },
    { icon: TrendingUp, title: 'Career Growth', description: 'Continuous learning and advancement opportunities' },
    { icon: Users, title: 'Amazing Team', description: 'Work with talented people who inspire you' },
    { icon: Briefcase, title: 'Flexibility', description: 'Remote work options and flexible schedules' },
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
              <span className="block text-gray-900">Join Our Team</span>
              <span className="block bg-gradient-to-r from-[#0052CC] via-[#00C2FF] to-[#0052CC] bg-clip-text text-transparent">
                Build The Future With Us
              </span>
            </h1>
            <p className="text-gray-600">
              We're always looking for talented individuals who are passionate about technology and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-gray-900 mb-12">Why Work With Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-2xl text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#0052CC] to-[#00C2FF] rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-gray-900 mb-12">Open Positions</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {positions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-xl border border-gray-100 hover:border-[#0052CC]/20 hover:shadow-lg transition-all flex items-center justify-between"
              >
                <div>
                  <h3 className="text-gray-900 mb-2">{position.title}</h3>
                  <div className="flex gap-4 text-sm text-gray-600">
                    <span>{position.department}</span>
                    <span>•</span>
                    <span>{position.location}</span>
                    <span>•</span>
                    <span>{position.type}</span>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="px-6 py-2 bg-gradient-to-r from-[#0052CC] to-[#00C2FF] text-white rounded-lg hover:shadow-lg transition-all"
                >
                  Apply Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
