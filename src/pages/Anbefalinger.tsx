import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    quote: "Vi følte os trygge hele vejen igennem, og resultatet blev præcis som aftalt. Super professionelle og venlige.",
    customer: "Maria & Thomas",
    location: "Amager",
    task: "Indvendig maling af lejlighed",
    rating: 5,
  },
  {
    quote: "God dialog, flot finish og alt blev leveret til tiden. Vi kan varmt anbefale dem til andre virksomheder.",
    customer: "Henrik Jensen",
    location: "Valby",
    task: "Kontorlokaler",
    rating: 5,
  },
  {
    quote: "De kom med gode forslag til farver og løsninger, som vi ikke selv havde tænkt på. Resultatet blev fantastisk!",
    customer: "Anne Petersen",
    location: "Frederiksberg",
    task: "Stue og køkken",
    rating: 5,
  },
  {
    quote: "Punktlige, ryddelige og virkelig dygtige. Vores facade ser ud som ny. Vi er meget tilfredse.",
    customer: "Andelsforeningen Solbakken",
    location: "Nordvest",
    task: "Facademaling",
    rating: 5,
  },
  {
    quote: "Det var så nemt! De stod for alt fra start til slut, og vi kunne bare flytte ind i et nymalet hjem.",
    customer: "Sofie & Mads",
    location: "Østerbro",
    task: "Komplet maling af hus",
    rating: 5,
  },
  {
    quote: "Professionel rådgivning og et flot resultat. De overholdt både tidsplan og budget. Kan klart anbefales.",
    customer: "Lars Andersen",
    location: "Hellerup",
    task: "Soveværelser og entre",
    rating: 5,
  },
  {
    quote: "Meget tilfreds med arbejdet. De var grundige og efterlod alt pænt og ryddeligt. Bruger dem igen næste gang.",
    customer: "Kirsten Holm",
    location: "Hvidovre",
    task: "Køkken og badeværelse",
    rating: 5,
  },
  {
    quote: "Endelig et malerfirma der holder hvad de lover! Ærlige priser og fantastisk kvalitet.",
    customer: "Restaurant Havnen",
    location: "Dragør",
    task: "Renovering af restaurant",
    rating: 5,
  },
];

const Anbefalinger = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Anbefalinger"
        description="Læs hvad vores kunder siger om os. Se anmeldelser og anbefalinger fra private og erhvervskunder."
        canonical="/anbefalinger"
      />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-background to-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Anbefalinger
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Se hvad vores kunder siger om os. Vi er stolte af de relationer, vi bygger – og de resultater, vi leverer.
              </p>
            </div>
          </div>
        </section>

        {/* Video testimonial */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <span className="inline-flex items-center gap-2 text-primary font-medium mb-3">
                  <Star className="w-5 h-5 fill-accent text-accent" />
                  Videoanbefaling
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Hør hvad vores kunde siger
                </h2>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
                <video
                  controls
                  preload="metadata"
                  className="w-full aspect-video object-cover"
                  poster=""
                >
                  <source src="/videos/kundeanmeldelse.mp4" type="video/mp4" />
                  Din browser understøtter ikke video.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <p className="text-4xl font-bold mb-1">500+</p>
                <p className="text-primary-foreground/80 text-sm">Tilfredse kunder</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-1">10+</p>
                <p className="text-primary-foreground/80 text-sm">Års erfaring</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-1">5.0</p>
                <p className="text-primary-foreground/80 text-sm">Gennemsnitlig rating</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-1">100%</p>
                <p className="text-primary-foreground/80 text-sm">Vil anbefale os</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials grid */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <article
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow relative"
                >
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg text-foreground mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <footer className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.customer}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    <p className="text-sm text-primary mt-1">Opgave: {testimonial.task}</p>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Bliv vores næste tilfredse kunde
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Kontakt os i dag for en uforpligtende snak om din opgave. Vi glæder os til at hjælpe dig.
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

export default Anbefalinger;
