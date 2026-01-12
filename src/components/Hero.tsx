import { Button } from "@/components/ui/button";
import { Phone, Clock, Calendar, Shield } from "lucide-react";
import { ContactForm } from "./ContactForm";

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-background to-secondary/30 pt-24 pb-16 lg:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Malerarbejde uden bøvl – udført af{" "}
                <span className="text-primary">to brødre</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Vi hjælper private og erhverv med indendørs og udendørs maling på hele Sjælland.
                Gratis rådgivning, uforpligtende tilbud og et resultat, vi står inde for.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6">
                Få gratis tilbud
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 gap-2">
                <Phone className="w-5 h-5" />
                Ring: 12 34 56 78
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-sm border border-border">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">Svar typisk samme dag</span>
              </div>
              <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-sm border border-border">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">Besigtigelse inden for 1–3 hverdage</span>
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
