import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const items = [
  "Gestão de obras com indicadores e processos claros",
  "Acompanhamento técnico detalhado",
  "Compromisso com prazos e custos",
  "Comunicação ativa com cliente e parceiros",
  "Sistema de melhoria contínua",
  "Integração com parceiros (arquitetos, corretores, fornecedores)",
];

const DiferenciaisSection = () => {
  return (
    <section id="diferenciais" className="section-padding bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="label-text text-primary-foreground/60 mb-4"
        >
          Por que nos escolher
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-section text-primary-foreground mb-16"
        >
          Nossos Diferenciais
        </motion.h2>
        <div className="grid sm:grid-cols-2 gap-6 text-left">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-3"
            >
              <CheckCircle className="w-5 h-5 text-primary-foreground/50 mt-0.5 shrink-0" />
              <p className="body-text text-primary-foreground/80 text-sm">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiferenciaisSection;
