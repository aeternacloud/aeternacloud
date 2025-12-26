import { motion } from 'motion/react';
import { ChevronRight, Key, Settings, HelpCircle } from 'lucide-react';
import { SEO } from '@/app/components/SEO';

const Breadcrumb = () => (
  <nav className="flex items-center text-sm text-gray-500">
    <a href="/resources/documentation" className="hover:underline">Documentation</a>
    <ChevronRight className="w-4 h-4 mx-2" />
    <span className="font-medium text-gray-700">Troubleshooting</span>
  </nav>
);

export function Troubleshooting() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Troubleshooting Guide | AeternaCloud Documentation"
        description="Common issues and solutions for AeternaCloud services. Find quick fixes for configuration problems, connectivity issues, and error resolution."
        url="https://aeternacloud.com/resources/documentation/troubleshooting"
      />
      <div className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
            <Breadcrumb />
            <h1 className="mt-4 mb-6">
              <span className="block text-gray-900">Troubleshooting</span>
              <span className="block bg-gradient-to-r from-[#0052CC] via-[#00C2FF] to-[#0052CC] bg-clip-text text-transparent">
                Get help with common issues
              </span>
            </h1>
            <p className="text-gray-600">
              Encountering an issue? This guide provides solutions to common problems and answers to frequently asked questions. If you can't find a solution here, please don't hesitate to <a href="/support" className="text-[#0052CC] hover:underline">contact support</a>.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6"><Key className="w-8 h-8 mr-3 text-blue-600" />API & Authentication</h2>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Issue: Invalid API Key (401 Unauthorized)</h4>
                <p className="text-gray-700 mb-3">
                  If you are receiving a `401 Unauthorized` error, it likely means your API key is incorrect, expired, or missing.
                </p>
                <ol className="list-decimal list-inside text-gray-700 space-y-1">
                  <li>Verify that you are including the API key in the `Authorization` header as a Bearer token.</li>
                  <li>Check your dashboard to ensure the API key is active and has the correct permissions.</li>
                  <li>Regenerate the API key if you suspect it has been compromised.</li>
                </ol>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Issue: Rate Limit Exceeded (429 Too Many Requests)</h4>
                <p className="text-gray-700 mb-3">
                  A `429` error indicates that you have exceeded the number of allowed requests for your account tier.
                </p>
                <ol className="list-decimal list-inside text-gray-700 space-y-1">
                  <li>Review your code to ensure you are not making an excessive number of requests in a short period.</li>
                  <li>Implement a retry mechanism with exponential backoff.</li>
                  <li>Consider upgrading your plan for higher rate limits if your usage demands it.</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6"><Settings className="w-8 h-8 mr-3 text-purple-600" />Installation & Setup</h2>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Issue: "Command not found" after installing CLI</h4>
              <p className="text-gray-700 mb-3">
                This error typically means that the directory where the CLI was installed is not in your system's `PATH`.
              </p>
              <ol className="list-decimal list-inside text-gray-700 space-y-1">
                <li>Ensure that the `bin` directory of your package manager (e.g., `~/.npm-global/bin`) is in your shell's `PATH` environment variable.</li>
                <li>Restart your terminal session for the `PATH` changes to take effect.</li>
                <li>Try reinstalling the CLI with global administrator privileges (e.g., `sudo npm install -g @our-solution/cli`).</li>
              </ol>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-4"><HelpCircle className="w-8 h-8 mr-3 text-green-600" />Contacting Support</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If your issue is not listed here, please reach out to our support team. To help us resolve your issue as quickly as possible, please include the following information in your support request:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>A detailed description of the problem you're experiencing.</li>
              <li>The steps to reproduce the issue.</li>
              <li>Any relevant error messages, logs, or screenshots.</li>
              <li>The version of our SDK or CLI you are using.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
