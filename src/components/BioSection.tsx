import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ronaldoImg from "@/assets/ronaldo-blazer.jpg";
import palestra1 from "@/assets/ronaldo-palestra-1.png";
import palestra2 from "@/assets/ronaldo-palestra-2.png";
import palestra3 from "@/assets/ronaldo-palestra-3.png";
import palestra4 from "@/assets/ronaldo-palestra-4.png";

const slides = [ronaldoImg, palestra1, palestra2, palestra3, palestra4];

const BioSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const go = (dir: number) => {
    setCurrent((prev) => (prev + dir + slides.length) % slides.length);
  };

  return (
    <section id="sobre" className="section-padding" style={{ background: "var(--section-gradient)" }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[3/4] overflow-hidden rounded-sm relative group" style={{ boxShadow: "var(--warm-shadow)" }}>
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={slides[current]}
                alt="Ronaldo Filho - Engenheiro Civil"
                className="w-full h-full object-cover absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
            <button
              onClick={() => go(-1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/60 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity text-foreground"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => go(1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/60 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity text-foreground"
            >
              <ChevronRight size={20} />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-accent" : "bg-background/50"}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="label-text text-accent mb-4">Sobre o Fundador</p>
          <h2 className="heading-section text-foreground mb-2">Ronaldo Filho</h2>
          <p className="body-text text-muted-foreground mb-6 italic">Engenheiro Civil | Fundador</p>
          <div className="space-y-4 body-text text-muted-foreground">
            <p>
              Sou Engenheiro Civil formado pela Universidade Católica de Pernambuco, com pós-graduação em Gestão de Obras e especialização em Orçamento e Planejamento de Obras.
            </p>
            <p>
              Minha trajetória começou em 2013, quando fundei a Mafel Engenharia. Desde então, venho me dedicando intensamente ao setor da construção civil, liderando obras com foco em eficiência, clareza e qualidade em cada detalhe.
            </p>
            <p>
              Uma gestão assertiva é a alma de qualquer empreendimento, e é com essa visão que conduzo a Mafel Engenharia. Um trabalho pautado por processos bem definidos, compromisso com a melhoria contínua e responsabilidade com cada parceiro e cliente.
            </p>
          </div>
          <blockquote className="mt-8 pl-6 border-l-2 border-accent italic text-foreground text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            "Uma gestão assertiva é a alma de qualquer empreendimento."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default BioSection;
