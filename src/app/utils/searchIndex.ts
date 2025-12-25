// src/app/utils/searchIndex.ts

interface SearchablePage {
  title: string;
  path: string;
  keywords?: string[];
}

export const pageIndex: SearchablePage[] = [
  { title: 'Home', path: '/' },
  { title: 'Contact', path: '/contact' },
  { title: 'About', path: '/company/about' },
  { title: 'Blog', path: '/company/blog' },
  { title: 'Careers', path: '/company/careers' },
  { title: 'Team', path: '/company/team' },
  { title: 'Privacy Policy', path: '/legal/privacy' },
  { title: 'Terms and Conditions', path: '/legal/terms' },
  { title: 'Case Studies', path: '/resources/case-studies' },
  { title: 'Documentation', path: '/resources/documentation' },
  { title: 'FAQ', path: '/resources/faq' },
  { title: 'Support', path: '/resources/support' },
  { title: 'API Reference', path: '/resources/documentation/api-reference' },
  { title: 'Best Practices', path: '/resources/documentation/best-practices' },
  { title: 'Changelog', path: '/resources/documentation/changelog' },
  { title: 'Getting Started', path: '/resources/documentation/getting-started' },
  { title: 'Glossary', path: '/resources/documentation/glossary' },
  { title: 'Security and Compliance', path: '/resources/documentation/security-and-compliance' },
  { title: 'Troubleshooting', path: '/resources/documentation/troubleshooting' },
  { title: 'App Development', path: '/services/app-development' },
  { title: 'Cloud Solutions', path: '/services/cloud-solutions' },
  { title: 'Digital Marketing', path: '/services/digital-marketing' },
  { title: 'SEO Services', path: '/services/seo-services' },
  { title: 'Software Development', path: '/services/software-development' },
  { title: 'UI/UX Design', path: '/services/ui-ux-design' },
  { title: 'Web Development', path: '/services/web-development' },
];
