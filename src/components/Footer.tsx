import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/malerbrdr-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company info */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="Maler Brdr. logo" 
                className="h-14 w-auto brightness-0 invert"
              />
              <span className="font-bold text-xl">Maler Brdr.</span>
            </Link>
            <p className="text-background/70 text-sm">
              Professionelt malerarbejde udført af to brødre. Vi dækker hele Storkøbenhavn.
            </p>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontakt</h3>
            <div className="space-y-3">
              <a href="tel:50593770" className="flex items-center gap-3 text-background/70 hover:text-background transition-colors">
                <Phone className="w-4 h-4" />
                <span>50 59 37 70</span>
              </a>
              <a href="mailto:kontakt@malerbrdr.dk" className="flex items-center gap-3 text-background/70 hover:text-background transition-colors">
                <Mail className="w-4 h-4" />
                <span>kontakt@malerbrdr.dk</span>
              </a>
              <div className="flex items-center gap-3 text-background/70">
                <MapPin className="w-4 h-4" />
                <span>Storkøbenhavn | København</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Sider</h3>
            <nav className="space-y-2">
              <Link to="/ydelser" className="block text-background/70 hover:text-background transition-colors">
                Ydelser
              </Link>
              <Link to="/om-os" className="block text-background/70 hover:text-background transition-colors">
                Om os
              </Link>
              <Link to="/galleri" className="block text-background/70 hover:text-background transition-colors">
                Galleri
              </Link>
              <Link to="/anbefalinger" className="block text-background/70 hover:text-background transition-colors">
                Anbefalinger
              </Link>
              <Link to="/kontakt" className="block text-background/70 hover:text-background transition-colors">
                Kontakt
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/50 text-sm">
          <p>© {new Date().getFullYear()} Maler Brdr. Alle rettigheder forbeholdes.</p>
        </div>
      </div>
    </footer>
  );
};
