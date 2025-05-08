import { FC } from "react";
import { Button } from "../ui/button";

type CTASectionProps = object

const CTASection: FC<CTASectionProps> = () => {
    const handleGetStarted = () => {
        // login();
      };
  return (
    <section className="py-16 md:py-24 px-6 base-gradient-bg text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to explore Base blockchain?
        </h2>
        <p className="text-xl mb-10 opacity-90">
          Join thousands of users who are already experiencing the future of finance with Base blockchain.
        </p>
        <Button
          onClick={handleGetStarted}
          size="lg"
          variant={"default"}
          className="text-base-blue hover:bg-opacity-90 text-lg px-8 py-6"
        >
          Get Started Now
        </Button>
      </div>
    </section>
  );
};

export default CTASection;