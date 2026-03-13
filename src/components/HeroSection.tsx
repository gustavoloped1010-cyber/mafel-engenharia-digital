import { motion } from "framer-motion";
import heroImg from "@/assets/house-exterior.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="label-text text-secondary mb-6"
        >
          Mafel Engenharia
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="heading-display text-primary-foreground mb-6"
        >
          Engenharia com Propósito
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="body-text text-secondary/90 max-w-2xl mx-auto mb-10"
        >
          Gestão, inovação e excelência em cada obra
        </motion.p>
        <motion.a
          href="https://wa.me/5587981532650"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-sm label-text hover:opacity-90 transition-opacity"
        >
          Fale Conosco
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
