import React from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ProblemSection } from '@/components/ProblemSection';
import { SolutionSection } from '@/components/SolutionSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { ComingSoonSection } from '@/components/ComingSoonSection';
import { InvestmentSection } from '@/components/InvestmentSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <ComingSoonSection />
      <InvestmentSection />
      <Footer />
    </div>
  );
};

export default Index;
