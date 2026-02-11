import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
import { Geography } from "@/components/Geography";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Eye, Lightbulb, Sparkles, CheckCircle, Heart } from "lucide-react";
import { Link } from "react-router-dom";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const reasons = [
  { icon: Heart, title: "Familiedrevet", text: "To brødre der personligt står bag hver opgave" },
  { icon: Users, title: "Direkte kontakt", text: "Du taler med dem, der udfører arbejdet" },
  { icon: Eye, title: "Vi ser opgaven", text: "Vi kommer forbi – ikke gætter ud fra billeder" },
  { icon: Sparkles, title: "Kvalitet i fokus", text: "Kun kvalitetsprodukter og omhyggelig finish" },
  { icon: CheckCircle, title: "Tilfredshedsgaranti", text: "Vi afslutter først, når du er tilfreds" },
];

const featuredGallery = [
  { id: 1, src: gallery1, alt: "Udvendig facademaling" },
  { id: 2, src: gallery2, alt: "Udvendig husmaling" },
  { id: 3, src: gallery3, alt: "Indvendig maling af værelse" },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO canonical="/" />
      <Header />
      <main>
        <Hero />
        
        {/* Why choose us */}
        <section className="py-20 lg:py-28 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-flex items-center gap-2 text-primary font-medium mb-4">
                <Heart className="w-5 h-5" />
                To brødre – ét mål
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Derfor stoler kunder på os
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Som familiedrevet firma er vores omdømme alt. Vi står personligt inde for kvaliteten af alt vores arbejde.
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
                    <h3 className="font-semibold text-foreground">{reason.title}</h3>
                    <p className="text-muted-foreground">{reason.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" className="gap-2" asChild>
                <Link to="/om-os">
                  Mød os personligt
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

        {/* Video testimonial */}
        <section className="py-20 lg:py-28 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-full md:w-auto flex-shrink-0">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-border max-w-[300px] mx-auto">
                  <video
                    controls
                    preload="metadata"
                    className="w-full aspect-[9/16] object-cover"
                  >
                    <source src="/videos/kundeanmeldelse.mp4" type="video/mp4" />
                    Din browser understøtter ikke video.
                  </video>
                </div>
              </div>
              <div className="text-center md:text-left">
                <span className="inline-flex items-center gap-2 text-primary font-medium mb-3">
                  <Heart className="w-5 h-5" />
                  Kundeanmeldelse
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Hør hvad vores kunde siger
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Se denne personlige anbefaling fra en af vores tilfredse kunder.
                </p>
                <Button variant="outline" size="lg" className="gap-2" asChild>
                  <Link to="/anbefalinger">
                    Se alle anbefalinger
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
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
                    loading="lazy"
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
