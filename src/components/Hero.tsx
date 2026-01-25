import { Button } from "@/components/ui/button";
import { Phone, Clock, Calendar, Shield, Heart, Users } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { Link } from "react-router-dom";
export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-background to-secondary/30 pt-24 pb-16 lg:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Family badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Heart className="w-4 h-4" />
              Familiedrevet af to brødre siden 2014
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Malerarbejde med{" "}
                <span className="text-primary">personlig service</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Vi er to brødre, der elsker vores fag. Når du vælger os, får du ikke et anonymt firma – 
                du får direkte kontakt med dem, der udfører arbejdet. Ingen mellemled, bare ærligt håndværk.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/kontakt">Få gratis tilbud</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 gap-2" asChild>
                <a href="tel:50593770">
                  <Phone className="w-5 h-5" />
                  Ring: 50 59 37 70
                </a>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-sm border border-border">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">Du taler med os, ikke en receptionist</span>
              </div>
              <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-sm border border-border">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">Svar typisk samme dag</span>
              </div>
              <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-sm border border-border">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">Besigtigelse inden for 1–3 dage</span>
              </div>
              <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-sm border border-border">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">Tilfredshedsgaranti</span>
              </div>
            </div>
          </div>

          {/* Right - Contact form */}
          <div className="lg:pl-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
