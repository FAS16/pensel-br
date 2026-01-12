import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const galleryImages = [
  { id: 1, src: gallery1, alt: "Indvendig maling af stue" },
  { id: 2, src: gallery2, alt: "Udvendig facademaling" },
  { id: 3, src: gallery3, alt: "Kontormaling" },
  { id: 4, src: gallery4, alt: "Køkkenmaling" },
  { id: 5, src: gallery5, alt: "Trappeopgang" },
  { id: 6, src: gallery6, alt: "Soveværelse" },
];

export const Gallery = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Udvalgte opgaver
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-8">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="aspect-square rounded-xl overflow-hidden group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm">
          Alle billeder viser arbejde udført af os.
        </p>
      </div>
    </section>
  );
};
