import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Eye, Lightbulb, Sparkles, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Users,
    title: "Direkte kontakt",
    text: "Du taler direkte med dem, der udfører arbejdet. Ingen mellemled.",
  },
  {
    icon: Eye,
    title: "Vi ser opgaven",
    text: "Vi kommer og ser opgaven – ikke gætter ud fra billeder.",
  },
  {
    icon: Lightbulb,
    title: "Ærlig rådgivning",
    text: "Vi rådgiver også, hvis vi mener en anden løsning er bedre for dig.",
  },
  {
    icon: Sparkles,
    title: "Kvalitet i fokus",
    text: "Vi bruger kvalitetsprodukter og går op i finish og detaljer.",
  },
  {
    icon: CheckCircle,
    title: "Tilfredshedsgaranti",
    text: "Vi afslutter først, når du er tilfreds med resultatet.",
  },
];

const OmOs = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Om os"
        description="Mød de to brødre bag malerfirmaet. Over 10 års erfaring med professionelt malerarbejde i Storkøbenhavn. Kvalitet, ærlighed og god kundeservice."
        canonical="/om-os"
      />
      <Header />
      <main className="pt-20">
        {/* Hero with video background */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          {/* Video background */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            >
              <source src="/videos/om-os-hero.mp4" type="video/mp4" />
            </video>
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-foreground/60" />
          </div>
          
          {/* Content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-background mb-6">
                Om os
              </h1>
              <p className="text-lg md:text-xl text-background/90 leading-relaxed">
                To brødre med passion for håndværk og kundetilfredshed.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <article className="prose prose-lg mx-auto text-center">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Vores historie
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">

                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Vi er to brødre, der har arbejdet sammen i malerfaget i over 10 år.
                  Vi startede vores eget firma, fordi vi ville gøre tingene på vores egen måde –
                  med fokus på kvalitet, ærlighed og god kundeservice. Vi tror på, at godt håndværk
                  starter med god kommunikation, og vi sætter en ære i at lytte til vores kunder.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Vi kører ud til opgaver i hele Storkøbenhavn.
                  Uanset om det er en lille opgave eller et større projekt, behandler vi alle kunder ens – 
                  med respekt og engagement.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 lg:py-24 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Derfor vælger kunder os
              </h2>
            </div>

            <div className="max-w-2xl mx-auto space-y-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-sm border border-border"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground">{value.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Lad os tage en snak
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Vi vil gerne høre om din opgave og give dig et uforpligtende tilbud.
              </p>
              <Button size="lg" className="gap-2" asChild>
                <Link to="/kontakt">
                  Kontakt os
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OmOs;
