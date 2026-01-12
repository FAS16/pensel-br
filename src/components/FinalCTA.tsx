import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section id="kontakt" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Klar til at komme videre?
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Kontakt os for gratis rådgivning og et uforpligtende tilbud.
            Vi svarer hurtigt og kommer gerne forbi og ser opgaven.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Få tilbud
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 gap-2">
              <Phone className="w-5 h-5" />
              Ring direkte: 12 34 56 78
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
