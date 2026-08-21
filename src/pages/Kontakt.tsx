import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { trackLeadFormSuccess } from "@/lib/analytics";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_l69m6nu";
const EMAILJS_TEMPLATE_ID = "template_phamqhw";
const EMAILJS_PUBLIC_KEY = "-fVgPJDXnY3Ifqwz4";

const Kontakt = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          phone: phone,
          email: email,
          message: message,
        },
        EMAILJS_PUBLIC_KEY
      );

      trackLeadFormSuccess("contact_form");

      toast({
        title: "Tak for din henvendelse!",
        description: "Vi vender tilbage til dig hurtigst muligt.",
      });
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Noget gik galt",
        description: "Prøv venligst igen eller ring til os direkte.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Kontakt"
        description="Kontakt os for gratis rådgivning og uforpligtende tilbud på malerarbejde. Ring 50 59 37 70 eller udfyld formularen. Vi dækker hele Storkøbenhavn."
        canonical="/kontakt"
      />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-background to-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Kontakt os
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Vi er klar til at hjælpe dig. Ring, skriv eller udfyld formularen – vi svarer hurtigt.
              </p>
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact info */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-8">
                  Kontaktoplysninger
                </h2>
                
                <address className="space-y-6 not-italic">
                  <a 
                    href="tel:50593770" 
                    className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Telefon</h3>
                      <p className="text-muted-foreground">50 59 37 70</p>
                      <p className="text-sm text-muted-foreground mt-1">Ring og få en hurtig vurdering</p>
                    </div>
                  </a>

                  <a 
                    href="mailto:kontakt@malerbrdr.dk" 
                    className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground">kontakt@malerbrdr.dk</p>
                      <p className="text-sm text-muted-foreground mt-1">Vi svarer inden for 24 timer</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Område</h3>
                      <p className="text-muted-foreground">København | Storkøbenhavn</p>
                      <p className="text-sm text-muted-foreground mt-1">Vi dækker hele Storkøbenhavn</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Åbningstider</h3>
                      <p className="text-muted-foreground">Man-fre: 07:00 - 16:00</p>
                      <p className="text-sm text-muted-foreground mt-1">Besigtigelse efter aftale</p>
                    </div>
                  </div>
                </address>
              </div>

              {/* Contact form */}
              <div>
                <div className="bg-card rounded-2xl p-8 shadow-elevated border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Send os en besked
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Beskriv din opgave, og vi vender tilbage med et uforpligtende tilbud.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="sr-only">Dit navn</label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Dit navn"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="h-12 text-base"
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="sr-only">Telefon</label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Telefon"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                          className="h-12 text-base"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="h-12 text-base"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="sr-only">Beskriv din opgave</label>
                      <Textarea
                        id="message"
                        placeholder="Beskriv din opgave..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="min-h-32 text-base resize-none"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full h-12 text-base font-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sender..." : "Send besked"}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Kontakt;
