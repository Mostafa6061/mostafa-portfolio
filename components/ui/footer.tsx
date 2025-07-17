"use client";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-muted-foreground mb-4 md:mb-0">
          © 2024 Mostafa Bahadori. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Terms
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
