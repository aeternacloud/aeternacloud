import { motion } from 'motion/react';
import { ChevronRight, ShieldCheck, TrendingUp, Code } from 'lucide-react';
import { SEO } from '@/app/components/SEO';

const Breadcrumb = () => (
  <nav className="flex items-center text-sm text-gray-500">
    <a href="/resources/documentation" className="hover:underline">Documentation</a>
    <ChevronRight className="w-4 h-4 mx-2" />
    <span className="font-medium text-gray-700">Best Practices</span>
  </nav>
);

export function BestPractices() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Best Practices Guide | AeternaCloud Documentation"
        description="Learn best practices for security, performance, scalability, and development with AeternaCloud services and solutions."
        url="https://aeternacloud.com/resources/documentation/best-practices"
      />
      <div className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
            <Breadcrumb />
            <h1 className="mt-4 mb-6">
              <span className="block text-gray-900">Best Practices</span>
              <span className="block bg-gradient-to-r from-[#0052CC] via-[#00C2FF] to-[#0052CC] bg-clip-text text-transparent">
                Build for excellence
              </span>
            </h1>
            <p className="text-gray-600">
              Follow these best practices to ensure your applications are secure, scalable, and performant. These recommendations are based on insights from our engineering team and successful customer implementations.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-4"><ShieldCheck className="w-8 h-8 mr-3 text-red-600" />Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Security is paramount. Always handle sensitive data with care and follow the principle of least privilege.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Manage API Keys Securely:</strong> Never expose API keys on the client-side. Store them in a secure vault or as environment variables on your server.</li>
              <li><strong>Implement Role-Based Access Control (RBAC):</strong> Grant users and services only the permissions they absolutely need to perform their tasks.</li>
              <li><strong>Regularly Audit Dependencies:</strong> Keep your third-party libraries and dependencies up-to-date to patch potential vulnerabilities.</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-4"><TrendingUp className="w-8 h-8 mr-3 text-blue-600" />Performance & Scalability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Design your applications to handle growth and deliver a fast, responsive user experience.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Use Caching Strategies:</strong> Implement caching for frequently accessed data to reduce latency and database load.</li>
              <li><strong>Optimize Asset Delivery:</strong> Compress images and use a Content Delivery Network (CDN) to serve static assets quickly to users worldwide.</li>
              <li><strong>Design Asynchronous Workflows:</strong> For long-running tasks, use background jobs or message queues to avoid blocking the main application thread and improve responsiveness.</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-4"><Code className="w-8 h-8 mr-3 text-green-600" />API Usage</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Interact with our API efficiently and responsibly to ensure a stable and reliable integration.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Handle Rate Limits Gracefully:</strong> Implement exponential backoff or other retry mechanisms when you encounter rate limit errors.</li>
              <li><strong>Use Webhooks for Real-time Updates:</strong> Instead of polling for changes, use webhooks to receive notifications when events occur.</li>
              <li><strong>Paginate Large Datasets:</strong> When retrieving large lists of resources, use the `limit` and `offset` parameters to paginate through the results.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
