import { motion } from "framer-motion";
import { PenTool, HardHat, MessageSquare } from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "Projetos",
    desc: "Renderização de projetos complementares compatibilizados. Através da compatibilização podemos ter uma melhor assertividade e reduzir erros.",
  },
  {
    icon: HardHat,
    title: "Obras Civis em Geral",
    desc: "Execução completa com equipe técnica qualificada, gestão de cronograma, medições e relatórios detalhados.",
  },
  {
    icon: MessageSquare,
    title: "Consultoria Técnica",
    desc: "Apoio na definição do projeto ideal, análise de viabilidade e compatibilização com orçamento executivo.",
  },
];

const ServicosSection = () => {
  return (
    <section id="servicos" className="section-padding" style={{ background: "var(--section-gradient)" }}>
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="label-text text-accent mb-4 text-center"
        >
          Esteira de Serviços
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-section text-foreground mb-16 text-center"
        >
          O que oferecemos
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card p-10 rounded-sm border border-border hover:border-accent/40 transition-colors"
              style={{ boxShadow: "var(--warm-shadow)" }}
            >
              <s.icon className="w-10 h-10 text-accent mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-semibold text-foreground mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {s.title}
              </h3>
              <p className="body-text text-muted-foreground text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicosSection;
