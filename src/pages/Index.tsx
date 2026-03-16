import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BioSection from "@/components/BioSection";
import PilaresSection from "@/components/PilaresSection";
import ServicosSection from "@/components/ServicosSection";
import ModalidadesSection from "@/components/ModalidadesSection";
import DiferenciaisSection from "@/components/DiferenciaisSection";
import ProjetosSection from "@/components/ProjetosSection";
import GaleriaSection from "@/components/GaleriaSection";
import ContatoSection from "@/components/ContatoSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BioSection />
      <PilaresSection />
      <ServicosSection />
      <ModalidadesSection />
      <DiferenciaisSection />
      <ProjetosSection />
      <GaleriaSection />
      <ContatoSection />
      <FooterSection />
    </div>
  );
};

export default Index;
