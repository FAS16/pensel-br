import { Button } from "@/components/ui/button";
import { Users, Eye, Lightbulb, Sparkles, CheckCircle, ArrowRight } from "lucide-react";

const reasons = [
  {
    icon: Users,
    text: "Du taler direkte med dem, der udfører arbejdet",
  },
  {
    icon: Eye,
    text: "Vi kommer og ser opgaven – ikke gætter ud fra billeder",
  },
  {
    icon: Lightbulb,
    text: "Vi rådgiver også, hvis vi mener en anden løsning er bedre",
  },
  {
    icon: Sparkles,
    text: "Vi bruger kvalitetsprodukter og går op i finish",
  },
  {
    icon: CheckCircle,
    text: "Vi afslutter først, når du er tilfreds",
  },
];

export const WhyChooseUs = () => {
  return (
    <section id="om-os" className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Derfor vælger kunder os
          </h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-4 mb-10">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-foreground text-lg">{reason.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="gap-2">
            Tal med os om din opgave
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
