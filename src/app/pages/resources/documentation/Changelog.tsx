import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

const Breadcrumb = () => (
  <nav className="flex items-center text-sm text-gray-500">
    <a href="/resources/documentation" className="hover:underline">Documentation</a>
    <ChevronRight className="w-4 h-4 mx-2" />
    <span className="font-medium text-gray-700">Changelog</span>
  </nav>
);

export function Changelog() {
  const releases = [
    {
      version: '3.0.0',
      date: 'December 20, 2023',
      changes: [
        { type: 'New', description: 'Introduced a new dashboard analytics view for real-time insights.' },
        { type: 'Improved', description: 'Enhanced API performance, reducing latency by an average of 20%.' },
        { type: 'Fixed', description: 'Resolved a bug causing intermittent webhook delivery failures.' },
      ],
    },
    {
      version: '2.5.1',
      date: 'November 15, 2023',
      changes: [
        { type: 'Security', description: 'Patched a cross-site scripting (XSS) vulnerability in the user profile page.' },
        { type: 'Fixed', description: 'Corrected an issue where large file uploads would time out.' },
      ],
    },
    {
      version: '2.5.0',
      date: 'October 28, 2023',
      changes: [
        { type: 'New', description: 'Added support for Single Sign-On (SSO) with Okta and Azure AD.' },
        { type: 'Improved', description: 'Redesigned the user interface for the project settings page.' },
      ],
    },
  ];

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'New': return 'bg-blue-100 text-blue-800';
      case 'Improved': return 'bg-green-100 text-green-800';
      case 'Fixed': return 'bg-yellow-100 text-yellow-800';
      case 'Security': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
            <Breadcrumb />
            <h1 className="mt-4 mb-6">
              <span className="block text-gray-900">Changelog</span>
              <span className="block bg-gradient-to-r from-[#0052CC] via-[#00C2FF] to-[#0052CC] bg-clip-text text-transparent">
                Stay up-to-date with our latest improvements
              </span>
            </h1>
            <p className="text-gray-600">
              We are constantly working to improve our platform. This changelog provides a summary of new features, enhancements, and bug fixes.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {releases.map((release) => (
            <div key={release.version} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{release.version}</h2>
                <span className="text-sm text-gray-500">{release.date}</span>
              </div>
              <ul className="space-y-4">
                {release.changes.map((change, index) => (
                  <li key={index} className="flex items-start">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getBadgeColor(change.type)} mr-3 flex-shrink-0`}>
                      {change.type}
                    </span>
                    <p className="text-gray-700">{change.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
