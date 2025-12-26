import { motion } from 'motion/react';
import { SEO } from '../../components/SEO';

export function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Terms & Conditions | AeternaCloud"
        description="Read AeternaCloud's terms of service and conditions for using our IT solutions and services. Legal agreements and user responsibilities."
        url="https://aeternacloud.com/legal/terms"
      />
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6">
              <span className="block text-gray-900">Terms & Conditions</span>
            </h1>
            <p className="text-gray-600">Last updated: December 20, 2024</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div>
                <h2 className="text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  By accessing and using Aeterna Cloud's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these Terms & Conditions, please do not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-gray-900 mb-4">2. Services Description</h2>
                <p className="text-gray-600 leading-relaxed">
                  Aeterna Cloud provides software development, web development, mobile app development, UI/UX design, cloud solutions, SEO services, and digital marketing services. The specific scope of services will be defined in individual service agreements or statements of work.
                </p>
              </div>

              <div>
                <h2 className="text-gray-900 mb-4">3. User Responsibilities</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You agree to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not use our services for any unlawful purpose</li>
                  <li>Not interfere with or disrupt our services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-gray-900 mb-4">4. Intellectual Property</h2>
                <p className="text-gray-600 leading-relaxed">
                  All content, features, and functionality of our services are owned by Aeterna Cloud and are protected by international copyright, trademark, and other intellectual property laws. Work products delivered to clients will be governed by the specific terms outlined in individual service agreements.
                </p>
              </div>

              <div>
                <h2 className="text-gray-900 mb-4">5. Payment Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  Payment terms will be specified in individual service agreements. Generally, we require a deposit before beginning work, with the balance due upon completion or according to milestone schedules. Late payments may incur interest charges and may result in suspension of services.
                </p>
              </div>

              <div>
                <h2 className="text-gray-900 mb-4">6. Confidentiality</h2>
                <p className="text-gray-600 leading-relaxed">
                  We respect the confidentiality of our clients' information and will not disclose confidential information without permission, except as required by law. Both parties agree to maintain the confidentiality of proprietary information shared during the course of our business relationship.
                </p>
              </div>

              <div>
                <h2 className="text-gray-900 mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed">
                  To the fullest extent permitted by law, Aeterna Cloud shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
                </p>
              </div>

              <div>
                <h2 className="text-gray-900 mb-4">8. Termination</h2>
                <p className="text-gray-600 leading-relaxed">
                  Either party may terminate services according to the terms specified in individual service agreements. We reserve the right to terminate or suspend access to our services immediately, without prior notice, for any breach of these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-gray-900 mb-4">9. Changes to Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to modify these terms at any time. We will notify users of any material changes. Your continued use of our services after such modifications constitutes acceptance of the updated terms.
                </p>
              </div>

              <div>
                <h2 className="text-gray-900 mb-4">10. Contact Information</h2>
                <p className="text-gray-600 leading-relaxed">
                  For questions about these Terms & Conditions, please contact us at:
                  <br />
                  Email: legal@aeternacloud.com
                  <br />
                  Phone: +1 (555) 123-4567
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
