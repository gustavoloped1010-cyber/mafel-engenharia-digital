import { motion } from "framer-motion";
import { useState } from "react";
import houseFront from "@/assets/house-front.jpg";
import houseExterior from "@/assets/house-exterior.jpg";
import stoneWall from "@/assets/stone-wall.jpg";
import blueprintReview from "@/assets/blueprint-review.jpg";
import workerBack from "@/assets/worker-back.jpg";
import workerShirt from "@/assets/worker-shirt.jpg";
import ronaldoCasual from "@/assets/ronaldo-casual.jpg";
import logoMafel from "@/assets/logo-mafel.jpg";

const images = [
  { src: houseExterior, alt: "Fachada moderna" },
  { src: houseFront, alt: "Fachada residencial" },
  { src: stoneWall, alt: "Detalhe em pedra natural" },
  { src: blueprintReview, alt: "Análise de projeto em obra" },
  { src: workerBack, alt: "Equipe Mafel em campo" },
  { src: workerShirt, alt: "Equipe Mafel trabalhando" },
  { src: ronaldoCasual, alt: "Ronaldo Filho" },
  { src: logoMafel, alt: "Logo Mafel Engenharia" },
];

const GaleriaSection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <section id="galeria" className="section-padding" style={{ background: "var(--section-gradient)" }}>
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="label-text text-accent mb-4 text-center"
          >
            Nosso Trabalho
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-section text-foreground mb-16 text-center"
          >
            Galeria de Imagens
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="aspect-square overflow-hidden rounded-sm cursor-pointer group"
                onClick={() => setSelected(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4"
          onClick={() => setSelected(null)}
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            src={images[selected].src}
            alt={images[selected].alt}
            className="max-w-full max-h-[90vh] object-contain rounded-sm"
          />
        </div>
      )}
    </>
  );
};

export default GaleriaSection;
