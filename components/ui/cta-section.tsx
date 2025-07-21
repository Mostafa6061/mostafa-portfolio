"use client";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-20 px-6 lg:px-8" id="contact">
      <div className="max-w-4xl mx-auto text-center bg-primary rounded-xl p-8 lg:p-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
          Ready to work together?
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          I'm always excited to take on new challenges and collaborate on
          projects that push the boundaries of what's possible.
        </p>
        <Button
          size="lg"
          className="bg-primary-foreground text-primary  hover:bg-accent hover:text-black"
        >
          <Mail className="mr-2 h-5 w-5" />
          Get In Touch
        </Button>
      </div>
    </section>
  );
}
