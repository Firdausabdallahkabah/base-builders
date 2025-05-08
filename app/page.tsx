"use client";
import React from 'react';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/Homepage/HeroSection';
import FeaturesSection from './components/Homepage/FeaturesSection';
import CTASection from './components/Homepage/CTASection';

const Index = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow bg-background">
        {/* Hero Section */}
       <HeroSection />

        {/* Features Section */}
      <FeaturesSection />

        {/* CTA Section */}
      <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;