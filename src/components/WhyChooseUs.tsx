import { Button } from "@/components/ui/button";
import { Users, Eye, Lightbulb, Sparkles, CheckCircle, ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const reasons = [
  {
    icon: Heart,
    title: "Familiedrevet virksomhed",
    text: "Vi er to brødre, der har arbejdet sammen i over 10 år. Du møder os personligt på alle opgaver.",
  },
  {
    icon: Users,
    title: "Direkte kontakt",
    text: "Du taler direkte med dem, der udfører arbejdet – ingen mellemled eller call centre.",
  },
  {
    icon: Eye,
    title: "Vi ser din opgave",
    text: "Vi kommer altid forbi og ser opgaven, så du får et præcist og ærligt tilbud.",
  },
  {
    icon: Lightbulb,
    title: "Ærlig rådgivning",
    text: "Vi rådgiver ærligt – også hvis vi mener, en anden løsning er bedre for dig.",
  },
  {
    icon: Sparkles,
    title: "Kvalitet i fokus",
    text: "Vi bruger kun kvalitetsprodukter og går op i detaljer og finish.",
  },
  {
    icon: CheckCircle,
    title: "Tilfredshedsgaranti",
    text: "Vi afslutter først, når du er 100% tilfreds med resultatet.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section id="om-os" className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-2 text-primary font-medium mb-4">
            <Heart className="w-5 h-5" />
            To brødre – ét mål
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Derfor stoler kunder på os
          </h2>
          <p className="text-lg text-muted-foreground">
            Når du vælger et familiedrevet firma, får du personlig service og folk, der står inde for deres arbejde.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-4 mb-10">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-card rounded-xl p-5 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="gap-2" asChild>
            <Link to="/kontakt">
              Tal med os om din opgave
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
