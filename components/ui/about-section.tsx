"use client";

export function AboutSection() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-muted/20" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Picture */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-muted border-2 border-border overflow-hidden relative">
                {/* Placeholder for profile picture */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                  <div className="text-6xl text-muted-foreground/30">📸</div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-sm text-muted-foreground bg-background/80 rounded-lg py-2 px-3">
                    Your Profile Picture
                  </p>
                </div>
              </div>
              {/* Minimal decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <div className="mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                I'm a passionate full-stack developer and designer with over 5
                years of experience creating digital solutions that matter.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe in the power of clean code, beautiful design, and
                meaningful user experiences.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">
                  Satisfaction
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                React
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                TypeScript
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Node.js
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                Design
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
