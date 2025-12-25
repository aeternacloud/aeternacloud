import { motion } from 'motion/react';
import { ChevronRight, Book, CheckCircle, Settings, Rocket, ArrowRight, Zap, Code } from 'lucide-react';

const Breadcrumb = () => (
  <nav className="flex items-center text-sm text-gray-500">
    <a href="/resources/documentation" className="hover:underline">Documentation</a>
    <ChevronRight className="w-4 h-4 mx-2" />
    <span className="font-medium text-gray-700">Getting Started</span>
  </nav>
);

export function GettingStarted() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
            <Breadcrumb />
            <h1 className="mt-4 mb-6">
              <span className="block text-gray-900">Getting Started</span>
              <span className="block bg-gradient-to-r from-[#0052CC] via-[#00C2FF] to-[#0052CC] bg-clip-text text-transparent">
                Your guide to launching our solutions
              </span>
            </h1>
            <p className="text-gray-600">
              This guide will walk you through the essential steps to get our solutions up and running in your environment. From initial setup to full deployment, we've got you covered.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-4"><Book className="w-8 h-8 mr-3 text-blue-600" />1. Introduction to Our Platform</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to the future of enterprise solutions. Our platform is designed to be powerful, scalable, and intuitive. Before you dive in, it's important to understand the core concepts and architecture that power our services. This section provides a high-level overview of the key components you'll be working with.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-4"><CheckCircle className="w-8 h-8 mr-3 text-green-600" />2. Prerequisites</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Before you begin the installation process, please ensure your system meets the following minimum requirements. Adhering to these prerequisites will ensure a smooth and successful setup.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>A valid license key and account credentials.</li>
              <li>Administrator access to your server environment (Linux, Windows, or macOS).</li>
              <li>Access to your organization's cloud provider account (AWS, Azure, or GCP).</li>
              <li>Familiarity with basic command-line operations.</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-4"><Settings className="w-8 h-8 mr-3 text-purple-600" />3. Installation & Setup</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Follow these step-by-step instructions to install and configure the platform. The process is designed to be straightforward, but if you encounter any issues, please refer to the <a href="/resources/documentation/troubleshooting" className="text-[#0052CC] hover:underline">Troubleshooting</a> guide.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <pre className="text-sm text-gray-800"><code>
# Example installation command
npm install @our-solution/cli -g
              </code></pre>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Once the CLI tool is installed, run the initialization command and follow the on-screen prompts to configure your environment.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <pre className="text-sm text-gray-800"><code>
solution-cli init
              </code></pre>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-4"><Rocket className="w-8 h-8 mr-3 text-orange-600" />4. Your First Project</h2>
            <p className="text-gray-700 leading-relaxed">
              With the platform installed and configured, you're ready to create your first project. This tutorial will guide you through building a simple application that showcases the core features of our solution. By the end of this section, you will have a working application deployed and running.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-4"><ArrowRight className="w-8 h-8 mr-3 text-indigo-600" />5. Next Steps</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Congratulations on setting up your first project! You've only scratched the surface of what's possible. From here, we recommend exploring the following resources to continue your journey:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Explore our <a href="/resources/documentation/api-reference" className="text-[#0052CC] hover:underline">API Reference</a> to understand the full capabilities of our platform.</li>
              <li>Learn about our <a href="/resources/documentation/best-practices" className="text-[#0052CC] hover:underline">Best Practices</a> to ensure your applications are optimized for success.</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-4"><Zap className="w-8 h-8 mr-3 text-yellow-600" />6. Advanced Integration: AWS Lambda Powertools</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For users deploying our solutions within AWS Lambda environments, we highly recommend integrating with <a href="https://aws.amazon.com/blogs/developer/aws-lambda-powertools-typescript-best-practices/" target="_blank" rel="noopener noreferrer" className="text-[#0052CC] hover:underline">AWS Lambda Powertools</a>. This suite of utilities helps developers follow best practices for tracing, structured logging, and custom metrics, significantly enhancing observability and operational excellence.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Benefits:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Structured Logging:</strong> Easily filter and query logs in CloudWatch.</li>
              <li><strong>Distributed Tracing:</strong> Gain end-to-end visibility across microservices with AWS X-Ray.</li>
              <li><strong>Custom Metrics:</strong> Publish granular metrics to CloudWatch for advanced monitoring.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Refer to the official AWS Lambda Powertools documentation for specific implementation details based on your runtime (Python, Java, TypeScript).
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-4"><Code className="w-8 h-8 mr-3 text-red-600" />7. Agent Development Kit (ADK) Quickstart</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Agent Development Kit (ADK) empowers you to extend the capabilities of our platform by building custom agents tailored to your specific needs. The ADK provides a robust framework and libraries to streamline agent development, from data ingestion to advanced processing logic.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Getting Started with ADK:</h3>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Install the ADK:</strong> Use your preferred package manager to install the ADK in your development environment.</li>
            </ol>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <pre className="text-sm text-gray-800"><code>
# Example for Python
pip install our-solution-adk
              </code></pre>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <pre className="text-sm text-gray-800"><code>
# Example for Node.js
npm install @our-solution/adk
              </code></pre>
            </div>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-4" start={2}>
              <li><strong>Initialize Your Agent Project:</strong> Use the ADK CLI to scaffold a new agent project.</li>
            </ol>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <pre className="text-sm text-gray-800"><code>
adk init my-new-agent
              </code></pre>
            </div>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-4" start={3}>
              <li><strong>Develop Your Agent Logic:</strong> Implement your custom business logic using the ADK's provided APIs and components.</li>
              <li><strong>Deploy and Monitor:</strong> Deploy your agent to our platform and utilize our monitoring tools to ensure optimal performance.</li>
            </ol>
            <p className="text-gray-700 leading-relaxed">
              For detailed examples and API specifications, please consult the dedicated <a href="/resources/documentation/api-reference" className="text-[#0052CC] hover:underline">API Reference</a> within the API Reference section.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
