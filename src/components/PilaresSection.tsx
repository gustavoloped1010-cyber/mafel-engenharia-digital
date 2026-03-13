import { motion } from "framer-motion";
import { Settings, TrendingUp, Award } from "lucide-react";

const pillars = [
  {
    icon: Settings,
    title: "Gestão Estruturada",
    desc: "Processos bem definidos, cronogramas controlados e comunicação constante para maior assertividade.",
  },
  {
    icon: TrendingUp,
    title: "Melhoria Contínua",
    desc: "Evoluímos a cada projeto, com aprendizados aplicados em campo e em nossas rotinas de gestão.",
  },
  {
    icon: Award,
    title: "Qualidade Total",
    desc: "Desde os insumos até a execução, com foco na durabilidade e excelência de todos os serviços.",
  },
];

const PilaresSection = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="label-text text-primary-foreground/60 mb-4"
        >
          Nossos Pilares
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-section text-primary-foreground mb-6"
        >
          Porque existimos como empresa
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="body-text text-primary-foreground/70 max-w-2xl mx-auto mb-16"
        >
          Construir com propósito é o que nos move. Nosso compromisso vai além da entrega de uma obra. Queremos garantir uma jornada leve, técnica e segura para todos os envolvidos.
        </motion.p>
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-left p-8 rounded-sm border border-primary-foreground/10"
            >
              <p.icon className="w-8 h-8 text-primary-foreground/50 mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-primary-foreground mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {p.title}
              </h3>
              <p className="body-text text-primary-foreground/60 text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PilaresSection;
