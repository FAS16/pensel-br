import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const galleryImages = [
  { id: 1, src: gallery1, alt: "Indvendig maling af stue", category: "Privat" },
  { id: 2, src: gallery2, alt: "Udvendig facademaling", category: "Udvendig" },
  { id: 3, src: gallery3, alt: "Kontormaling", category: "Erhverv" },
  { id: 4, src: gallery4, alt: "Køkkenmaling", category: "Privat" },
  { id: 5, src: gallery5, alt: "Trappeopgang", category: "Erhverv" },
  { id: 6, src: gallery6, alt: "Soveværelse", category: "Privat" },
];

const Galleri = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Galleri"
        description="Se billeder af vores malerarbejde. Indvendig og udvendig maling for private og erhverv. Alle billeder viser opgaver udført af os på Sjælland."
        canonical="/galleri"
      />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-background to-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Galleri
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Se eksempler på vores arbejde. Alle billeder viser opgaver udført af os.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery grid */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {galleryImages.map((image) => (
                <figure
                  key={image.id}
                  className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <figcaption className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full mb-2">
                        {image.category}
                      </span>
                      <p className="text-card font-semibold text-lg">
                        {image.alt}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Vil du se mere?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Kontakt os for at høre mere om vores tidligere projekter, eller få et tilbud på din egen opgave.
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

export default Galleri;
