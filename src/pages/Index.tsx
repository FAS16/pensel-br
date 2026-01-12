import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
import { Geography } from "@/components/Geography";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Eye, Lightbulb, Sparkles, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const reasons = [
  { icon: Users, text: "Du taler direkte med dem, der udfører arbejdet" },
  { icon: Eye, text: "Vi kommer og ser opgaven – ikke gætter ud fra billeder" },
  { icon: Lightbulb, text: "Vi rådgiver også, hvis vi mener en anden løsning er bedre" },
  { icon: Sparkles, text: "Vi bruger kvalitetsprodukter og går op i finish" },
  { icon: CheckCircle, text: "Vi afslutter først, når du er tilfreds" },
];

const featuredGallery = [
  { id: 1, src: gallery1, alt: "Indvendig maling" },
  { id: 2, src: gallery2, alt: "Udvendig maling" },
  { id: 3, src: gallery3, alt: "Erhvervsmaling" },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        
        {/* Why choose us */}
        <section className="py-20 lg:py-28 bg-secondary/50">
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
              <Button size="lg" className="gap-2" asChild>
                <Link to="/om-os">
                  Læs mere om os
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services preview */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Står du med en opgave?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
                Vi udfører alt inden for indendørs og udendørs malerarbejde – for private, virksomheder og foreninger.
                Uanset om det handler om en mindre opfriskning eller et større projekt, tager vi ansvar for processen og resultatet.
              </p>
              <Button size="lg" className="gap-2" asChild>
                <Link to="/ydelser">
                  Se vores ydelser
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <Testimonials />

        {/* Gallery preview */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Udvalgte opgaver
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10">
              {featuredGallery.map((image) => (
                <div
                  key={image.id}
                  className="aspect-square rounded-xl overflow-hidden group"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <Link to="/galleri">
                  Se flere billeder
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <Geography />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
