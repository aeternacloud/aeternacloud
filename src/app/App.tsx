import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { AIAssistant } from './components/AIAssistant';
import { ScrollToTop } from './components/ScrollToTop';

// Pages
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';

// Service Pages
import { SoftwareDevelopment } from './pages/services/SoftwareDevelopment';
import { WebDevelopment } from './pages/services/WebDevelopment';
import { AppDevelopment } from './pages/services/AppDevelopment';
import { UIUXDesign } from './pages/services/UIUXDesign';
import { CloudSolutions } from './pages/services/CloudSolutions';
import { SEOServices } from './pages/services/SEOServices';
import { DigitalMarketing } from './pages/services/DigitalMarketing';

// Company Pages
import { About } from './pages/company/About';
import { Team } from './pages/company/Team';
import { Careers } from './pages/company/Careers';
import { Blog } from './pages/company/Blog';

// Resource Pages
import { Documentation } from './pages/resources/Documentation';
import { CaseStudies } from './pages/resources/CaseStudies';
import { Whitepapers } from './pages/resources/Whitepapers';
import { FAQ } from './pages/resources/FAQ';
import { Support } from './pages/resources/Support';

// Legal Pages
import { Privacy } from './pages/legal/Privacy';
import { Terms } from './pages/legal/Terms';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-black">
        <Navigation />
        
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />

          {/* Services */}
          <Route path="/services/software-development" element={<SoftwareDevelopment />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/app-development" element={<AppDevelopment />} />
          <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
          <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
          <Route path="/services/seo-services" element={<SEOServices />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />

          {/* Company */}
          <Route path="/company/about" element={<About />} />
          <Route path="/company/team" element={<Team />} />
          <Route path="/company/careers" element={<Careers />} />
          <Route path="/company/blog" element={<Blog />} />

          {/* Resources */}
          <Route path="/resources/documentation" element={<Documentation />} />
          <Route path="/resources/case-studies" element={<CaseStudies />} />
          <Route path="/resources/whitepapers" element={<Whitepapers />} />
          <Route path="/resources/faq" element={<FAQ />} />
          <Route path="/resources/support" element={<Support />} />

          {/* Legal */}
          <Route path="/legal/privacy" element={<Privacy />} />
          <Route path="/legal/terms" element={<Terms />} />
        </Routes>

        <Footer />
        <AIAssistant />
      </div>
    </Router>
  );
}