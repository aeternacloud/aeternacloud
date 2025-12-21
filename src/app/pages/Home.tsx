import { Hero } from '../components/Hero';
import { ServicesGrid } from '../components/ServicesGrid';
import { Testimonials } from '../components/Testimonials';
import { CTASection } from '../components/CTASection';
import { AIAssistant } from '../components/AIAssistant';

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ServicesGrid />
      <Testimonials />
      <CTASection />
      <AIAssistant />
    </div>
  );
}