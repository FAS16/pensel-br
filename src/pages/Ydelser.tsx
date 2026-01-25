import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Building2, Paintbrush, PaintBucket, Brush, Palette } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Home,
    title: "Indvendig maling – private",
    description: "Vi maler stuer, soveværelser, køkkener, badeværelser og alle andre rum i din bolig. Vi rådgiver om farvevalg og sikrer en flot, holdbar finish.",
  },
  {
    icon: Building2,
    title: "Indvendig maling – erhverv",
    description: "Kontorer, butikker, trappeopgange og fællesarealer. Vi arbejder effektivt og kan tilpasse tidspunkter, så det ikke forstyrrer jeres drift.",
  },
  {
    icon: Paintbrush,
    title: "Udvendig maling",
    description: "Facader, vinduer, døre og træværk. Vi bruger vejrbestandige kvalitetsprodukter, der holder i mange år.",
  },
  {
    icon: PaintBucket,
    title: "Microcement",
    description: "Moderne og holdbar overflade til gulve, vægge og møbler. Microcement giver et smukt, fugeløst look med industriel elegance.",
  },
  {
    icon: Brush,
    title: "Spartling og tapetsering",
    description: "Forberedelse er alt. Vi sørger for glatte vægge og kan også hjælpe med tapetsering.",
  },
  {
    icon: Palette,
    title: "Farverådgivning",
    description: "Usikker på farvevalget? Vi hjælper dig med at finde den rette løsning til dit rum og stil.",
  },
];

const Ydelser = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Ydelser"
        description="Se vores malerydelser: indvendig og udvendig maling, spartling, tapetsering og farverådgivning. Vi hjælper private og erhverv på hele Sjælland."
        canonical="/ydelser"
      />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-background to-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Vores ydelser
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Vi udfører alt inden for indendørs og udendørs malerarbejde – for private, virksomheder og foreninger.
              </p>
            </div>
          </div>
        </section>

        {/* Services grid */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <article
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
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
                Har du en opgave?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Kontakt os for en uforpligtende snak om dit projekt. Vi kommer gerne forbi og giver et tilbud.
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

export default Ydelser;
