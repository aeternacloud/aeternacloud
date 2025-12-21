import { motion } from 'motion/react';
import { TrendingUp, Users, Award } from 'lucide-react';

export function CaseStudies() {
  const cases = [
    {
      title: 'E-Commerce Platform Transformation',
      client: 'TechRetail Inc.',
      industry: 'Retail',
      results: ['300% increase in sales', '50% faster checkout', '99.9% uptime'],
      challenge: 'Outdated platform struggling with high traffic',
      solution: 'Modern cloud-based e-commerce solution',
    },
    {
      title: 'Enterprise Cloud Migration',
      client: 'Global Finance Corp',
      industry: 'Finance',
      results: ['60% cost reduction', 'Zero downtime migration', 'Enhanced security'],
      challenge: 'Legacy infrastructure and compliance requirements',
      solution: 'AWS cloud migration with enterprise security',
    },
    {
      title: 'Mobile App Development',
      client: 'HealthTech Solutions',
      industry: 'Healthcare',
      results: ['1M+ downloads', '4.8 star rating', '40% user engagement'],
      challenge: 'Need for HIPAA-compliant mobile solution',
      solution: 'Cross-platform app with end-to-end encryption',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6">
              <span className="block text-gray-900">Case Studies</span>
              <span className="block bg-gradient-to-r from-[#0052CC] via-[#00C2FF] to-[#0052CC] bg-clip-text text-transparent">
                Real Results, Real Impact
              </span>
            </h1>
            <p className="text-gray-600">See how we've helped businesses achieve remarkable results.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="inline-block px-3 py-1 bg-[#0052CC]/10 text-[#0052CC] text-sm rounded-full mb-4">
                    {caseStudy.industry}
                  </div>
                  <h2 className="text-gray-900 mb-4">{caseStudy.title}</h2>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Challenge</div>
                      <p className="text-gray-700">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Solution</div>
                      <p className="text-gray-700">{caseStudy.solution}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-4">Key Results</div>
                  <div className="space-y-3">
                    {caseStudy.results.map((result, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-[#00FF94] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
