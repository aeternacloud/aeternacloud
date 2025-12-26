import { ChevronRight, Key, Code, FileText, ShieldCheck } from 'lucide-react';
import { SEO } from '@/app/components/SEO';

const Breadcrumb = () => (
  <nav className="flex items-center text-sm text-gray-500">
    <a href="/resources/documentation" className="hover:underline">Documentation</a>
    <ChevronRight className="w-4 h-4 mx-2" />
    <span className="font-medium text-gray-700">API Reference</span>
  </nav>
);

export function ApiReference() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="API Reference Documentation | AeternaCloud"
        description="Complete API reference for AeternaCloud services including endpoints, authentication, parameters, and code examples."
        url="https://aeternacloud.com/resources/documentation/api-reference"
      />
      <div className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb />
            <h1 className="mt-4 mb-6">
              <span className="block text-gray-900">API Reference</span>
              <span className="block bg-gradient-to-r from-[#0052CC] via-[#00C2FF] to-[#0052CC] bg-clip-text text-transparent">
                Integrate with confidence
              </span>
            </h1>
            <p className="text-gray-600">
              Our comprehensive API reference provides all the details you need to build powerful integrations. Explore endpoints, parameters, and request examples to get started.
            </p>
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-4"><Key className="w-8 h-8 mr-3 text-blue-600" />Authentication</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All API requests must be authenticated using an API key. You can generate and manage your API keys from your account dashboard. Include your API key in the request header as follows:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <pre className="text-sm text-gray-800"><code>
Authorization: Bearer YOUR_API_KEY
              </code></pre>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-4"><Code className="w-8 h-8 mr-3 text-green-600" />Endpoints</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our API is organized around REST principles. Below is a summary of the main resource endpoints.
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">GET /api/v1/projects</h3>
                <p className="text-gray-700 mb-3">
                  Retrieves a list of all projects associated with your account. Supports pagination and filtering.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li><strong>Parameters:</strong> limit (integer), offset (integer)</li>
                  <li><strong>Returns:</strong> A JSON object containing a list of project resources.</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">POST /api/v1/projects</h3>
                <p className="text-gray-700 mb-3">
                  Creates a new project. The request body must contain a JSON object with the project details.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li><strong>Body:</strong> <code className="bg-gray-100 px-1 rounded">{`{ "name": "New Project", "description": "A brief description." }`}</code></li>
                  <li><strong>Returns:</strong> The newly created project resource.</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">GET /api/v1/projects/:id</h3>
                <p className="text-gray-700 mb-3">
                  Retrieves a specific project by its unique ID.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li><strong>Parameters:</strong> id (string, required)</li>
                  <li><strong>Returns:</strong> The requested project resource.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-4"><ShieldCheck className="w-8 h-8 mr-3 text-red-600" />Rate Limiting</h2>
            <p className="text-gray-700 leading-relaxed">
              To ensure system stability, our API enforces rate limiting. Free tier accounts are limited to 100 requests per minute. Enterprise accounts have higher limits. Please check the response headers for <code className="bg-gray-100 px-1 rounded">X-RateLimit-Limit</code>, <code className="bg-gray-100 px-1 rounded">X-RateLimit-Remaining</code>, and <code className="bg-gray-100 px-1 rounded">X-RateLimit-Reset</code> to monitor your usage.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-4"><FileText className="w-8 h-8 mr-3 text-orange-600" />Error Handling</h2>
            <p className="text-gray-700 leading-relaxed">
              Our API uses standard HTTP status codes to indicate the success or failure of a request. A <code className="bg-gray-100 px-1 rounded">2xx</code> status code indicates success, while <code className="bg-gray-100 px-1 rounded">4xx</code> and <code className="bg-gray-100 px-1 rounded">5xx</code> codes indicate client-side and server-side errors, respectively. The response body will contain a JSON object with details about the error.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
