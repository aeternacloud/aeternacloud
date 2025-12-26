import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { AIAssistant } from './components/AIAssistant';
import { ScrollToTop } from './components/ScrollToTop';
import { LoadingScreen } from './components/LoadingScreen';

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
import { Careers } from './pages/company/Careers';

// Resource Pages
import { Documentation } from './pages/resources/Documentation';
import { CaseStudies } from './pages/resources/CaseStudies';
import { FAQ } from './pages/resources/FAQ';
import { Support } from './pages/resources/Support';

// Documentation Pages
import { GettingStarted } from './pages/resources/documentation/GettingStarted';
import { ApiReference } from './pages/resources/documentation/ApiReference';
import { BestPractices } from './pages/resources/documentation/BestPractices';
import { Troubleshooting } from './pages/resources/documentation/Troubleshooting';
import { Changelog } from './pages/resources/documentation/Changelog';
import { SecurityAndCompliance } from './pages/resources/documentation/SecurityAndCompliance';
import { Glossary } from './pages/resources/documentation/Glossary';

// Legal Pages
import { Privacy } from './pages/legal/Privacy';
import { Terms } from './pages/legal/Terms';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for critical resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 second loading animation

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setShowLoader(false);
  };

  return (
    <Router>
      <ScrollToTop />
      {showLoader && (
        <LoadingScreen
          isLoading={isLoading}
          onLoadingComplete={handleLoadingComplete}
        />
      )}
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
          <Route path="/company/careers" element={<Careers />} />

          {/* Resources */}
          <Route path="/resources/documentation" element={<Documentation />} />
          <Route path="/resources/case-studies" element={<CaseStudies />} />
          <Route path="/resources/faq" element={<FAQ />} />
          <Route path="/resources/support" element={<Support />} />

          {/* Documentation Pages */}
          <Route path="/resources/documentation/getting-started" element={<GettingStarted />} />
          <Route path="/resources/documentation/api-reference" element={<ApiReference />} />
          <Route path="/resources/documentation/best-practices" element={<BestPractices />} />
          <Route path="/resources/documentation/troubleshooting" element={<Troubleshooting />} />
          <Route path="/resources/documentation/changelog" element={<Changelog />} />
          <Route path="/resources/documentation/security-and-compliance" element={<SecurityAndCompliance />} />
          <Route path="/resources/documentation/glossary" element={<Glossary />} />

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