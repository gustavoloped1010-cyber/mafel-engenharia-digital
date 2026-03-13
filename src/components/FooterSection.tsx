const FooterSection = () => {
  return (
    <footer className="bg-foreground py-8 px-6 text-center">
      <p className="label-text text-background/40 text-[10px]">
        © {new Date().getFullYear()} Mafel Engenharia. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default FooterSection;
