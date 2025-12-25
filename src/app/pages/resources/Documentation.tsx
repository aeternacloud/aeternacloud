import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Book, Code, CheckSquare, Link as LinkIcon, Library, Wrench, FileClock, ShieldCheck, BookText } from 'lucide-react';

export function Documentation() {
  const docs = [
    { icon: Book, title: 'Getting Started', description: 'Learn the basics and get up to speed quickly', path: '/resources/documentation/getting-started' },
    { icon: Code, title: 'API Reference', description: 'Comprehensive API documentation and examples', path: '/resources/documentation/api-reference' },
    { icon: CheckSquare, title: 'Best Practices', description: 'Optimize performance, security, and scalability.', path: '/resources/documentation/best-practices' },
    { icon: Wrench, title: 'Troubleshooting', description: 'Quickly resolve common issues and errors.', path: '/resources/documentation/troubleshooting' },
    { icon: FileClock, title: 'Changelog', description: 'Stay updated on the latest features and fixes.', path: '/resources/documentation/changelog' },
    { icon: ShieldCheck, title: 'Security & Compliance', description: 'Learn about our security and data policies.', path: '/resources/documentation/security-and-compliance' },
    { icon: BookText, title: 'Glossary', description: 'Understand key terms and concepts.', path: '/resources/documentation/glossary' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6">
              <span className="block text-gray-900">Documentation</span>
              <span className="block bg-gradient-to-r from-[#0052CC] via-[#00C2FF] to-[#0052CC] bg-clip-text text-transparent">
                Everything You Need to Know
              </span>
            </h1>
            <p className="text-gray-600">Comprehensive resources to help you make the most of our solutions.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {docs.map((doc, index) => (
              <Link key={doc.title} to={doc.path}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-[#0052CC]/20 hover:shadow-xl transition-all cursor-pointer h-full block"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0052CC] to-[#00C2FF] rounded-xl flex items-center justify-center mb-4">
                    <doc.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-gray-900 mb-2">{doc.title}</h3>
                  <p className="text-sm text-gray-600">{doc.description}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
