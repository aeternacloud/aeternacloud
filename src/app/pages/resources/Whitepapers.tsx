import { motion } from 'motion/react';
import { FileText, Download } from 'lucide-react';

export function Whitepapers() {
  const papers = [
    {
      title: 'The Complete Guide to Cloud Migration',
      description: 'A comprehensive guide covering planning, execution, and optimization of cloud migrations.',
      pages: 45,
      category: 'Cloud Computing',
    },
    {
      title: 'AI-Powered Software Development',
      description: 'Exploring how artificial intelligence is revolutionizing software development processes.',
      pages: 32,
      category: 'AI & Machine Learning',
    },
    {
      title: 'Cybersecurity Best Practices 2025',
      description: 'Essential security strategies for protecting your digital assets in today\'s threat landscape.',
      pages: 38,
      category: 'Security',
    },
    {
      title: 'Modern Web Architecture Patterns',
      description: 'An in-depth analysis of scalable, maintainable web application architectures.',
      pages: 52,
      category: 'Software Architecture',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6">
              <span className="block text-gray-900">Whitepapers</span>
              <span className="block bg-gradient-to-r from-[#0052CC] via-[#00C2FF] to-[#0052CC] bg-clip-text text-transparent">
                In-Depth Technical Insights
              </span>
            </h1>
            <p className="text-gray-600">Download our comprehensive whitepapers on technology trends and best practices.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {papers.map((paper, index) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-[#0052CC]/20 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0052CC] to-[#00C2FF] rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="inline-block px-3 py-1 bg-[#0052CC]/10 text-[#0052CC] text-xs rounded-full mb-2">
                      {paper.category}
                    </div>
                    <h3 className="text-gray-900 mb-2">{paper.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{paper.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{paper.pages} pages</span>
                      <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0052CC] to-[#00C2FF] text-white rounded-lg hover:shadow-lg transition-all text-sm">
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
