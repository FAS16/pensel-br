import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_l69m6nu";
const EMAILJS_TEMPLATE_ID = "template_50e2ab6";
const EMAILJS_PUBLIC_KEY = "-fVgPJDXnY3Ifqwz4";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
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
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Tak for din henvendelse!",
        description: "Vi ringer dig op hurtigst muligt.",
      });
      setName("");
      setPhone("");
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
    <div id="contact-form" className="bg-card rounded-2xl p-8 shadow-elevated border border-border">
      <h2 className="text-2xl font-bold text-foreground mb-2">
        Få et hurtigt tilbud
      </h2>
      <p className="text-muted-foreground mb-6">
        Vi ringer tilbage hurtigst muligt og giver en ærlig vurdering – helt uforpligtende.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="text"
            placeholder="Dit navn"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="h-12 text-base"
          />
        </div>
        <div>
          <Input
            type="tel"
            placeholder="Telefonnummer"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="h-12 text-base"
          />
        </div>
        <Button 
          type="submit" 
          className="w-full h-12 text-base font-semibold"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sender..." : "Bliv ringet op"}
        </Button>
      </form>
    </div>
  );
};
