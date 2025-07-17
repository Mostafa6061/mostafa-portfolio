"use client";
import { Button } from "@/components/ui/button";

export function PhotographySection() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-muted/20 relative overflow-hidden" id="photography">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-24 h-24 bg-primary/5 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
        <div className="absolute top-1/3 right-10 w-2 h-2 bg-primary rounded-full" />
        <div className="absolute bottom-1/3 left-10 w-1.5 h-1.5 bg-accent rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 rotate-12">
            <div className="w-12 h-12 border border-primary/20 rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
            <span className="transform inline-block -rotate-1">Photo</span>
            <span className="transform inline-block rotate-1 ml-2">Gallery</span>
            <div className="absolute -bottom-4 left-1/4 w-16 h-1 bg-gradient-to-r from-primary/60 to-accent/60 transform -rotate-3" />
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto relative">
            Capturing moments and stories through the lens. A curated selection of my photographic work.
          </p>
          <div className="absolute top-0 right-1/4 w-1 h-1 bg-primary rounded-full" />
          <div className="absolute bottom-0 left-1/3 w-1.5 h-1.5 bg-accent/60 rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`group relative bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 transform ${i === 1 ? "rotate-1" : i === 2 ? "-rotate-1" : i === 3 ? "rotate-1" : "-rotate-1"} hover:rotate-0`}
            >
              <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl text-muted-foreground/30 transform -rotate-12">📷</div>
                </div>
                <div className="absolute top-2 right-2 w-3 h-3 bg-primary/30 rounded-full" />
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-accent/40 rounded-full" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <div className="p-6 relative">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors relative">
                  <span className="transform inline-block hover:rotate-1 transition-transform">Photo {i}</span>
                  {i === 2 && (
                    <div className="absolute -top-1 -right-2 w-6 h-6 border border-accent/20 transform rotate-45" />
                  )}
                </h3>
                <p className="text-muted-foreground mb-4 transform translate-x-1">
                  A beautiful capture showcasing {i === 1 ? "portrait" : i === 2 ? "landscape" : i === 3 ? "street" : "nature"} photography with dramatic lighting and composition.
                </p>
                <div className="flex flex-wrap gap-2 relative">
                  <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full transform rotate-1 hover:rotate-0 transition-transform">{i === 1 ? "Portrait" : i === 2 ? "Landscape" : i === 3 ? "Street" : "Nature"}</span>
                  <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full transform -rotate-1 hover:rotate-0 transition-transform">2024</span>
                  <div className="absolute -bottom-1 right-0 w-1 h-1 bg-primary/60 rounded-full" />
                </div>
              </div>
              {i === 1 && (
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/20 transform rotate-45" />
              )}
              {i === 4 && (
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-accent/30 rounded-full" />
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-12 relative">
          <Button variant="outline" size="lg" className="border-border text-foreground hover:bg-muted transform rotate-1 hover:rotate-0 transition-all duration-300">
            View Full Gallery
          </Button>
          <div className="absolute -top-2 -right-4 w-2 h-2 bg-accent/40 rounded-full" />
          <div className="absolute -bottom-2 -left-4 w-1.5 h-1.5 bg-primary/60 rounded-full" />
        </div>
        <div className="absolute top-1/2 -left-4 w-8 h-8 border border-primary/15 rounded-full transform -rotate-45" />
        <div className="absolute bottom-10 -right-4 w-6 h-6 bg-accent/10 transform rotate-12" />
      </div>
    </section>
  );
}