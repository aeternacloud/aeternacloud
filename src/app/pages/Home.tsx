import { Hero } from '../components/Hero';
import { ServicesGrid } from '../components/ServicesGrid';
import { Testimonials } from '../components/Testimonials';
import { CTASection } from '../components/CTASection';
import { SEO } from '../components/SEO';

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SEO />
      <Hero />
      <ServicesGrid />
      <Testimonials />
      <CTASection />
    </div>
  );
}