import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Credentials", href: "#certifications" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "px-3 pt-3" : "px-0 pt-0"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between transition-all duration-300 ${
          isScrolled
            ? "rounded-full border border-border/70 bg-background/85 px-5 py-3 shadow-2xl backdrop-blur-xl"
            : "px-6 py-5"
        }`}
      >
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-sm font-semibold text-primary">
            SF
          </div>
          <div>
            <p className="text-sm font-semibold tracking-wide text-foreground">Sidra Fiaz</p>
            <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">Data + Product</p>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://github.com/sidra733"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary hover:text-primary-foreground"
          >
            GitHub
          </a>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="text-foreground md:hidden"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {isMobileMenuOpen && (
        <div className="mx-3 mt-3 rounded-[1.5rem] border border-border bg-background/95 px-6 py-5 shadow-2xl backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://github.com/sidra733"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex w-fit rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
            >
              View GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
