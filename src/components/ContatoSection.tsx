import { motion } from "framer-motion";
import { Instagram, Phone, MapPin } from "lucide-react";

const ContatoSection = () => {
  return (
    <section id="contato" className="section-padding bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="label-text text-primary-foreground/60 mb-4"
        >
          Contato
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-section text-primary-foreground mb-12"
        >
          Vamos construir juntos?
        </motion.h2>
        <div className="grid sm:grid-cols-3 gap-8 mb-12">
          <motion.a
            href="https://instagram.com/nossomafel"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            <Instagram className="w-6 h-6" />
            <span className="body-text text-sm">@nossomafel</span>
          </motion.a>
          <motion.a
            href="https://wa.me/5587981532650"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            <Phone className="w-6 h-6" />
            <span className="body-text text-sm">(87) 98153-2650</span>
          </motion.a>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-3 text-primary-foreground/80"
          >
            <MapPin className="w-6 h-6" />
            <span className="body-text text-sm">Serra Talhada - PE</span>
          </motion.div>
        </div>
        <motion.a
          href="https://wa.me/5587981532650"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block bg-accent text-accent-foreground px-10 py-4 rounded-sm label-text hover:opacity-90 transition-opacity"
        >
          Solicite um Orçamento
        </motion.a>
      </div>
    </section>
  );
};

export default ContatoSection;
