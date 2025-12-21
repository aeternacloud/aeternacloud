import { motion } from 'motion/react';
import { Linkedin, Twitter } from 'lucide-react';

export function Team() {
  const team = [
    { name: 'Sarah Chen', role: 'CEO & Founder', specialty: 'Strategic Vision' },
    { name: 'Michael Rodriguez', role: 'CTO', specialty: 'Technical Leadership' },
    { name: 'Emily Johnson', role: 'Head of Design', specialty: 'UX/UI Excellence' },
    { name: 'David Kim', role: 'Lead Developer', specialty: 'Full-Stack Development' },
    { name: 'Jessica Williams', role: 'Marketing Director', specialty: 'Brand Strategy' },
    { name: 'Alex Thompson', role: 'Cloud Architect', specialty: 'Infrastructure Design' },
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
              <span className="block text-gray-900">Meet Our Team</span>
              <span className="block bg-gradient-to-r from-[#0052CC] via-[#00C2FF] to-[#0052CC] bg-clip-text text-transparent">
                Experts Who Deliver
              </span>
            </h1>
            <p className="text-gray-600">
              Our diverse team of specialists brings together decades of experience in technology, design, and business strategy.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-white rounded-2xl border border-gray-100 hover:border-[#0052CC]/20 hover:shadow-xl transition-all"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-[#0052CC] to-[#00C2FF] rounded-full mb-6 mx-auto" />
                <h3 className="text-center text-gray-900 mb-2">{member.name}</h3>
                <p className="text-center text-sm text-[#0052CC] mb-2">{member.role}</p>
                <p className="text-center text-sm text-gray-600 mb-6">{member.specialty}</p>
                <div className="flex justify-center gap-3">
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-100 hover:bg-[#0052CC] hover:text-white rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-100 hover:bg-[#0052CC] hover:text-white rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
