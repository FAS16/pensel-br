import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const testimonials = [
  {
    quote: "Vi følte os trygge hele vejen igennem, og resultatet blev præcis som aftalt.",
    customer: "Privatkunde, Amager",
    task: "Indvendig maling af lejlighed",
  },
  {
    quote: "God dialog, flot finish og alt blev leveret til tiden.",
    customer: "Erhvervskunde, Vallensbæk",
    task: "Kontorlokaler",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Det siger vores kunder
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-lg text-foreground mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-sm">
                <p className="font-semibold text-foreground">{testimonial.customer}</p>
                <p className="text-muted-foreground">Opgave: {testimonial.task}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/anbefalinger">
              Se flere anmeldelser
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
