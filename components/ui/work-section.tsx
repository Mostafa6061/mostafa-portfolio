"use client";

export function WorkSection() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-muted/20 relative overflow-hidden" id="work">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
            <span className="transform inline-block -rotate-1">My</span>
            <span className="transform inline-block rotate-1 ml-2">Work</span>
            <div className="absolute -bottom-4 left-1/4 w-16 h-1 bg-gradient-to-r from-primary/60 to-accent/60 transform -rotate-3" />
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto relative">
            A selection of projects that showcase my passion for creating meaningful digital experiences.
          </p>
          <div className="absolute top-0 right-1/4 w-1 h-1 bg-primary rounded-full" />
          <div className="absolute bottom-0 left-1/3 w-1.5 h-1.5 bg-accent/60 rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`group relative bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 transform ${i === 1 ? "rotate-1" : i === 2 ? "-rotate-1" : "rotate-1"} hover:rotate-0`}
            >
              <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold text-muted-foreground/20 transform -rotate-12">
                    {String(i).padStart(2, "0")}
                  </div>
                </div>
                <div className="absolute top-2 right-2 w-3 h-3 bg-primary/30 rounded-full" />
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-accent/40 rounded-full" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <div className="p-6 relative">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors relative">
                  <span className="transform inline-block hover:rotate-1 transition-transform">Project {i}</span>
                  {i === 2 && (
                    <div className="absolute -top-1 -right-2 w-6 h-6 border border-accent/20 transform rotate-45" />
                  )}
                </h3>
                <p className="text-muted-foreground mb-4 transform translate-x-1">
                  A modern {i === 1 ? "e-commerce" : i === 2 ? "dashboard" : "portfolio"} application built with cutting-edge technologies and thoughtful user experience design.
                </p>
                <div className="flex flex-wrap gap-2 relative">
                  <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full transform rotate-1 hover:rotate-0 transition-transform">React</span>
                  <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full transform -rotate-1 hover:rotate-0 transition-transform">TypeScript</span>
                  <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full transform rotate-1 hover:rotate-0 transition-transform">Tailwind</span>
                  <div className="absolute -bottom-1 right-0 w-1 h-1 bg-primary/60 rounded-full" />
                </div>
              </div>
              {i === 1 && (
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/20 transform rotate-45" />
              )}
              {i === 3 && (
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-accent/30 rounded-full" />
              )}
            </div>
          ))}
        </div>
        <div className="absolute top-1/2 -left-4 w-8 h-8 border border-primary/15 rounded-full transform -rotate-45" />
        <div className="absolute bottom-10 -right-4 w-6 h-6 bg-accent/10 transform rotate-12" />
      </div>
    </section>
  );
}