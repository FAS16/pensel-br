import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { EmpathySection } from "@/components/EmpathySection";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { Geography } from "@/components/Geography";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <EmpathySection />
        <Testimonials />
        <Gallery />
        <Geography />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
