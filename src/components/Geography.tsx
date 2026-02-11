import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";

export const Geography = () => {
  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-2 mb-6">
            <MapPin className="w-5 h-5" />
            <span className="text-sm font-medium">Vores dækningsområde</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vi dækker hele Storkøbenhavn
          </h2>
          
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Vi kører ud til opgaver i hele Storkøbenhavn.
          </p>
          
          <Button 
            size="lg" 
            variant="secondary"
            className="gap-2"
          >
            Kontakt os i dag
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
