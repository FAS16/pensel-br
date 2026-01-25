import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/malerbrdr-logo.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/ydelser", label: "Ydelser" },
    { href: "/om-os", label: "Om os" },
    { href: "/galleri", label: "Galleri" },
    { href: "/anbefalinger", label: "Anbefalinger" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Maler Brdr. logo" 
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`transition-colors ${
                  isActive(link.href)
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA buttons */}
          <div className="flex items-center gap-3">
            <a href="tel:12345678" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">12 34 56 78</span>
            </a>
            <Button className="hidden sm:inline-flex" asChild>
              <Link to="/kontakt">Få tilbud</Link>
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
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`py-2 transition-colors ${
                    isActive(link.href)
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <a href="tel:12345678" className="flex items-center gap-2 text-foreground">
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">12 34 56 78</span>
                </a>
                <Button className="w-full" asChild>
                  <Link to="/kontakt" onClick={() => setIsMenuOpen(false)}>
                    Få tilbud
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
