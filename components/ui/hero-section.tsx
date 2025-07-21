"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { AvatarBubble } from "./picture";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-[80vh] lg:h-[80vh] relative px-4 sm:px-6 lg:px-8 pt-20 lg:pt-50 pb-10 lg:pb-0">
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
        {/* Avatar - Only show on large screens */}
        <div className="absolute right-1/4 top-1/4 transform -translate-y-1/2 hidden lg:block">
          <AvatarBubble />
        </div>

        <div className="flex items-center justify-center relative pt-20 lg:pt-0">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Top bar for mobile/tablet - Theme toggle and opportunities badge */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between lg:hidden">
              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 text-foreground px-3 py-2 rounded-full text-xs border border-primary/20 shadow-lg backdrop-blur-sm">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  Open to opportunities
                </div>
              </div>
              <ThemeToggle />
            </div>

            {/* Theme Toggle - Desktop positioning */}
            <div className="absolute left-0 top-1/4 transform -translate-y-1/2 translate-x-12 hidden lg:block">
              <ThemeToggle />
            </div>
            {/* Open to opportunities badge - Desktop only */}
            <div className="absolute left-0 top-1/2 transform translate-y-16 -rotate-2 z-50 hidden lg:block">
              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 text-foreground px-5 py-3 rounded-full text-sm border border-primary/20 shadow-lg backdrop-blur-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Open to opportunities
                </div>
                {/* Decorative elements for balance */}
                <div className="absolute -top-1 -right-1 w-3 h-3 border border-accent/30 rounded-full" />
                <div className="absolute -bottom-2 -left-2 w-1 h-1 bg-primary/40 rounded-full" />
              </div>
            </div>

            {/* Main Title - Responsive design */}
            <div className="relative text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-none">
                <div className="relative inline-block">
                  <span className="text-foreground block lg:transform lg:-rotate-1 relative z-10">
                    Learn,
                  </span>
                  <div className="absolute -top-2 -right-8 w-16 h-1 bg-primary/30 lg:transform lg:rotate-12 hidden lg:block" />
                </div>

                <div className="relative my-2 lg:my-4">
                  <span className="text-primary block lg:transform lg:rotate-2 lg:translate-x-8 relative z-10">
                    Build
                  </span>
                  <div className="absolute top-1/2 -left-4 w-12 h-12 border-2 border-accent/20 rounded-full lg:transform lg:-rotate-45 hidden lg:block" />
                </div>

                <div className="relative">
                  <span className="text-accent block lg:transform lg:-rotate-1 lg:-translate-x-4">
                    & Grow
                  </span>
                  <div className="absolute -bottom-4 right-0 w-8 h-8 bg-primary/20 lg:transform lg:rotate-45 hidden lg:block" />
                </div>
              </h1>
            </div>

            {/* Description - Mobile centered, desktop offset */}
            <div className="mt-8 lg:mt-16 mb-8 lg:mb-12 relative text-center lg:text-left">
              <p className="text-base sm:text-lg lg:text-xl font-bold text-muted-foreground max-w-lg mx-auto lg:mx-0 lg:transform lg:translate-x-12 leading-relaxed mb-4 lg:mb-0">
                Building websites is something I genuinely enjoy — there’s
                something deeply satisfying about finding the perfect balance
                between design and functionality.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-md mx-auto lg:mx-0 lg:transform lg:-translate-x-8 lg:mt-4 leading-relaxed">
                Let's build something together.
              </p>

              {/* Decorative line - hidden on mobile */}
              <div className="absolute -top-4 left-8 w-20 h-px bg-gradient-to-r from-primary to-accent lg:transform lg:-rotate-12 hidden lg:block" />
            </div>

            {/* Buttons - Mobile stacked, desktop asymmetrical */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 items-center lg:items-start relative justify-center lg:justify-start">
              <div className="lg:transform lg:rotate-1 hover:rotate-0 transition-transform w-full sm:w-auto">
                <a href="#work" className="block">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 group shadow-lg w-full sm:w-auto"
                  >
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>

              <div className="lg:transform lg:-rotate-1 hover:rotate-0 transition-transform lg:translate-x-4 lg:translate-y-2 w-full sm:w-auto">
                <a href="#contact" className="block">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-border text-foreground hover:bg-accent hover:text-black shadow-lg w-full sm:w-auto"
                  >
                    Download Resume
                  </Button>
                </a>
              </div>

              {/* Scattered dots around buttons - hidden on mobile */}
              <div className="absolute -top-2 -left-2 w-2 h-2 bg-accent rounded-full hidden lg:block" />
              <div className="absolute -bottom-4 right-8 w-1 h-1 bg-primary rounded-full hidden lg:block" />
              <div className="absolute top-1/2 -right-4 w-1.5 h-1.5 bg-accent/60 rounded-full hidden lg:block" />
            </div>

            {/* Creative geometric shapes - hidden on mobile */}
            <div className="absolute top-0 right-0 w-16 h-16 border border-primary/20 transform rotate-45 translate-x-8 -translate-y-8 hidden lg:block" />
            <div className="absolute bottom-0 left-0 w-12 h-12 bg-accent/10 transform -rotate-12 -translate-x-6 translate-y-6 hidden lg:block" />
            <div className="absolute top-1/3 -right-8 w-20 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent transform rotate-45 hidden lg:block" />
            <div className="absolute bottom-1/3 -left-8 w-px h-16 bg-gradient-to-b from-transparent via-accent/30 to-transparent hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
