import { motion } from "framer-motion";
import ronaldoImg from "@/assets/ronaldo-blazer.jpg";

const BioSection = () => {
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
          <div className="aspect-[3/4] overflow-hidden rounded-sm" style={{ boxShadow: "var(--warm-shadow)" }}>
            <img src={ronaldoImg} alt="Ronaldo Filho - Engenheiro Civil" className="w-full h-full object-cover" />
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
