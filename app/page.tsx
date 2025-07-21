"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

import { HeroSection } from "@/components/ui/hero-section";
import { AboutSection } from "@/components/ui/about-section";
import { WorkSection } from "@/components/ui/work-section";
import { PhotographySection } from "@/components/ui/photography-section";
import { CtaSection } from "@/components/ui/cta-section";
import { Footer } from "@/components/ui/footer";

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="text-xl font-bold text-primary">Mostafa</div>
              <div className="hidden md:flex space-x-8">
                <a
                  href="#work"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Work
                </a>
                <a
                  href="#photography"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Photography
                </a>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {/* <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-muted-foreground hover:text-foreground"
              >
                {isVisible &&
                  (theme === "dark" ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  ))}
              </Button> */}
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground"
              >
                <Github className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Mail className="h-4 w-4 mr-2" />
                Send Me
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Creative & Messy */}
      <HeroSection />
      {/* About Section - Clean */}
      <AboutSection />
      {/* Featured Work Preview - Creative */}
      <WorkSection />
      {/* Photography Section - Creative */}
      <PhotographySection />
      {/* CTA Section - Clean */}
      <CtaSection />
      {/* Footer - Clean */}
      <Footer />
    </div>
  );
}
