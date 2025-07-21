"use client";

export function AboutSection() {
  return (
    <section className="py-20 px-6 lg:px-8" id="about">
      <div className="max-w-5/6 mx-auto bg-muted rounded-2xl px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="text-left lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-left">
              Hey, I'm Mostafa
            </h2>
            <div className="mb-8 text-left">
              <p className="text-lg   leading-relaxed mb-4">
                Hey, I'm Mostafa — a front-end developer focused on React and
                Next.js. I love exploring new tools to build secure,
                interactive, and modern products. With over a year of
                experience, I'm always looking for ways to grow.
              </p>
              <p className="text-lg  text-muted-foreground leading-relaxed">
                I love how code can turn ideas into real, functional, and
                beautiful solutions. ✨
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">1+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">
                  Satisfaction
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-center">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                React
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                TypeScript
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Next.js
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                Git
              </span>
            </div>
          </div>

          {/* Profile Picture - More Rounded */}
          <div className="flex justify-center lg:justify-end pr-30">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-muted border-2 border-border overflow-hidden relative">
                {/* Placeholder for profile picture */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                  <div className="text-6xl text-muted-foreground/30">
                    <img
                      src="/mostafa.jpeg"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              {/* Minimal decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
