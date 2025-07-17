"use client";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-20 px-6 lg:px-8" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to work together?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          I'm always excited to take on new challenges and collaborate on projects that push the boundaries of what's possible.
        </p>
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Mail className="mr-2 h-5 w-5" />
          Get In Touch
        </Button>
      </div>
    </section>
  );
}