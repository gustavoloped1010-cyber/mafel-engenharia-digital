import { motion } from "framer-motion";

const ModalidadesSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="label-text text-accent mb-4 text-center"
        >
          Modalidades de Contratação
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-section text-foreground mb-6 text-center"
        >
          Transparência e flexibilidade
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="body-text text-muted-foreground text-center max-w-2xl mx-auto mb-16"
        >
          Na Mafel Engenharia oferecemos duas modalidades para atender diferentes perfis de clientes e projetos, sempre com total transparência, gestão e previsibilidade.
        </motion.p>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-sm border border-border"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Empreitada Global
            </h3>
            <p className="body-text text-muted-foreground text-sm">
              Assumimos a responsabilidade total pela execução da obra. O cliente contrata um valor fechado e a Mafel Engenharia se encarrega de todas as etapas: compra de materiais, contratação de mão de obra, gerenciamento técnico e administrativo, além do cumprimento de prazos e orçamento acordados. Ideal para clientes que desejam comodidade, segurança contratual e orçamento controlado.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-sm border border-border"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Taxa de Administração
            </h3>
            <p className="body-text text-muted-foreground text-sm">
              O cliente contrata a Mafel Engenharia para gerenciar e executar a obra com uma taxa administrativa sobre o custo real do projeto. Toda movimentação financeira é transparente: o cliente paga diretamente pelos materiais e serviços, enquanto nossa equipe cuida da gestão, planejamento, contratações e execução técnica. Ideal para quem deseja maior controle sobre o investimento, com apoio técnico profissional.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ModalidadesSection;
