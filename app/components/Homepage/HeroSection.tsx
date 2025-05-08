import { FC } from "react";
import { Button } from "../ui/button";

type HeroSectionProps = object

const HeroSection: FC<HeroSectionProps> = () => {

    const handleGetStarted = () => {
        // login();
      };

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-base-blue to-base-blue-dark bg-clip-text text-transparent">
          The easiest way to get started on Base
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Create a smart wallet, fund it, and try decentralized apps on Base blockchain with no technical knowledge required.
        </p>
        <Button
          onClick={handleGetStarted}
          size="lg"
          variant="default"
          className="text-lg px-8 py-6 base-button animate-pulse-slow"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;