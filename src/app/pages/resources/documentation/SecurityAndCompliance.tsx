import { motion } from 'motion/react';
import { ChevronRight, Lock, FileText, AlertTriangle } from 'lucide-react';
import { SEO } from '@/app/components/SEO';

const Breadcrumb = () => (
  <nav className="flex items-center text-sm text-gray-500">
    <a href="/resources/documentation" className="hover:underline">Documentation</a>
    <ChevronRight className="w-4 h-4 mx-2" />
    <span className="font-medium text-gray-700">Security & Compliance</span>
  </nav>
);

export function SecurityAndCompliance() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Security & Compliance | AeternaCloud Documentation"
        description="Learn about AeternaCloud's security measures, data protection policies, compliance standards, and best practices for secure IT operations."
        url="https://aeternacloud.com/resources/documentation/security-and-compliance"
      />
      <div className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
            <Breadcrumb />
            <h1 className="mt-4 mb-6">
              <span className="block text-gray-900">Security & Compliance</span>
              <span className="block bg-gradient-to-r from-[#0052CC] via-[#00C2FF] to-[#0052CC] bg-clip-text text-transparent">
                Committed to protecting your data
              </span>
            </h1>
            <p className="text-gray-600">
              We understand that security and compliance are critical for your business. This document provides an overview of our security posture and the standards we adhere to.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-4"><Lock className="w-8 h-8 mr-3 text-red-600" />Our Security Program</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our comprehensive security program is designed to protect our systems and your data from threats. Key pillars of our program include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Data Encryption:</strong> All data is encrypted at rest using AES-256 and in transit using TLS 1.2+.</li>
              <li><strong>Secure Software Development:</strong> We follow a secure software development lifecycle (SSDLC) that includes regular code reviews, dependency scanning, and static/dynamic application security testing.</li>
              <li><strong>Access Control:</strong> We enforce the principle of least privilege, ensuring that our employees and systems only have access to the data they need.</li>
              <li><strong>Incident Response:</strong> We have a documented incident response plan and a dedicated team ready to respond to security events 24/7.</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-4"><FileText className="w-8 h-8 mr-3 text-blue-600" />Compliance Certifications</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We are regularly audited by independent third parties to verify our security and compliance controls. Our current certifications include:
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-gray-900">SOC 2 Type II</h3>
                <p className="text-gray-600 text-sm">Report available upon request.</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-gray-900">ISO 27001</h3>
                <p className="text-gray-600 text-sm">Certified since 2022.</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-gray-900">GDPR</h3>
                <p className="text-gray-600 text-sm">Fully compliant.</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-gray-900">HIPAA</h3>
                <p className="text-gray-600 text-sm">BAA available for enterprise customers.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-4"><AlertTriangle className="w-8 h-8 mr-3 text-orange-600" />Reporting a Vulnerability</h2>
            <p className="text-gray-700 leading-relaxed">
              We take security seriously and value the contributions of the security research community. If you believe you have found a security vulnerability in our platform, please report it to us at <a href="mailto:security@example.com" className="text-[#0052CC] hover:underline">security@example.com</a>. We run a bug bounty program to reward researchers who help us keep our platform safe.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
