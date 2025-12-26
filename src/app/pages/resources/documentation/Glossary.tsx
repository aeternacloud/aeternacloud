import { motion } from 'motion/react';
import { ChevronRight, BookOpen, Key, Globe, Webhook, Server, Code, Gauge, Shield, Database, Cloud, Lock, Zap, Users } from 'lucide-react';
import { SEO } from '@/app/components/SEO';

const Breadcrumb = () => (
  <nav className="flex items-center text-sm text-gray-500">
    <a href="/resources/documentation" className="hover:underline">Documentation</a>
    <ChevronRight className="w-4 h-4 mx-2" />
    <span className="font-medium text-gray-700">Glossary</span>
  </nav>
);

export function Glossary() {
  const terms = [
    { icon: Globe, term: 'Endpoint', definition: 'A specific URL where an API can be accessed by a client application.' },
    { icon: Webhook, term: 'Webhook', definition: 'An automated message sent from an app when something happens. They have a message (payload) and are sent to a unique URL.' },
    { icon: Server, term: 'Environment', definition: 'A set of computing resources and configurations where an application is deployed. Common examples are "development," "staging," and "production."' },
    { icon: Code, term: 'SDK (Software Development Kit)', definition: 'A collection of software development tools in one installable package. They facilitate the creation of applications by having a compiler, debugger, and sometimes a software framework.' },
    { icon: Gauge, term: 'Rate Limiting', definition: 'A strategy for limiting network traffic. It puts a cap on how often someone can repeat an action within a certain timeframe.' },
    { icon: Shield, term: 'Authentication', definition: 'The process of verifying the identity of a user or system. Common methods include API keys, OAuth, and JWT tokens.' },
    { icon: Database, term: 'Database', definition: 'A structured collection of data stored electronically. Our platform supports various databases including SQL and NoSQL options.' },
    { icon: Cloud, term: 'Cloud Computing', definition: 'The delivery of computing services over the internet. Includes infrastructure, platforms, and software as services.' },
    { icon: Lock, term: 'Encryption', definition: 'The process of converting data into a coded format to prevent unauthorized access. Essential for data security and privacy.' },
    { icon: Zap, term: 'Scalability', definition: 'The ability of a system to handle increased load by adding resources. Our platform is designed for horizontal and vertical scaling.' },
    { icon: Users, term: 'User Management', definition: 'The process of managing user accounts, permissions, and access controls within an application or system.' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Glossary of Terms | AeternaCloud Documentation"
        description="Comprehensive glossary of IT and technology terms used in AeternaCloud documentation. Understand key concepts, acronyms, and technical terminology."
        url="https://aeternacloud.com/resources/documentation/glossary"
      />
      <div className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
            <Breadcrumb />
            <h1 className="mt-4 mb-6">
              <span className="block text-gray-900">Glossary</span>
              <span className="block bg-gradient-to-r from-[#0052CC] via-[#00C2FF] to-[#0052CC] bg-clip-text text-transparent">
                Key terms and concepts
              </span>
            </h1>
            <p className="text-gray-600">
              This glossary defines common terms you'll encounter when using our platform and reading our documentation.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {terms.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
            >
              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-4">
                <item.icon className="w-8 h-8 mr-3 text-blue-600" />
                {item.term}
              </h2>
              <p className="text-gray-700 leading-relaxed">{item.definition}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
