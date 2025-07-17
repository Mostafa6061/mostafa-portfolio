"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen relative px-6 lg:px-8">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/10 rounded-full blur-lg" />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-primary/3 rounded-full blur-2xl" />
        <div className="absolute top-1/3 right-10 w-2 h-2 bg-primary rounded-full" />
        <div className="absolute top-1/2 left-20 w-1 h-1 bg-accent rounded-full" />
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-primary rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="min-h-screen flex items-center justify-center relative">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Status Badge - Positioned creatively */}
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 rotate-3">
              <div className="inline-flex items-center gap-2 bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm border border-border/50">
                {/* Star icon can be added here if needed */}
                Available for freelance work
              </div>
            </div>

            {/* Main Title - Scattered and rotated */}
            <div className="relative">
              <h1 className="text-6xl md:text-8xl font-bold leading-none">
                <div className="relative inline-block">
                  <span className="text-foreground block transform -rotate-1 relative z-10">
                    Creative
                  </span>
                  <div className="absolute -top-2 -right-8 w-16 h-1 bg-primary/30 transform rotate-12" />
                </div>

                <div className="relative my-4">
                  <span className="text-primary block transform rotate-2 translate-x-8 relative z-10">
                    Developer
                  </span>
                  <div className="absolute top-1/2 -left-4 w-12 h-12 border-2 border-accent/20 rounded-full transform -rotate-45" />
                </div>

                <div className="relative">
                  <span className="text-accent block transform -rotate-1 -translate-x-4">
                    & Designer
                  </span>
                  <div className="absolute -bottom-4 right-0 w-8 h-8 bg-primary/20 transform rotate-45" />
                </div>
              </h1>
            </div>

            {/* Description - Offset positioning */}
            <div className="mt-16 mb-12 relative">
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg transform translate-x-12 leading-relaxed">
                I craft beautiful digital experiences that combine innovative
                design with robust functionality.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground max-w-md transform -translate-x-8 mt-4 leading-relaxed">
                Let's build something extraordinary together.
              </p>

              {/* Decorative line */}
              <div className="absolute -top-4 left-8 w-20 h-px bg-gradient-to-r from-primary to-accent transform -rotate-12" />
            </div>

            {/* Buttons - Asymmetrical layout */}
            <div className="flex flex-col sm:flex-row gap-6 items-start relative">
              <div className="transform rotate-1 hover:rotate-0 transition-transform">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 group shadow-lg"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="transform -rotate-1 hover:rotate-0 transition-transform sm:translate-x-4 translate-y-2">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-border text-foreground hover:bg-muted shadow-lg"
                >
                  Download Resume
                </Button>
              </div>

              {/* Scattered dots around buttons */}
              <div className="absolute -top-2 -left-2 w-2 h-2 bg-accent rounded-full" />
              <div className="absolute -bottom-4 right-8 w-1 h-1 bg-primary rounded-full" />
              <div className="absolute top-1/2 -right-4 w-1.5 h-1.5 bg-accent/60 rounded-full" />
            </div>

            {/* Creative geometric shapes */}
            <div className="absolute top-0 right-0 w-16 h-16 border border-primary/20 transform rotate-45 translate-x-8 -translate-y-8" />
            <div className="absolute bottom-0 left-0 w-12 h-12 bg-accent/10 transform -rotate-12 -translate-x-6 translate-y-6" />
            <div className="absolute top-1/3 -right-8 w-20 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent transform rotate-45" />
            <div className="absolute bottom-1/3 -left-8 w-px h-16 bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
