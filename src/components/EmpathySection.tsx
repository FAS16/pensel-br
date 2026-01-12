import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const EmpathySection = () => {
  return (
    <section id="ydelser" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Empathy block */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Står du med en opgave, der føles uoverskuelig?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Måske er det svært at vurdere omfang, pris eller den rigtige løsning.
              Vi hjælper dig med overblik og ro i maven – fra første kontakt til sidste penselstrøg.
            </p>
          </div>

          {/* Services overview */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/50 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Hvad vi hjælper med
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              Vi udfører alt inden for indendørs og udendørs malerarbejde – for private, virksomheder og foreninger.
              Uanset om det handler om en mindre opfriskning eller et større projekt, tager vi ansvar for processen og resultatet.
            </p>
            <Button size="lg" className="gap-2">
              Få vurderet din opgave
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
