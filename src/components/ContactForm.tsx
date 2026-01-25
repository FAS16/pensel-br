import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Tak for din henvendelse!",
      description: "Vi ringer dig op hurtigst muligt.",
    });
    setName("");
    setPhone("");
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
        <Button type="submit" className="w-full h-12 text-base font-semibold">
          Bliv ringet op
        </Button>
      </form>
    </div>
  );
};
