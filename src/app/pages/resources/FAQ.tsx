import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SEO } from '../../components/SEO';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          q: 'What services does Aeterna Cloud offer?',
          a: 'We offer comprehensive technology solutions including Software Development, Web Development, App Development, UI/UX Design, Cloud Solutions, SEO Services, and Digital Marketing.',
        },
        {
          q: 'How long does a typical project take?',
          a: 'Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while complex enterprise software can take 3-6 months or more. We provide detailed timelines during our discovery phase.',
        },
        {
          q: 'Do you work with startups or only established businesses?',
          a: 'We work with businesses of all sizes, from startups to Fortune 500 companies. We tailor our approach to match your specific needs and budget.',
        },
      ],
    },
    {
      category: 'Development',
      questions: [
        {
          q: 'What technologies do you use?',
          a: 'We use modern, industry-leading technologies including React, Node.js, Python, AWS, Azure, and more. We select the best tech stack for each project based on your specific requirements.',
        },
        {
          q: 'Do you provide ongoing support after launch?',
          a: 'Yes, we offer comprehensive post-launch support and maintenance packages to ensure your solution continues to perform optimally.',
        },
        {
          q: 'Can you integrate with our existing systems?',
          a: 'Absolutely. We specialize in seamless integrations with existing platforms, databases, and third-party services.',
        },
      ],
    },
    {
      category: 'Pricing & Process',
      questions: [
        {
          q: 'How do you structure your pricing?',
          a: 'We offer both fixed-price and time & materials pricing models, depending on the project scope. We provide transparent, detailed quotes with no hidden fees.',
        },
        {
          q: 'What is your development process?',
          a: 'We follow agile methodologies with regular sprints, demos, and client feedback loops to ensure alignment and transparency throughout the project.',
        },
        {
          q: 'Do you sign NDAs?',
          a: 'Yes, we\'re happy to sign NDAs to protect your intellectual property and confidential information.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="FAQ - Frequently Asked Questions | AeternaCloud"
        description="Find answers to common questions about our IT solutions, services, pricing, and support. Get the information you need to make informed decisions."
        url="https://aeternacloud.com/resources/faq"
      />
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6">
              <span className="block text-gray-900">Frequently Asked Questions</span>
              <span className="block bg-gradient-to-r from-[#0052CC] via-[#00C2FF] to-[#0052CC] bg-clip-text text-transparent">
                We're Here to Help
              </span>
            </h1>
            <p className="text-gray-600">Find answers to common questions about our services and process.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {faqs.map((category, catIndex) => (
            <div key={category.category}>
              <h2 className="text-gray-900 mb-6">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, qIndex) => {
                  const globalIndex = catIndex * 10 + qIndex;
                  return (
                    <motion.div
                      key={qIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-xl border border-gray-100 overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-gray-900 pr-4">{faq.q}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                            openIndex === globalIndex ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openIndex === globalIndex && (
                        <div className="px-6 pb-4 text-gray-600">{faq.a}</div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
