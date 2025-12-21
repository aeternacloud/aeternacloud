import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

export function Blog() {
  const posts = [
    {
      title: 'The Future of AI in Software Development',
      excerpt: 'Exploring how artificial intelligence is transforming the way we build software.',
      author: 'Sarah Chen',
      date: 'Dec 15, 2024',
      category: 'AI & ML',
    },
    {
      title: '10 Cloud Migration Best Practices',
      excerpt: 'Essential strategies for a smooth transition to the cloud.',
      author: 'Michael Rodriguez',
      date: 'Dec 10, 2024',
      category: 'Cloud',
    },
    {
      title: 'Modern Web Design Trends for 2025',
      excerpt: 'What\'s next in web design? We explore the trends shaping the future.',
      author: 'Emily Johnson',
      date: 'Dec 5, 2024',
      category: 'Design',
    },
    {
      title: 'Building Scalable Microservices',
      excerpt: 'A comprehensive guide to architecting microservices that scale.',
      author: 'David Kim',
      date: 'Nov 28, 2024',
      category: 'Development',
    },
    {
      title: 'SEO Strategies That Actually Work in 2025',
      excerpt: 'Data-driven SEO tactics to boost your organic traffic.',
      author: 'Jessica Williams',
      date: 'Nov 20, 2024',
      category: 'Marketing',
    },
    {
      title: 'The Rise of Progressive Web Apps',
      excerpt: 'Why PWAs are becoming the go-to solution for modern web experiences.',
      author: 'Alex Thompson',
      date: 'Nov 15, 2024',
      category: 'Web Development',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="mb-6">
              <span className="block text-gray-900">Our Blog</span>
              <span className="block bg-gradient-to-r from-[#0052CC] via-[#00C2FF] to-[#0052CC] bg-clip-text text-transparent">
                Insights & Updates
              </span>
            </h1>
            <p className="text-gray-600">
              Stay updated with the latest trends, tips, and insights from our team of experts.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl border border-gray-100 hover:border-[#0052CC]/20 hover:shadow-xl transition-all overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-[#0052CC] to-[#00C2FF]" />
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-[#0052CC]/10 text-[#0052CC] text-sm rounded-full mb-4">
                    {post.category}
                  </div>
                  <h3 className="text-gray-900 mb-3 group-hover:text-[#0052CC] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Link
                    to="#"
                    className="inline-flex items-center gap-2 text-[#0052CC] hover:gap-3 transition-all"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
