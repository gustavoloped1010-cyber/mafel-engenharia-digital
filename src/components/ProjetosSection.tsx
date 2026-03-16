import { motion } from "framer-motion";
import { useState } from "react";
import projeto1 from "@/assets/projeto-1.jpg";
import projeto2 from "@/assets/projeto-2.jpg";
import projeto3 from "@/assets/projeto-3.jpg";
import projeto4 from "@/assets/projeto-4.jpg";
import projeto5 from "@/assets/projeto-5.jpg";
import projeto6 from "@/assets/projeto-6.jpg";
import projeto7 from "@/assets/projeto-7.jpg";
import projeto8 from "@/assets/projeto-8.jpg";
import projeto9 from "@/assets/projeto-9.jpg";
import projeto10 from "@/assets/projeto-10.jpg";

const projetos = [
  { src: projeto1, alt: "Fachada moderna com garagem" },
  { src: projeto2, alt: "Fachada contemporânea" },
  { src: projeto3, alt: "Interior - Cozinha e sala de jantar" },
  { src: projeto4, alt: "Interior - Sala de estar com escada" },
  { src: projeto5, alt: "Interior - Sala de TV" },
  { src: projeto6, alt: "Fachada minimalista" },
  { src: projeto7, alt: "Área externa com churrasqueira" },
  { src: projeto8, alt: "Cozinha planejada" },
  { src: projeto9, alt: "Entrega de chaves Mafel" },
  { src: projeto10, alt: "Entrega de imóvel Mafel" },
];

const ProjetosSection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <section id="projetos" className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="label-text text-accent mb-4 text-center"
          >
            Portfólio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-section text-foreground mb-6 text-center"
          >
            Projetos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-center max-w-2xl mx-auto mb-16"
          >
            Conheça alguns dos nossos projetos executados com excelência e atenção aos detalhes.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {projetos.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`overflow-hidden rounded-sm cursor-pointer group ${
                  i < 2 ? "md:col-span-1 lg:col-span-2 aspect-video" : "aspect-square"
                }`}
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
            src={projetos[selected].src}
            alt={projetos[selected].alt}
            className="max-w-full max-h-[90vh] object-contain rounded-sm"
          />
        </div>
      )}
    </>
  );
};

export default ProjetosSection;
