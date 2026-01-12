import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">M</span>
            </div>
            <span className="font-bold text-xl text-foreground hidden sm:block">
              Malerfirma
            </span>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#ydelser" className="text-muted-foreground hover:text-foreground transition-colors">
              Ydelser
            </a>
            <a href="#om-os" className="text-muted-foreground hover:text-foreground transition-colors">
              Om os
            </a>
            <a href="#galleri" className="text-muted-foreground hover:text-foreground transition-colors">
              Galleri
            </a>
            <a href="#kontakt" className="text-muted-foreground hover:text-foreground transition-colors">
              Kontakt
            </a>
          </nav>

          {/* CTA buttons */}
          <div className="flex items-center gap-3">
            <a href="tel:12345678" className="hidden sm:flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">12 34 56 78</span>
            </a>
            <Button className="hidden sm:inline-flex">
              Få tilbud
            </Button>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <a 
                href="#ydelser" 
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Ydelser
              </a>
              <a 
                href="#om-os" 
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Om os
              </a>
              <a 
                href="#galleri" 
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Galleri
              </a>
              <a 
                href="#kontakt" 
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </a>
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <a href="tel:12345678" className="flex items-center gap-2 text-foreground">
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">12 34 56 78</span>
                </a>
                <Button className="w-full">Få tilbud</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
